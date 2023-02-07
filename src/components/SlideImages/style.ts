import styled from "styled-components";

export const StyledContainerFull = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background: var(--color-blue-2);

  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  padding: 2rem 0;
`;

export const StyledContainerSlide = styled.section`
  width: 132rem;
  max-width: 100%;
  min-width: 26.1rem;

  padding: 0 1.6rem;

  margin: 0 auto;

  img {
    display: block;

    width: 100%;
    height: 100%;
    min-height: 20rem;

    object-fit: cover;
  }
`;
