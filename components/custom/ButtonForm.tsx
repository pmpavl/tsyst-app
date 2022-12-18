import React from 'react';
import { Button as MuiButton, Theme, useTheme } from '@mui/material';
import { Link, getButtonStyleSX } from '@/components';

export type ButtonFormProps = React.PropsWithChildren<{
  style: ButtonStyles
  href?: string
  disabled?: boolean
  onClick?: () => void
}>;

export default function ButtonForm({ style, href, disabled, onClick, children }: ButtonFormProps): JSX.Element {
  const theme: Theme = useTheme();

  return (
    <Link href={href}>
      <MuiButton
        disabled={disabled}
        disableTouchRipple
        disableElevation
        disableRipple
        disableFocusRipple
        onClick={onClick}
        fullWidth={true}
        sx={{
          ...getButtonStyleSX(theme, style),
          height: '48px',
          fontSize: '20px',
          fontWeight: '600',
          width: '100%',
        }}
      >
        {children}
      </MuiButton>
    </Link>
  );
}
