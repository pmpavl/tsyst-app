'use client';

import React from 'react';
import { Typography, useTheme } from '@mui/material';
import Link from 'next/link';

export default function Page(): JSX.Element {
  const theme = useTheme();

  return (
    <>
      <Typography
        textAlign='center'
        variant='h2'
        fontWeight='600'
        marginTop='24vh'
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
        {' В разработке'}
      </Typography>
      <Link href='/login'>Login</Link>
    </>
  );
}
