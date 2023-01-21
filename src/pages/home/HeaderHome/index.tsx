import { StyledHeader } from "./style";
import logoHeader from "../../../assets/logo-home-header.svg";
import { ContainerHome } from "../style";
import { StyledLink } from "../../../styles/buttons";

export const HeaderHome = () => {
  return (
    <StyledHeader>
      <ContainerHome>
        <div>
          <StyledLink buttonStyle="blueDark" width="12rem" to="/register">
            Cadastrar
          </StyledLink>
          <StyledLink buttonStyle="blueLight" width="12rem" to="/login">
            Login
          </StyledLink>
        </div>
        <div>
          <img src={logoHeader} alt="Imagem de logo do site Close Worker" />
        </div>
      </ContainerHome>
    </StyledHeader>
  );
};
