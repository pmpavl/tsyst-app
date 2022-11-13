'use client';

import React from 'react';
import { Container } from '@mui/material';
import Providers from './providers';

export default function RootLayout({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <html lang="ru">
      <head />
      <body>
        <Providers>
          <Container
            disableGutters
            maxWidth={false}
            sx={{
              padding: '0px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: '100%',
              maxWidth: '80rem',
              minHeight: '100vh',
              textTransform: 'none',
            }}
          >
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
