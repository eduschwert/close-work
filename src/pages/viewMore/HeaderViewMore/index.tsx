import logo from "../../../assets/logo-header.svg";
import { StyledContent, StyledHeader } from "./style";
import { ContainerHome } from "../../dashboard/style";
import { StyledLink } from "../../../styles/buttons";

export const HeaderViewMore = () => {
  return (
    <StyledHeader>
      <ContainerHome>
        <StyledContent>
          <img src={logo} alt="Imagem de logo do site Close Worker" />
          <StyledLink buttonStyle="blueLight" to="/dashboard">
            Voltar
          </StyledLink>
        </StyledContent>
      </ContainerHome>
    </StyledHeader>
  );
};
