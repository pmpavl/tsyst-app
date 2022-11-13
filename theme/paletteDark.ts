import { colors, PaletteOptions } from '@mui/material';

const paletteDark: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#171923',
  },
  background: {
    default: '#171923',
    paper: '#171923',
  },
  text: {
    primary: '#ffffff',
    secondary: '#ffffff',
    disabled: '#ffffff',
  },
  error: {
    main: `${colors.red[300]}14`,
  },
  hoverBackground: {
    deepOrange: `${colors.deepOrange[50]}14`,
    blue: `${colors.blue[50]}14`,
    blueGrey: `${colors.blueGrey[50]}14`,
    lightGreen: `${colors.lightGreen[50]}14`,
  },
};

export default paletteDark;
