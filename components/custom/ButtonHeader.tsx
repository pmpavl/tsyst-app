import React from 'react';
import { Button as MuiButton, Theme, useTheme } from '@mui/material';
import { Link, getButtonStyleSX } from '@/components';

function getFontSize(size: ButtonHeaderSizes): string {
  switch (size) {
    case 'large': return '20px';
    case 'medium': return '16px';
  }
}

export type ButtonHeaderSizes = 'large' | 'medium';

export type ButtonHeaderProps = React.PropsWithChildren<{
  style: ButtonStyles
  size: ButtonHeaderSizes
  href?: string
  disabled?: boolean
  onClick?: () => void
  visibility?: boolean
}>;

export default function ButtonHeader({ style, size, href, disabled, onClick, visibility, children }: ButtonHeaderProps): JSX.Element {
  const theme: Theme = useTheme();

  return (
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
        padding: '0px 16px',
        height: '40px',
        fontWeight: '600',
        display: visibility === false ? 'none' : 'flex',
      }}
    >
      <Link href={href}>
        {children}
      </Link>
    </MuiButton >
  );
}
