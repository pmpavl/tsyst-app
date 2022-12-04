import React from 'react';
import { Divider as MuiDivider, Theme, useTheme } from '@mui/material';
import { getDividerStyleSX } from '@/styles';

export type DividerProps = {
  orientation?: 'horizontal' | 'vertical'
  variant?: 'middle' | 'fullWidth' | 'inset'
};

export default function Divider({ orientation, variant }: DividerProps): JSX.Element {
  const theme: Theme = useTheme();

  return (
    <MuiDivider orientation={orientation} variant={variant} sx={{ ...getDividerStyleSX(theme) }} />
  );
}
