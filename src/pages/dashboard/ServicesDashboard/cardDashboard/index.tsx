import { Button } from "../../../components/Button";
import { Buttons, StyledHeaderServices } from "../style";
import { IoEyeSharp } from "react-icons/io5";
import { Title } from "../../../../components/Title";
import { useContext } from "react";
import { ServiceContext } from "../../../context/ServiceContext";
import { iCardProps } from "./type";
import { LinkNavigation } from "../../../components/LinkNavigation";
import {
  StyledButton,
  StyledLink,
  StyledLinkIcon,
} from "../../../../styles/buttons";

export const CardDashboard = ({ item }: iCardProps) => {
  const { setOpenModal, setTypeModal } = useContext(ServiceContext);
  return (
    <li>
      <StyledHeaderServices>
        <div></div>
        <Title type="Heading1" colorTitle="blue-1">
          {item.kind_of_service}
        </Title>
        <StyledLinkIcon to={`/view_more/${item.id}`}>
          <IoEyeSharp />
        </StyledLinkIcon>
      </StyledHeaderServices>
      <Buttons>
        <StyledButton
          buttonStyle="redLight"
          type="button"
          onClick={() => {
            setOpenModal(true);
            setTypeModal("DeleteService");
            setIdService(item.id);
          }}
        >
          Excluir
        </StyledButton>
        <StyledButton
          buttonStyle="blueDark"
          type="button"
          onClick={() => {
            setOpenModal(true);
            setTypeModal("EditService");
            setInfosModalEditService(item);
          }}
        >
          Editar
        </StyledButton>
      </Buttons>
    </li>
  );
};
