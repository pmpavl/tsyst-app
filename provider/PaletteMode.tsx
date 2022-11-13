/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { PaletteMode } from '@mui/material';
import { PaletteModeContext } from '@/context';

export const PaletteModeKey = 'paletteMode';
export const PaletteModeDefault: PaletteMode = 'light';

/** Get `paletteMode` from local storage, if null return default. */
function lsGetItemPaletteMode(): PaletteMode {
  const lsPaletteMode = localStorage.getItem(PaletteModeKey);

  return lsPaletteMode === null
    ? PaletteModeDefault
    : lsPaletteMode as PaletteMode;
}

/** Set `paletteMode` in local storage. */
function lsSetItemPaletteMode(paletteMode: PaletteMode): void {
  localStorage.setItem(PaletteModeKey, String(paletteMode));
}

export default function PaletteModeProvider({ children }: React.PropsWithChildren): JSX.Element {
  const [paletteMode, setPaletteMode] = React.useState<PaletteMode>(PaletteModeDefault);

  React.useEffect(() => {
    const lsPaletteMode = lsGetItemPaletteMode();

    if (lsPaletteMode !== paletteMode) {
      setPaletteMode(lsPaletteMode);
    }
  }, []);

  const paletteModeMemo = React.useMemo(() => ({
    paletteMode,
    setPaletteMode(overrideMode: PaletteMode): void {
      lsSetItemPaletteMode(overrideMode);
      setPaletteMode(overrideMode);
    },
  }), [paletteMode]);

  return (
    <PaletteModeContext.Provider value={paletteModeMemo}>
      {children}
    </PaletteModeContext.Provider>
  );
}
