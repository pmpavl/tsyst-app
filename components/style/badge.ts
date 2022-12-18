import { Theme } from '@mui/material';

export type BadgeStyleSX = {
  color: string
  backgroundColor: string
  borderRadius: string
  display: string
  width: string
  fontSize: string
  fontWeight: string
  textAlign: string
  paddingInline: string
  paddingBlock: string
};

export default function getBadgeStyleSX(theme: Theme, style: BadgeStyles, mobile: boolean): BadgeStyleSX {
  switch (style) {
    case 'tonal':
      return {
        color: theme.palette.sys.primary,
        backgroundColor: theme.palette.sys.secondaryContainer,
        borderRadius: '8px',
        display: 'inline-block',
        width: 'fit-content',
        fontSize: '14px',
        fontWeight: '400',
        textAlign: 'center',
        paddingInline: mobile ? '12px' : '16px',
        paddingBlock: '4px',
      };
  }
}
