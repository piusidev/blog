import React from 'react';

import { GlobalStyle } from 'styles';
import { UseAuthProvider } from './useAuth';
import { UseThemeProvider } from './useTheme';

interface IGlobalProviderProps {
  children: React.ReactNode
}

const GlobalProvider: React.FC<IGlobalProviderProps> = ({ children }) => (
  <UseThemeProvider>
    <UseAuthProvider>
      <GlobalStyle />
      {children}
    </UseAuthProvider>
  </UseThemeProvider>
);

export default GlobalProvider;
