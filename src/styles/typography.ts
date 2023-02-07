import styled from "styled-components";
import { BaseText } from "./BaseText";
import { iText } from "./types";

export const StyledText = styled(BaseText)<iText>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeigth }) => fontWeigth};
  line-height: ${({ lineHeight }) => lineHeight};
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};

  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
`;
