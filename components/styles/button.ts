import { Theme } from '@mui/material';
import { blend, blendBackground } from '@/utils';

export type ButtonStyleSX = {
  color: string;
  background: string;
  borderWidth: string;
  borderRadius: string;
  borderStyle: string;
  borderColor: string;
  boxShadow: string;
  ':hover': {
    backgroundColor: string;
    boxShadow: string;
  };
  ':active': {
    backgroundColor: string;
  };
  ':disabled': {
    color: string;
    background: string;
    borderColor: string;
  };
  textTransform: string;
};

export default function getButtonStyleSX(theme: Theme, style: ButtonStyles): ButtonStyleSX {
  switch (style) {
    case 'filled':
      return {
        color: theme.palette.sys.onPrimary,
        background: theme.palette.sys.primary,
        borderWidth: '0px',
        borderRadius: '8px',
        borderStyle: 'none',
        borderColor: 'none',
        boxShadow: 'none',
        ':hover': {
          backgroundColor: blendBackground(theme.palette.sys.primary, theme.palette.sys.onPrimary, theme.opacities.opacity8),
          boxShadow: theme.elevation.elevation1,
        },
        ':active': {
          backgroundColor: blendBackground(theme.palette.sys.primary, theme.palette.sys.onPrimary, theme.opacities.opacity16),
        },
        ':disabled': {
          color: blend(theme.palette.sys.onSurface, theme.opacities.opacity38),
          background: blend(theme.palette.sys.onSurface, theme.opacities.opacity8),
          borderColor: 'none',
        },
        textTransform: 'none',
      };
    case 'outlined':
      return {
        color: theme.palette.sys.primary,
        background: 'none',
        borderWidth: '1px',
        borderRadius: '8px',
        borderStyle: 'solid',
        borderColor: theme.palette.sys.outline,
        boxShadow: 'none',
        ':hover': {
          backgroundColor: blend(theme.palette.sys.primary, theme.opacities.opacity8),
          boxShadow: 'none',
        },
        ':active': {
          backgroundColor: blend(theme.palette.sys.primary, theme.opacities.opacity16),
        },
        ':disabled': {
          color: blend(theme.palette.sys.onSurface, theme.opacities.opacity38),
          background: 'none',
          borderColor: blend(theme.palette.sys.onSurface, theme.opacities.opacity38),
        },
        textTransform: 'none',
      };
    case 'standard':
      return {
        color: theme.palette.sys.onBackground,
        background: 'none',
        borderWidth: '0px',
        borderRadius: '8px',
        borderStyle: 'none',
        borderColor: 'none',
        boxShadow: 'none',
        ':hover': {
          backgroundColor: blend(theme.palette.sys.primary, theme.opacities.opacity8),
          boxShadow: 'none',
        },
        ':active': {
          backgroundColor: blend(theme.palette.sys.primary, theme.opacities.opacity16),
        },
        ':disabled': {
          color: blend(theme.palette.sys.onSurface, theme.opacities.opacity38),
          background: 'none',
          borderColor: 'none',
        },
        textTransform: 'none',
      };
    case 'elevated':
      return {
        color: theme.palette.sys.primary,
        background: theme.palette.surfaces.surface1,
        borderWidth: '0px',
        borderRadius: '8px',
        borderStyle: 'none',
        borderColor: 'none',
        boxShadow: theme.elevation.elevation1,
        ':hover': {
          backgroundColor: blendBackground(theme.palette.surfaces.surface1, theme.palette.sys.primary, theme.opacities.opacity8),
          boxShadow: theme.elevation.elevation2,
        },
        ':active': {
          backgroundColor: blendBackground(theme.palette.surfaces.surface1, theme.palette.sys.primary, theme.opacities.opacity16),
        },
        ':disabled': {
          color: blend(theme.palette.sys.onSurface, theme.opacities.opacity38),
          background: blend(theme.palette.sys.onSurface, theme.opacities.opacity8),
          borderColor: 'none',
        },
        textTransform: 'none',
      };
    case 'tonal':
      return {
        color: theme.palette.sys.onSecondaryContainer,
        background: theme.palette.sys.secondaryContainer,
        borderWidth: '0px',
        borderRadius: '8px',
        borderStyle: 'none',
        borderColor: 'none',
        boxShadow: 'none',
        ':hover': {
          backgroundColor: blendBackground(theme.palette.sys.secondaryContainer, theme.palette.sys.primary, theme.opacities.opacity8),
          boxShadow: theme.elevation.elevation1,
        },
        ':active': {
          backgroundColor: blendBackground(theme.palette.sys.secondaryContainer, theme.palette.sys.primary, theme.opacities.opacity16),
        },
        ':disabled': {
          color: blend(theme.palette.sys.onSurface, theme.opacities.opacity38),
          background: blend(theme.palette.sys.onSurface, theme.opacities.opacity8),
          borderColor: 'none',
        },
        textTransform: 'none',
      };
  }
}
