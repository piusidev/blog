import React from 'react';
import { UseAuthProvider } from './useAuth';

import { UseThemeProvider } from './useTheme';

interface IGlobalProviderProps {
  children: React.ReactNode
}

const GlobalProvider: React.FC<IGlobalProviderProps> = ({ children }) => (
  <UseThemeProvider>
    <UseAuthProvider>
      {children}
    </UseAuthProvider>
  </UseThemeProvider>
);

export default GlobalProvider;
