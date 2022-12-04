import { Theme } from '@mui/material';

export type CardStyleSX = {
  backgroundColor: string,
  backgroundImage: string,
  borderWidth: string,
  borderRadius: string,
  borderStyle: string,
  borderColor: string,
  boxShadow: string,
};

export default function getCardStyleSX(theme: Theme, style: CardStyles): CardStyleSX {
  switch (style) {
    case 'filled':
      return {
        backgroundColor: theme.palette.sys.surfaceVariant,
        backgroundImage: 'none',
        borderWidth: '0px',
        borderRadius: '16px',
        borderStyle: 'none',
        borderColor: 'none',
        boxShadow: 'none',
      };
    case 'outlined':
      return {
        backgroundColor: theme.palette.sys.surface,
        backgroundImage: 'none',
        borderWidth: '1px',
        borderRadius: '16px',
        borderStyle: 'solid',
        borderColor: theme.palette.sys.outlineVariant,
        boxShadow: 'none',
      };
    case 'elevated':
      return {
        backgroundColor: theme.palette.surfaces.surface1,
        backgroundImage: 'none',
        borderWidth: '0px',
        borderRadius: '16px',
        borderStyle: 'none',
        borderColor: 'none',
        boxShadow: theme.elevation.elevation1,
      };
  }
}
