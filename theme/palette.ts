import { PaletteMode, PaletteOptions } from '@mui/material';

export default function palette(mode: PaletteMode): PaletteOptions {
  return {
    mode: mode,
    background: {
      default: mode === 'light' ? '#FFFCF9' : '#1B1C1A',
      paper: mode === 'light' ? '#FFFCF9' : '#1B1C1A',
    },
    text: {
      primary: mode === 'light' ? '#1B1C1A' : '#E5E2E0',
      secondary: mode === 'light' ? '#1B1C1A' : '#E5E2E0',
      disabled: mode === 'light' ? '#1B1C1A' : '#E5E2E0',
    },
    sys: {
      primary: mode === 'light' ? '#54634D' : '#BBCCB2',
      onPrimary: mode === 'light' ? '#FFFCF9' : '#263422',
      primaryContainer: mode === 'light' ? '#D7E8CD' : '#3C4B37',
      onPrimaryContainer: mode === 'light' ? '#121F0E' : '#D7E8CD',

      secondary: mode === 'light' ? '#5C5F59' : '#C5C7BF',
      onSecondary: mode === 'light' ? '#FFFCF9' : '#2E312C',
      secondaryContainer: mode === 'light' ? '#E1E3DB' : '#444842',
      onSecondaryContainer: mode === 'light' ? '#191D17' : '#E1E3DB',

      tertiary: mode === 'light' ? '#566061' : '#BEC8C9',
      onTertiary: mode === 'light' ? '#FFFCF9' : '#293233',
      tertiaryContainer: mode === 'light' ? '#DAE4E5' : '#3F4949',
      onTertiaryContainer: mode === 'light' ? '#141D1E' : '#DAE4E5',

      error: mode === 'light' ? '#BA1A1A' : '#FFB4AB',
      onError: mode === 'light' ? '#FFFCF9' : '#690005',
      errorContainer: mode === 'light' ? '#FFDAD6' : '#93000A',
      onErrorContainer: mode === 'light' ? '#410002' : '#FFB4AB',

      background: mode === 'light' ? '#FFFCF9' : '#1B1C1A',
      onBackground: mode === 'light' ? '#1B1C1A' : '#E5E2E0',

      surface: mode === 'light' ? '#FFFCF9' : '#1B1C1A',
      onSurface: mode === 'light' ? '#1B1C1A' : '#E5E2E0',
      surfaceVariant: mode === 'light' ? '#E3E2DE' : '#464744',
      onSurfaceVariant: mode === 'light' ? '#464744' : '#C7C6C2',

      outline: mode === 'light' ? '#777774' : '#91918D',
      outlineVariant: mode === 'light' ? '#C3C8BC' : '#43483F',
    },
    surfaces: {
      surface1: mode === 'light' ? '#F6F4F0' : '#232522',
      surface2: mode === 'light' ? '#F2F0EC' : '#282A26',
      surface3: mode === 'light' ? '#ECEBE6' : '#2D2F2B',
      surface4: mode === 'light' ? '#EAE9E4' : '#2E312C',
      surface5: mode === 'light' ? '#E7E6E1' : '#32352F',
    },
  } as PaletteOptions;
}
