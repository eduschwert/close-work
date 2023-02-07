import styled from "styled-components";

export const Fieldset = styled.fieldset`
  width: 100%;

  border: 0;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  > label {
    color: var(--color-neutral-white);
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 2.7rem;
  }
  input {
    width: 100%;
    height: 6rem;
    background: var(--color-blue-5);

    color: var(--color-blue-1);
    font-size: 2.2rem;
    font-weight: 400;
    line-height: 2.7rem;

    box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

    padding: 2rem 1.5rem;

    border-radius: var(--radius-1);
    border: 0.2rem solid var(--color-blue-5);
  }
  input::placeholder {
    color: var(--color-blue-1);
  }
`;
