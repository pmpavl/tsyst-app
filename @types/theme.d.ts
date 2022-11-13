import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface HoverBackground {
    deepOrange?: string
    blue?: string
    blueGrey?: string
    lightGreen?: string
  }

  interface Palette {
    hoverBackground: HoverBackground
  }

  interface PaletteOptions {
    hoverBackground: HoverBackground
  }
}
