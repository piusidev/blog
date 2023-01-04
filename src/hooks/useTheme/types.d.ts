import 'styled-components'

interface IColor {
  color: string
  contrast: string
}

interface IColorWithOpacify extends IColor {
  opacify: (param: number) => string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    text: IColorWithOpacify
    background: IColor
    accent: IColor

    boxShadow: string
    transition: string
  }
}
