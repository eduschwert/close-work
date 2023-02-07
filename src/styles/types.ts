export interface iStyledButtonProps {
  buttonStyle: "blueDark" | "blueDark2" | "blueLight" | "redDark" | "redLight";
  width?: string;
}

export interface iBaseTextProps {
  tag: "p" | "span" | "small" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: React.ReactNode;
}

export interface iText {
  fontSize: "2.6rem" | "2.2rem" | "1.8rem" | "1.6rem" | "1.4rem" | "1.2rem";
  fontWeigth: "700" | "600" | "400";
  lineHeight?: "2.4rem" | "3.4rem";
  color: "var(--color-negative-2)" | "var(--color-neutral-white)";
  textAlign?: string;
  marginTop?: string;
  marginBottom?: string;
}
