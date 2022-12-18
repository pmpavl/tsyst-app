import React from 'react';
import { Button as MuiButton, Theme, useMediaQuery, useTheme } from '@mui/material';
import { Link, getButtonStyleSX } from '@/components';

function getFontSize(size: ButtonSizes): string {
  switch (size) {
    case 'large': return '16px';
    case 'medium': return '14px';
    case 'small': return '12px';
  }
}

function getHeight(size: ButtonSizes): string {
  switch (size) {
    case 'large': return '36px';
    case 'medium': return '32px';
    case 'small': return '28px';
  }
}

export type ButtonSizes = 'large' | 'medium' | 'small';

export type ButtonProps = React.PropsWithChildren<{
  style: ButtonStyles
  size: ButtonSizes
  href?: string
  disabled?: boolean
  onClick?: () => void
  visibility?: boolean
}>;

export default function Button({ style, size, href, disabled, onClick, visibility, children }: ButtonProps): JSX.Element {
  const theme: Theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('mobile'));

  if (visibility === false) return <></>;

  return (
    <Link href={href}>
      <MuiButton
        disabled={disabled}
        disableTouchRipple
        disableElevation
        disableRipple
        disableFocusRipple
        onClick={onClick}
        sx={{
          ...getButtonStyleSX(theme, style),
          fontSize: getFontSize(size),
          padding: mobile ? '12px' : '16px',
          width: 'fit-content',
          height: getHeight(size),
          fontWeight: '600',
        }}
      >
        {children}
      </MuiButton >
    </Link>
  );
}
