import { colors, PaletteOptions } from '@mui/material';

const paletteLight: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#ffffff',
  },
  background: {
    default: '#ffffff',
    paper: '#ffffff',
  },
  text: {
    primary: '#000000',
    secondary: '#000000',
    disabled: '#000000',
  },
  error: {
    main: colors.red[300],
  },
  hoverBackground: {
    deepOrange: colors.deepOrange[50],
    blue: colors.blue[50],
    blueGrey: colors.blueGrey[50],
    lightGreen: colors.lightGreen[50],
  },
};

export default paletteLight;
