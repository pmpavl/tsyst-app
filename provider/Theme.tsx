import React from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { PaletteModeContext } from '@/context';
import { paletteLight, paletteDark } from '@/theme';

import { Ubuntu } from '@next/font/google';

const ubuntu = Ubuntu({ weight: '400', preload: true, subsets: ['cyrillic', 'latin'] });

export default function ThemeProvider({ children }: React.PropsWithChildren): JSX.Element {
  const { paletteMode } = React.useContext(PaletteModeContext);

  const theme = createTheme({
    palette: paletteMode === 'light' ? paletteLight : paletteDark,
    typography: {
      fontFamily: [
        ubuntu.style.fontFamily,
        'sans-serif',
      ].join(','),
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
