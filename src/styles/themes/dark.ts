import { DefaultTheme } from 'styled-components'
import { rgba } from 'polished'

import { common } from './common'

const dark: DefaultTheme = {
  ...common,

  title: 'dark',

  text: {
    color: '#ffffff',
    contrast: '#27272b',
    opacify: (percent) => rgba('#ffffff', percent),
  },

  background: {
    color: '#232529',
    contrast: '#232529',
  },

  accent: {
    color: '#2a2e37',
    contrast: rgba('#2a2e37', 0.05),
  },
}

export default dark
