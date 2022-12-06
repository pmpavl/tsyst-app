'use client';
import React from 'react';

const MODE_KEY = 'mode';

export type Mode = 'light' | 'dark';
export type Theme = {
  mode: Mode
  setMode: (mode: Mode) => void
  toggleMode: () => void
};

export const ThemeContext = React.createContext<Theme>({} as Theme);

type State = { mode: Mode };

export default class ThemeProvider extends React.Component<React.PropsWithChildren> {
  state: State = { mode: 'light' };

  constructor(props: React.PropsWithChildren) {
    super(props);

    if (typeof window !== 'undefined') { this.state.mode = this.getLocalStorageMode(); }
  }

  setMode = (mode: Mode): void => {
    this.setState({ mode });
    localStorage.setItem(MODE_KEY, mode);

    const className = document.documentElement.classList;
    if (mode === 'dark') className.add('dark'); else className.remove('dark');
  };

  toggleMode = (): void => this.setMode(this.state.mode === 'light' ? 'dark' : 'light');

  getLocalStorageMode = (): Mode => {
    const lsMode = localStorage.getItem(MODE_KEY);

    return lsMode === null ? 'light' : lsMode as Mode;
  };

  componentDidMount() { return this.setMode(this.getLocalStorageMode()); }

  shouldComponentUpdate(_: never, nextState: State) { return nextState.mode === this.state.mode ? false : true; }

  render() {
    const { mode } = this.state;
    const { setMode, toggleMode } = this;

    return (
      <ThemeContext.Provider value={{ mode, setMode, toggleMode }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
