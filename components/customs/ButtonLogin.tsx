import React from 'react';
import { Button as MuiButton, Theme, useTheme } from '@mui/material';
import { Link } from '@/customs';
import { getButtonStyleSX } from '@/styles';

function getFontSize(size: ButtonSizes): string {
  switch (size) {
    case 'extra large': return '24px';
    case 'large': return '20px';
    case 'medium': return '16px';
  }
}

export type ButtonLoginProps = React.PropsWithChildren<{
  style: ButtonStyles
  size: ButtonSizes
  href?: string
  disabled?: boolean
  onClick?: () => void
}>;

export default function ButtonLogin({ style, size, href, disabled, onClick, children }: ButtonLoginProps): JSX.Element {
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
        height: '48px',
        fontSize: fontSize,
        fontWeight: '600',
        width: '100%',
      }}
    >
      <Link href={href}>
        {children}
      </Link>
    </MuiButton>
  );
}
