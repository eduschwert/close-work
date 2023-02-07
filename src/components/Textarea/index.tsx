import { StyledText } from "../../styles/typography";
import { Fieldset } from "./style";
import { iTextareaProps } from "./type";

export const Textarea = ({
  id,
  labelName,
  placeholder,
  linkForm,
  error,
  disabled,
}: iTextareaProps) => {
  return (
    <Fieldset>
      <label htmlFor={id}>{labelName}</label>
      <textarea
        placeholder={placeholder}
        {...linkForm}
        disabled={disabled}
        id={id}
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
  );
};
