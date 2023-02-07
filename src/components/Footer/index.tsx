import { StyledText } from "../../styles/typography";
import { StyledFooter } from "./style";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledText
        tag="p"
        fontSize="1.2rem"
        fontWeigth="400"
        lineHeight="2.4rem"
        color="var(--color-neutral-white)"
      >
        Close Worker - Todos os direitos reservados - 2023
      </StyledText>
    </StyledFooter>
  );
};
