import { useContext } from "react";
import { MdEdit } from "react-icons/md";
import { ImgProfile } from "../../../components/ImgProfile";
import { Title } from "../../../components/Title";
import { ServiceContext } from "../../../context/ServicesContext";
import { UserContext } from "../../../context/UserContext";
import { StyledButtonIcon } from "../../../styles/buttons";
import { ContainerHome } from "../style";
import {
  StyledProfile,
  StyledEdit,
  StyledProfileDescription,
  StyledName,
} from "./style";

export const ProfileDashboard = () => {
  const { setOpenModal, setTypeModal } = useContext(ServiceContext);
  const { user } = useContext(UserContext);

  return (
    <StyledProfile>
      <ContainerHome>
        <StyledEdit>
          <StyledButtonIcon
            type="button"
            onClick={() => {
              setOpenModal(true);
              setTypeModal("EditUser");
            }}
          >
            <MdEdit />
          </StyledButtonIcon>
        </StyledEdit>
        <StyledProfileDescription>
          <ImgProfile
            alt="imagem de perfil do usuário"
            type="profile"
            srcLink={user?.avatar}
          />
          <StyledName>
            <div>
              <Title colorTitle="white" type="Heading1">
                {user?.name}
              </Title>
              <Title colorTitle="white" type="Body">
                {user?.email}
              </Title>
              <Title colorTitle="white" type="Body">
                {user?.contact}
              </Title>
            </div>
          </StyledName>
        </StyledProfileDescription>
      </ContainerHome>
    </StyledProfile>
  );
};
