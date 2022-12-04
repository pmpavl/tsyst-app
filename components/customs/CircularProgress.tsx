import React from 'react';
import { CircularProgress as MuiCircularProgress, useTheme } from '@mui/material';

export default function CircularProgress(): JSX.Element {
  const theme = useTheme();

  return (
    <MuiCircularProgress sx={{ color: theme.palette.sys.primary }} />
  );
}
