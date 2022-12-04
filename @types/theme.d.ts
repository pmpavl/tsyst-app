import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Sys {
    primary: string
    onPrimary: string
    primaryContainer: string
    onPrimaryContainer: string

    secondary: string
    onSecondary: string
    secondaryContainer: string
    onSecondaryContainer: string

    tertiary: string
    onTertiary: string
    tertiaryContainer: string
    onTertiaryContainer: string

    error: string
    onError: string
    errorContainer: string
    onErrorContainer: string

    background: string
    onBackground: string

    surface: string
    onSurface: string
    surfaceVariant: string
    onSurfaceVariant: string

    outline: string
    outlineVariant: string
  }

  interface Surfaces {
    surface1: string
    surface2: string
    surface3: string
    surface4: string
    surface5: string
  }

  interface Palette {
    sys: Sys
    surfaces: Surfaces
  }

  interface PaletteOptions {
    sys: Sys
    surfaces: Surfaces
  }
}

declare module '@mui/material/styles' {
  interface Elevation {
    elevation1: string
    elevation2: string
    elevation3: string
    elevation4: string
    elevation5: string
  }

  interface Theme {
    elevation: Elevation
  }

  interface ThemeOptions {
    elevation: Elevation
  }
}

declare module '@mui/material/styles' {
  interface Opacities {
    opacity8: number
    opacity12: number
    opacity16: number
    opacity38: number
  }

  interface Theme {
    opacities: Opacities
  }

  interface ThemeOptions {
    opacities: Opacities
  }
}
