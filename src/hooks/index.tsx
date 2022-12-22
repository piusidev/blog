import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

import { GlobalStyle } from 'styles';
import { UseAuthProvider } from './useAuth';
import { UseThemeProvider } from './useTheme';

interface IGlobalProviderProps {
  children: ReactChildren
}

const GlobalProvider: React.FC<IGlobalProviderProps> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
      },
    },
  });

  return (
    <UseThemeProvider>
      <QueryClientProvider client={queryClient}>
        <UseAuthProvider>
          <GlobalStyle />
          {children}
        </UseAuthProvider>
      </QueryClientProvider>
    </UseThemeProvider>
  );
};

export default GlobalProvider;
