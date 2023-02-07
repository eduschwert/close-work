import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { UserContext } from "../UserContext";
import {
  iServiceContext,
  iServiceProviderProps,
  iServiceResponse,
  iServiceRequest,
  iServiceFormCreate,
  iServiceFormEdit,
} from "./@types";

export const ServiceContext = createContext({} as iServiceContext);

export const ServiceProvider = ({ children }: iServiceProviderProps) => {
  const { user, setUser, setLocalLoading } = useContext(UserContext);

  const [services, setServices] = useState<[] | iServiceResponse[]>([]);

  const [kindOfService, setKindOfService] = useState("Todos");
  const kindOfServices = [
    "Todos",
    "Pedreiro",
    "Servente de Pedreiro",
    "Encanador",
    "Doceira",
    "Costureira",
    "Babá",
    "Cozinheira",
    "Manicure e Pedicure",
    "Barbeiro",
    "Cabeleireira",
    "Outros",
  ];

  const [openModal, setOpenModal] = useState(false);
  const [isClosing, setClosing] = useState(false);
  const [typeModal, setTypeModal] = useState("");
  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setOpenModal(false);
    }, 200);
  };

  const createService = async (formData: iServiceFormCreate) => {
    let token = localStorage.getItem("@closework:token");
    let id = localStorage.getItem("@closework:userId");

    if (!token || !id) {
      toast.error("Login expirado, faça login novamente!");
      setUser(null);
    } else {
      if (user) {
        const serviceRequest: iServiceRequest = {
          ...formData,
          userId: user.id,
          service_provider: user.name,
          service_provider_avatar: user?.avatar,
          phone_number: user?.contact,
        };
      }
      try {
        setLocalLoading(true);
        token = JSON.parse(token);
        id = JSON.parse(id);
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        await api.post("/services");
        const response = await api.get<[] | iServiceResponse[]>(
          `/services?userId=${id}&_embed=comments`
        );
        setServices(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Erro, faça login novamente!");
        setUser(null);
      } finally {
        setLocalLoading(false);
      }
    }
  };

  const editService = async (formData: iServiceFormEdit, serviceId: number) => {
    let token = localStorage.getItem("@closework:token");
    let id = localStorage.getItem("@closework:userId");

    if (!token || !id) {
      toast.error("Login expirado, faça login novamente!");
      setUser(null);
    } else {
      try {
        setLocalLoading(true);
        token = JSON.parse(token);
        id = JSON.parse(id);
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        await api.patch(`/services?${serviceId}`);
        const response = await api.get<[] | iServiceResponse[]>(
          `/services?userId=${id}&_embed=comments`
        );
        setServices(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Erro, faça login novamente!");
        setUser(null);
      } finally {
        setLocalLoading(false);
      }
    }
  };

  const deleteService = async (serviceId: number) => {
    let token = localStorage.getItem("@closework:token");
    let id = localStorage.getItem("@closework:userId");

    if (!token || !id) {
      toast.error("Erro, faça login novamente!");
      setUser(null);
    } else {
      try {
        setLocalLoading(true);
        token = JSON.parse(token);
        id = JSON.parse(id);
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        await api.delete(`/services?${serviceId}`);
        const response = await api.get<[] | iServiceResponse[]>(
          `/services?userId=${id}&_embed=comments`
        );
        setServices(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Erro, faça login novamente!");
        setUser(null);
      } finally {
        setLocalLoading(false);
      }
    }
  };
  let filteredServices: [] | iServiceResponse[] = [];
  if (user && !user.isWorker) {
    filteredServices = services.filter((service) =>
      kindOfService === "Todos"
        ? true
        : kindOfService === service.kind_of_service
    );
  }

  return (
    <ServiceContext.Provider
      value={{
        services,
        setServices,
        filteredServices,
        kindOfServices,
        setKindOfService,
        isClosing,
        openModal,
        setOpenModal,
        closeModal,
        typeModal,
        setTypeModal,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
