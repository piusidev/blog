import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import Store from 'utils/store';
import themes from 'styles/themes';

interface IUseThemeContextData {
  theme: DefaultTheme
  toggleTheme: () => void
}

interface IUseThemeProviderProps {
  children: React.ReactNode
}

type PossibleThemeTitles = 'dark' | 'light';

const themeStore = Store('theme');

const UseThemeContext = createContext<IUseThemeContextData>(null);

const UseThemeProvider: React.FC<IUseThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(themes.dark);

  const toggleTheme = useCallback((): void => {
    setTheme(theme.title === 'dark' ? themes.light : themes.dark);
  }, []);

  useEffect(() => {
    const storedTheme: PossibleThemeTitles = themeStore.get();
    const themeList = Object.entries(themes).map(([index, _item]) => index);

    if (themeList.includes(storedTheme)) {
      setTheme(themes[storedTheme]);
    }
  }, []);

  useEffect(() => {
    themeStore.set(theme.title);
  }, [theme]);

  const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <UseThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme} >{children}</ThemeProvider>
    </UseThemeContext.Provider>
  );
};

const useTheme = (): IUseThemeContextData => {
  const context = useContext(UseThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within an UseThemeProvider');
  }

  return context;
};

export { UseThemeProvider, useTheme };
