import React from 'react';
import { Button as MuiButton, Theme, useTheme } from '@mui/material';
import { Link } from '@/customs';
import { getButtonStyleSX } from '@/styles';

function getFontSize(size: ButtonSizes): string {
  switch (size) {
    case 'extra large': return '20px';
    case 'large': return '16px';
    case 'medium': return '14px';
  }
}

export type ButtonProps = React.PropsWithChildren<{
  style: ButtonStyles
  size: ButtonSizes
  href?: string
  disabled?: boolean
  onClick?: () => void
}>;

export default function Button({ style, size, href, disabled, onClick, children }: ButtonProps): JSX.Element {
  const theme: Theme = useTheme();

  const fontSize = getFontSize(size);

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
        padding: '0px 16px',
        height: '40px',
        fontSize: fontSize,
        fontWeight: '600',
        borderRadius: '100px',
      }}
    >
      <Link href={href}>
        {children}
      </Link>
    </MuiButton>
  );
}
