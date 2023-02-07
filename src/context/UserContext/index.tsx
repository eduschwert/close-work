import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { ServiceContext } from "../ServicesContext";
import { iServiceResponse } from "../ServicesContext/@types";
import {
  iUserContext,
  iUserProviderProps,
  iUser,
  iUserFormRegister,
  iUserResponse,
  iUserProfileResponse,
  iUserFormLogin,
  iUserFormEdit,
} from "./@types";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const { setServices } = useContext(ServiceContext);

  const [user, setUser] = useState<null | iUser>(null);

  const [globalLoading, setGlobalLoading] = useState(true);
  const [localLoading, setLocalLoading] = useState(false);

  const navigate = useNavigate();

  const register = async (formData: iUserFormRegister) => {
    delete formData.passwordConfirm;
    try {
      setLocalLoading(true);
      await api.post<iUserResponse>("/register", formData);
      toast.success("Registro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("Ops! Algo deu errado, faça o registro novamente");
    } finally {
      setLocalLoading(false);
    }
  };

  const login = async (formData: iUserFormLogin) => {
    try {
      setLocalLoading(true);
      const response = await api.post<iUserResponse>("/login", formData);
      setUser(response.data.user);
      toast.success("Login realizado com sucesso!");
      localStorage.setItem(
        "@closework:token",
        JSON.stringify(response.data.accessToken)
      );
      localStorage.setItem(
        "@closework:userId",
        JSON.stringify(response.data.user.id)
      );
      api.defaults.headers.common.authorization = `Bearer ${response.data.user.id}`;
      const responseServices = response.data.user.isWorker
        ? await api.get<[] | iServiceResponse[]>(
            `/services?userId=${response.data.user.id}&_embed=comments`
          )
        : await api.get<[] | iServiceResponse[]>("/services?_embed=comments");
      setServices(responseServices.data);
      response.data.user.isWorker
        ? (navigate("/dashboard"), { replace: true })
        : (navigate("/home"), { replace: true });
    } catch (error) {
      console.error(error);
      toast.error("Ops! Algo deu errado, faça o login novamente");
    } finally {
      setLocalLoading(false);
    }
  };

  const editUser = async (formData: iUserFormEdit) => {
    let token = localStorage.getItem("@closework:token");
    let id = localStorage.getItem("@closework:userId");

    if (!token || !id) {
      toast.error("Erro ao editar seu usuário, faça login novamente!");
      setUser(null);
    } else {
      setLocalLoading(true);
      try {
        token = JSON.parse(token);
        id = JSON.parse(id);
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const response = await api.patch<iUserProfileResponse>(
          `/users/${id}`,
          formData
        );
        delete response.data.password;
        setUser(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Erro ao editar seu usuário, faça login novamente!");
        localStorage.removeItem("@closework:token");
        localStorage.removeItem("@closework:userId");
        setUser(null);
      } finally {
        setLocalLoading(false);
      }
    }
  };

  const deleteUser = async () => {
    let token = localStorage.getItem("@closework:token");
    let id = localStorage.getItem("@closework:userId");

    if (!token || !id) {
      toast.error("Erro ao deletar seu usuário, faça login novamente!");
      setUser(null);
    } else {
      try {
        setLocalLoading(true);
        token = JSON.parse(token);
        id = JSON.parse(id);
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        await api.delete(`/users/${id}`);
        setUser(null);
      } catch (error) {
        console.error(error);
        toast.error("Erro ao deletar seu usuário, faça login novamente!");
        localStorage.removeItem("@closework:token");
        localStorage.removeItem("@closework:userId");
        setUser(null);
      } finally {
        setLocalLoading(false);
      }
    }
  };

  const handleLogout = () => {
    toast.success("Logout realizado com sucesso!");
    localStorage.removeItem("@closework:token");
    localStorage.removeItem("@closework:userId");
    setUser(null);
    navigate("/login"), { replace: true };
  };

  useEffect(() => {
    const loadUser = async () => {
      let token = localStorage.getItem("@closework:token");
      let id = localStorage.getItem("@closework:userId");

      if (id && token) {
        try {
          token = JSON.parse(token);
          id = JSON.parse(id);
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          let response = await api.get<iUserProfileResponse>(`/users/${id}`);
          delete response.data.password;
          setUser(response.data);
          const responseServices = response.data.isWorker
            ? await api.get<[] | iServiceResponse[]>(
                `/services?userId=${response.data.id}&_embed=comments`
              )
            : await api.get<[] | iServiceResponse[]>(
                "/services?_embed=comments"
              );
          setServices(responseServices.data);
          response.data.isWorker
            ? (navigate("/dashboard"), { replace: true })
            : (navigate("/home"), { replace: true });
        } catch (error) {
          console.error(error);
          localStorage.removeItem("@closework:token");
          localStorage.removeItem("@closework:userId");
        } finally {
          setGlobalLoading(false);
        }
      }
    };
    loadUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        localLoading,
        setLocalLoading,
        globalLoading,
        user,
        setUser,
        login,
        register,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
