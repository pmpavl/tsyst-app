import React from 'react';
import { Ubuntu } from '@next/font/google';
import { NextFont } from '@next/font/dist/types';
import { ThemeProvider as MuiThemeProvider, CssBaseline, createTheme, responsiveFontSizes } from '@mui/material';
import { AppMetaContext } from '@/context';
import { paletteLight, paletteDark, elevationLight, elevationDark } from '@/theme';

const ubuntu: NextFont = Ubuntu({ weight: '400', preload: true, subsets: ['cyrillic', 'latin'] });

export default class ThemeProvider extends React.Component<React.PropsWithChildren> {
  static contextType = AppMetaContext;

  declare context: React.ContextType<typeof AppMetaContext>;

  getPaletteOptions = () => {
    const { paletteMode } = this.context;

    return paletteMode === 'light' ? paletteLight : paletteDark;
  };

  getElevation = () => {
    const { paletteMode } = this.context;

    return paletteMode === 'light' ? elevationLight : elevationDark;
  };

  render() {
    const { children } = this.props;
    const theme = createTheme({
      palette: this.getPaletteOptions(),
      elevation: this.getElevation(),
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1440,
          xl: 1920,
        },
      },
      opacities: {
        opacity8: 0.08,
        opacity12: 0.12,
        opacity16: 0.16,
        opacity38: 0.38,
      },
      typography: {
        fontFamily: [
          ubuntu.style.fontFamily,
          'sans-serif',
        ].join(','),
      },
    });

    return (
      <MuiThemeProvider theme={responsiveFontSizes(theme)}>
        <CssBaseline />
        {children}
      </MuiThemeProvider >
    );
  }
}
