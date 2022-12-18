import React from 'react';
import { Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { getBadgeStyleSX } from '@/components';

export type BadgeProps = { text: string };

export default function Badge({ text }: BadgeProps): JSX.Element {
  const theme: Theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('mobile'));

  if (text === '') return <></>;

  return <Typography noWrap sx={{ ...getBadgeStyleSX(theme, 'tonal', mobile) }}> {text} </Typography>;
}
