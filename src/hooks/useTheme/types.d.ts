import 'styled-components';

interface IColor {
  color: string;
  contrast: string;
  opacify?: (param: number) => string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    text: IColor
    background: IColor
    accent: IColor

    boxShadow: string;
    transition: string;
  }
}
