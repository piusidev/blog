import { rgba } from 'polished';
import { DefaultTheme } from 'styled-components';

import { common } from './common';

const light: DefaultTheme = {
  ...common,

  title: 'light',

  text: {
    color: '#27272b',
    contrast: '#27272b',
    opacify: (percent) => rgba('#27272b', percent),
  },

  background: {
    color: '#eceeef',
    contrast: '#eceeef',
  },

  accent: {
    color: '#ffffff',
    contrast: rgba('#ffffff', 0.05),
  },
};

export default light;
