import styled from "styled-components";

export const StyledContainerImgProfile = styled.div`
  width: 21rem;
  height: 21rem;

  background: transparent;

  overflow: hidden;

  border-radius: var(--radius-circle);

  img {
    width: 100%;

    object-fit: cover;

    transition: 150ms ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const StyledContainerImgModal = styled.div`
  width: 5rem;
  height: 5rem;

  background: transparent;

  img {
    width: 100%;

    object-fit: cover;

    border-radius: var(--radius-circle);
  }
`;

export const StyledContainerImgHome = styled.div`
  width: 15rem;
  height: 15rem;
  background: transparent;

  overflow: visible;

  img {
    width: 100%;

    object-fit: cover;

    border-radius: var(--radius-circle);

    transition: 150ms ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
