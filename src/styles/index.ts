import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background 0.3s ease-in-out;

    font-family: 'Inter', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }
`;
