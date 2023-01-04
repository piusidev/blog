import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import Store from '@/utils/store'
import themes from '@/styles/themes'

interface IUseThemeContextData {
  theme: DefaultTheme
  toggleTheme: (arg: PossibleThemes) => void
}

interface IUseThemeProviderProps {
  children: React.ReactNode
}

type PossibleThemes = 'dark' | 'light'

const themeStore = Store('theme')

const UseThemeContext = createContext<IUseThemeContextData>(
  {} as IUseThemeContextData
)

const UseThemeProvider: React.FC<IUseThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(themes.dark)

  const toggleTheme = useCallback(
    (newTheme?: PossibleThemes): void => {
      if (newTheme) {
        return setTheme(themes[newTheme])
      }

      return setTheme(theme.title === 'dark' ? themes.light : themes.dark)
    },
    [theme.title]
  )

  useEffect(() => {
    const storedTheme: PossibleThemes = 'dark'
    const themeList = Object.values(themes).map((item) => item.title)

    if (themeList.includes(storedTheme)) {
      setTheme(themes[storedTheme])
    }
  }, [])

  useEffect(() => {
    themeStore.set<string>(theme.title)
  }, [theme])

  const contextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  )

  return (
    <UseThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </UseThemeContext.Provider>
  )
}

const useTheme = (): IUseThemeContextData => {
  const context = useContext(UseThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within an UseThemeProvider')
  }

  return context
}

export { UseThemeProvider, useTheme }
