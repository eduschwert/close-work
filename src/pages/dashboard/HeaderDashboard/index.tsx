import { useContext } from "react";
import logo from "../../../assets/header-logo.svg";
import { StyledContent, StyledHeader } from "./style";
import { ContainerHome } from "./style";
import { StyledButton } from "../../../styles/buttons";
import { UserContext } from "../../../context/UserContext";

export const HeaderDashboard = () => {
  const { handleLogout } = useContext(UserContext);
  return (
    <StyledHeader>
      <ContainerHome>
        <StyledContent>
          <img src={logo} alt="Imagem de logo do site Close Worker" />
          <StyledButton
            buttonStyle="blueLight"
            type="button"
            onClick={handleLogout}
          >
            Logout
          </StyledButton>
        </StyledContent>
      </ContainerHome>
    </StyledHeader>
  );
};
