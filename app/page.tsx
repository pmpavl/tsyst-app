'use client';

import React from 'react';
import { Theme, Typography, useTheme } from '@mui/material';

export default function Page(): JSX.Element {
  const theme: Theme = useTheme();

  return (
    <>
      <Typography
        textAlign='center'
        variant='h2'
        fontWeight='600'
      >
        Тестирующая система
      </Typography>
      <Typography
        textAlign='center'
        variant='subtitle1'
        fontWeight='400'
        marginTop='1.5rem'
      >
        Система для проведения анализа способностей школьников в решении математических задач.
      </Typography>
      <Typography
        textAlign='center'
        variant='subtitle1'
        fontWeight='600'
        color={theme.palette.sys.error}
      >
        {'В разработке'}
      </Typography>
    </>
  );
}
