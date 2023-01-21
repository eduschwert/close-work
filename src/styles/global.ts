import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-blue-1: #111C31;
    --color-blue-2: #263F6D;
    --color-blue-3: #3A60A6 ;
    --color-blue-4: #6487C8;
    --color-blue-5: #A0B6DD;
    --color-blue-6: #D5DEF0;
  
    --color-gray-1: #212529;
    --color-gray-2: #343A40;
    --color-gray-3: #495057 ;
    --color-gray-4: #868E96;
    --color-gray-5: #ADB5BD;
    --color-gray-6: #CED4DA;
    --color-gray-7: #DEE2E6;
    --color-gray-8: #E9ECEF;
    --color-gray-9: #F1F3F5 ;
    --color-gray-10: #F8F9FA;
  
    --color-neutral-white: #ffffff;
    --color-neutral-black: #000000;
  
    --color-sucess: #168821;
    --color-negative: #E60000;

    --radius-1: 0.4rem;
    --radius-circle: 50%;
  
    font-size: 60%;   
  }
  @media (min-width: 420px) {
      :root {
        font-size: 62.5%;
      }
    }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  ul{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  body,html{
    height: 100%;
    scroll-behavior: smooth;
  }

  body{
    background: var(--color-neutral-white);
  }

  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
  }

::-webkit-scrollbar {
  width: 12px;              
}
::-webkit-scrollbar-track {
  background: var(--color-blue-5);        
}
::-webkit-scrollbar-thumb {
  background-color: var(--color-blue-2);   
  border-radius: 20px;     
  border: 3px solid var(--color-blue-5); 
}
`;
