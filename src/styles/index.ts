import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 1rem;
      border: 3px solid ${({ theme }) => theme.accent.color};;
    }
  }

  body {
    height: 100%;

    background: ${({ theme }) => theme.background.color};
    color: ${({ theme }) => theme.text.color};
    transition: background ${({ theme }) => theme.transition};;

    font-family: 'Inter', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  button {
    background: none;
    border: none;

    &:disabled {
      opacity: 0.3;
    }
  }
`;
