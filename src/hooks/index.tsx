import React from 'react';

import { UseThemeProvider } from './useTheme';

interface IGlobalProviderProps {
  children: React.ReactNode
}

const GlobalProvider: React.FC<IGlobalProviderProps> = ({ children }) => (
  <UseThemeProvider>{children}</UseThemeProvider>
);

export default GlobalProvider;
