import React from 'react';
import { PaletteMode } from '@mui/material';

export type PaletteModeType = {
  paletteMode: PaletteMode,
  setPaletteMode: (overrideMode: PaletteMode) => void,
};

const PaletteModeContext = React.createContext<PaletteModeType>({} as PaletteModeType);

export default PaletteModeContext;
