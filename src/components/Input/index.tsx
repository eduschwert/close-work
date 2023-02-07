import { StyledText } from "../../styles/typography";
import { Fieldset } from "./style";
import { iInput } from "./@types";

export const Input = ({
  type,
  id,
  labelName,
  placeholder,
  linkForm,
  error,
  disabled,
  maxLength,
}: iInput) => {
  return (
    <>
      <Fieldset>
        <label htmlFor={id}>{labelName}</label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          {...linkForm}
          disabled={disabled}
          maxLength={maxLength}
        />
        <StyledText
          tag="small"
          fontSize="1.4rem"
          fontWeigth="600"
          lineHeight="2.4rem"
          color="var(--color-negative-2)"
        >
          {error}
        </StyledText>
      </Fieldset>
    </>
  );
};
