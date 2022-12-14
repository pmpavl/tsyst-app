import React from 'react';
import { CircularProgress as MuiCircularProgress, useTheme } from '@mui/material';

export default function CircularProgress(): JSX.Element {
  return <MuiCircularProgress disableShrink size={50} sx={{ color: useTheme().palette.sys.primary }} />;
}
