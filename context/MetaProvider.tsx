import React from 'react';
import { Ubuntu } from '@next/font/google';
import { NextFont } from '@next/font/dist/types';
import { ThemeProvider as MuiThemeProvider, PaletteMode, CssBaseline, Theme, createTheme, responsiveFontSizes } from '@mui/material';
import { elevation, palette } from '@/theme';

const UBUNTU: NextFont = Ubuntu({ weight: '400', preload: true, subsets: ['cyrillic', 'latin'] });

export interface MetaState {
  isLoading: boolean
  isAuth: boolean,
  mode: PaletteMode,
}

export interface Meta extends MetaState {
  setIsAuth: (isAuth: boolean) => void
  setMode: (mode: PaletteMode) => void
  toggleMode: () => void
}

export const MetaContext = React.createContext<Meta>({} as Meta);

export default class MetaProvider extends React.Component<React.PropsWithChildren> {
  state: MetaState = {
    isLoading: true,
    isAuth: false,
    mode: 'light' as PaletteMode,
  };

  setIsLoading = (isLoading: boolean) => { this.setState({ isLoading }); };

  setIsAuth = (isAuth: boolean) => {
    this.setState({ isAuth });
    this.setLocalStorageItem('isAuth', String(isAuth));
  };

  setMode = (mode: PaletteMode) => {
    this.setState({ mode });
    this.setLocalStorageItem('mode', mode);
  };

  toggleMode = () => this.setMode(this.state.mode === 'light' ? 'dark' : 'light');

  setLocalStorageItem = (key: string, value: string) => { localStorage.setItem(key, value); };

  getLocalStorageItem = (key: string): string | null => { return localStorage.getItem(key); };

  componentDidMount(): void {
    const lsIsAuth = this.getLocalStorageItem('isAuth');
    const lsMode = this.getLocalStorageItem('mode');

    this.setIsLoading(false);
    this.setIsAuth(lsIsAuth === 'true');
    this.setMode(lsMode === null ? 'light' : lsMode as PaletteMode);
  }

  shouldComponentUpdate(_: never, nextState: MetaState): boolean {
    if (
      this.state.isLoading === nextState.isLoading &&
      this.state.isAuth === nextState.isAuth &&
      this.state.mode === nextState.mode
    ) { return false; }

    return true;
  }

  createMuiTheme = (): Theme => {
    const theme = createTheme({
      palette: palette(this.state.mode),
      elevation: elevation(this.state.mode),
      breakpoints: { values: { zero: 0, mobile: 600, tablet: 900, laptop: 1440, desktop: 1920 } },
      opacities: { opacity8: 0.08, opacity12: 0.12, opacity16: 0.16, opacity38: 0.38 },
      typography: { fontFamily: [UBUNTU.style.fontFamily, 'sans-serif'].join(',') },
    });

    return responsiveFontSizes(theme);
  };

  render() {
    const { children } = this.props;
    const { isLoading, isAuth, mode } = this.state;
    const { setIsAuth, setMode, toggleMode } = this;

    return (
      <MetaContext.Provider
        value={{
          isLoading, isAuth, mode,
          setIsAuth, setMode, toggleMode,
        }}
      >
        <MuiThemeProvider theme={this.createMuiTheme()}>
          <CssBaseline />
          {children}
        </MuiThemeProvider >
      </MetaContext.Provider>
    );
  }
}
