import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.background.color};
    color: ${({ theme }) => theme.text.color};
    transition: background ${({ theme }) => theme.transition};;

    font-family: 'Inter', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }
`;
