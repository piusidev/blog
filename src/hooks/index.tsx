import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

import { GlobalStyle } from 'styles';
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
        <GlobalStyle />
        {children}
      </QueryClientProvider>
    </UseThemeProvider>
  );
};

export default GlobalProvider;
