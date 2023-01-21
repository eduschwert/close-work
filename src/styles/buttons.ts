import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { iStyledButtonProps } from "./types";

const defaultButton = css`
  font-weight: 600;

  transition: 150ms linear;

  border: none;
`;

const buttonCSS = css<iStyledButtonProps>`
  ${defaultButton}

  min-height: 5rem;
  width: ${({ width }) => width};

  padding: 0 2rem;

  border-radius: var(--radius-1);

  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case "blueDark":
        return css`
          color: var(--color-neutral-white);
          background: var(--color-blue-3);
          &:hover {
            background: var(--color-blue-2);
          }
        `;
      case "blueDark2":
        return css`
          color: var(--color-neutral-white);
          background: var(--color-blue-3);
          &:hover {
            background: var(--color-blue-1);
          }
        `;
      case "blueLight":
        return css`
          color: var(--color-blue-1);
          background: var(--color-blue-6);
          &:hover {
            background: var(--color-blue-5);
          }
        `;
      case "redDark":
        return css`
          color: var(--color-neutral-white);
          background: var(--color-gray-2);
          &:hover {
            background: var(--color-negative);
          }
        `;
      case "redLight":
        return css`
          color: var(--color-neutral-black);
          background: var(--color-gray-5);

          &:hover {
            color: var(--color-neutral-white);
            background: var(--color-negative);
          }
        `;
    }
  }}
`;

export const StyledButton = styled.button`
  ${buttonCSS}
`;

export const StyledLink = styled(Link)`
  ${buttonCSS}

  display: flex;
  justify-content: center;
  align-items: center;
`;

const buttonIconCSS = css`
  ${defaultButton}

  display: flex;
  justify-content: center;
  align-items: center;

  width: 5rem;
  min-height: 5rem;

  border-radius: var(--radius-circle);

  background: var(--color-neutral-white);

  &:hover {
    background: var(--color-gray-5);
  }

  svg {
    font-size: 3rem;
  }
`;
export const StyledButtonIcon = styled.button`
  ${buttonIconCSS}
`;

export const StyledLinkIcon = styled(Link)`
  ${buttonIconCSS}

  color: var(--color-neutral-black);
`;

export const StyledButtonTransparent = styled.button`
  ${defaultButton}
  background: transparent;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    font-size: 2.5rem;
  }
`;

export const StyledLinkInline = styled(Link)`
  ${defaultButton}

  background: transparent;

  color: var(--color-blue-6);

  &:hover {
    text-decoration: underline;
    color: var(--color-blue-5);
  }
`;
