import logo from "../../../assets/header-logo.svg";
import { StyledContent, StyledHeader } from "./style";
import { ContainerHome } from "../style";
import { StyledLink } from "../../../styles/buttons";

export const HeaderMoreInfo = () => {
  return (
    <StyledHeader>
      <ContainerHome>
        <StyledContent>
          <img src={logo} alt="Imagem de logo do site Close Worker" />
          <StyledLink buttonStyle="blueLight" to="/home">
            Home
          </StyledLink>
        </StyledContent>
      </ContainerHome>
    </StyledHeader>
  );
};
