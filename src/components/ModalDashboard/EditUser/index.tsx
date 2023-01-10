import { Button } from "../../Button";
import { DivModal } from "../style";
import { DivEdit, FormEdit } from "./style";
import { Input } from "../../Input";
import { HeaderModal } from "../HeaderModal";
import { useContext } from "react";
import { ServiceContext } from "../../../context/ServiceContext";
import { useOutClick } from "../../../hooks/useOutClick";
import { UserContext } from "../../../context/UserContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editProfileSchema } from "./editUserSchema";
import { api } from "../../../services/api";
import { RotatingLines } from "react-loader-spinner";

interface iEditProfileSubmit {
  name: string;
  contact: string;
  avatar: string;
}

export const EditUser = () => {
  const {
    setOpenModal,
    setTypeModal,
    loadingButtonModal,
    setLoadingButtonModal,
    listServiceUserLogged,
    infosModalEditService,
    requestRegisteredUserServices,
  } = useContext(ServiceContext);
  const { userProfile, setUserProfile } = useContext(UserContext);

  const modalRef = useOutClick(() => {
    setOpenModal(false);
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditProfileSubmit>({
    mode: "onBlur",
    resolver: yupResolver(editProfileSchema),
    defaultValues: {
      name: userProfile.name,
      contact: userProfile.contact,
      avatar: userProfile.avatar,
    },
  });

  const updateServiceInformation = async (user: any) => {
    const token = localStorage.getItem("@closework:token");

    const request = async (data: any) => {
      if (token) {
        try {
          const response = await api.patch(`/services/${data.id}`, data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          return response;
        } catch (error) {
          console.log(error);
        } finally {
        }
      }
    };

    const promises = listServiceUserLogged.map(async (url, idx) => {
      const serviceTemp = {
        ...url,
        phone_number: user.contact,
        service_provider: user.name,
        service_provider_avatar: user.avatar,
      };
      request(serviceTemp);
    });

    await Promise.all(promises);

    requestRegisteredUserServices();
  };

  const onSubmitEditProfile: SubmitHandler<iEditProfileSubmit> = async (
    data
  ) => {
    const token = localStorage.getItem("@closework:token");
    const userId = localStorage.getItem("@closework:userId");
    if (token) {
      if (userId) {
        try {
          setLoadingButtonModal(true);
          const response = await api.patch(`/users/${userId}`, data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const user = response.data;
          delete user.password;
          setUserProfile(user);
          updateServiceInformation(user);
          setTimeout(() => {
            setOpenModal(false);
          }, 500);
        } catch (error) {
          setLoadingButtonModal(true);
          console.log(error);
        } finally {
          setLoadingButtonModal(false);
        }
      }
    }
  };

  return (
    <DivModal ref={modalRef}>
      <DivEdit>
        <HeaderModal />
        <FormEdit onSubmit={handleSubmit(onSubmitEditProfile)}>
          <Input
            id="name"
            labelName="Nome"
            placeholder="Digite seu nome"
            type="text"
            linkForm={register("name")}
            error={errors.name?.message}
          />
          <Input
            id="contact"
            labelName="Contato"
            placeholder="(xx)xxxxxxxxx"
            type="text"
            linkForm={register("contact")}
            error={errors.contact?.message}
          />
          <Input
            id="avatar"
            labelName="Imagem de Perfil"
            placeholder="Digite o link "
            type="text"
            linkForm={register("avatar")}
            error={errors.avatar?.message}
          />

          <Button style="blueLight" type="submit" disabled={loadingButtonModal}>
            {loadingButtonModal ? (
              <RotatingLines
                strokeColor="black"
                strokeWidth="5"
                animationDuration="0.75"
                width="30"
                visible={true}
              />
            ) : (
              "Atualizar Perfil"
            )}
          </Button>

          <Button
            name="Excluir Perfil"
            style="grey1"
            type="button"
            disabled={loadingButtonModal}
            action={() => setTypeModal("DeleteUser")}
          />
        </FormEdit>
      </DivEdit>
    </DivModal>
  );
};
