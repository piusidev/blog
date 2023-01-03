import React from 'react'
import { Sun, Moon } from 'react-feather'

import { useTheme } from '@/hooks/useTheme'

import { Container, Switcher, Option } from './styles'

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Container>
      <p>Theme</p>
      <Switcher>
        <Option
          onClick={() => toggleTheme('dark')}
          className={`${theme.title === 'dark' && 'active'}`}
        >
          <Moon />
          Dark
        </Option>

        <Option
          onClick={() => toggleTheme('light')}
          className={`${theme.title === 'light' && 'active'}`}
        >
          <Sun />
          Light
        </Option>
      </Switcher>
    </Container>
  )
}

export default ThemeSwitcher
