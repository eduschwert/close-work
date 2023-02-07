import styled from "styled-components";

export const StyledLogin = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  background: var(--color-blue-2);

  section:nth-child(1) {
    & > h2 + div {
      height: 30px;
      display: flex;
    }
    @media (min-width: 800px) {
      align-items: flex-start;
    }
  }

  @media (min-width: 800px) {
    flex-direction: row;
    gap: 5vw;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 415px;
    padding-top: 20px;

    Button {
      margin-top: 10px;
    }
    Input {
      width: 100%;
    }
  }
  div {
    width: 100%;
    max-width: 415px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    p {
      padding: 0 10px;
      color: var(--color-gray-10);
    }
  }
`;
