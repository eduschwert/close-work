import { MdEdit } from "react-icons/md";
import {
  StyledEdit,
  StyledName,
  StyledProfile,
  StyledProfileDescription,
} from "./style";
import { Button } from "../../../components/Button";
import { ContainerHome } from "../style";
import { Title } from "../../../components/Title";
import { useContext, useRef } from "react";
import { ServiceContext } from "../../../context/ServiceContext";
import { UserContext } from "../../../context/UserContext";
import { ImgProfile } from "../../../components/ImgProfile";
import { StyledButton, StyledButtonIcon } from "../../../styles/buttons";

export const ProfileDashboard = () => {
  const { setOpenModal, setTypeModal, setIdUser } = useContext(ServiceContext);
  const { userProfile } = useContext(UserContext);

  return (
    <StyledProfile>
      <ContainerHome>
        <StyledEdit>
          <StyledButtonIcon
            type="button"
            onClick={() => {
              setOpenModal(true);
              setTypeModal("EditUser");
              setIdUser(userProfile.id);
            }}
          >
            <MdEdit />
          </StyledButtonIcon>
        </StyledEdit>
        <StyledProfileDescription>
          <ImgProfile
            alt="imagem de perfil do usuário"
            type="profile"
            srcLink={userProfile.avatar}
          />
          <StyledName>
            <div>
              <Title colorTitle="white" type="Heading1">
                {userProfile.name}
              </Title>
              <Title colorTitle="white" type="Body">
                {userProfile.email}
              </Title>
              <Title colorTitle="white" type="Body">
                {userProfile.contact}
              </Title>
            </div>
          </StyledName>
        </StyledProfileDescription>
      </ContainerHome>
    </StyledProfile>
  );
};
