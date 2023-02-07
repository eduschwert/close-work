import styled from "styled-components";

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border: 0;

  width: 100%;

  label {
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 2.7rem;
    color: var(--color-neutral-white);
  }
  textarea {
    width: 100%;
    min-height: 17.5rem;

    background: var(--color-blue-5);

    font-size: 2.2rem;
    font-weight: 400;
    line-height: 2.7rem;
    color: var(--color-blue-1);

    box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

    border: 0;
    border-radius: var(--radius-1);

    padding: 2rem 1.5rem;

    resize: none;
  }
  textarea::placeholder {
    color: var(--color-blue-1);
  }
`;
