/**
 * Пока рендер на клиенте, потому что в Next.js v13 бага связанная с тем,
 * что MUI использует emotion под копотом.
 *
 * Issue: https://github.com/vercel/next.js/issues/41994
 */
'use client';

import React from 'react';
import { Container } from '@mui/material';
import { MetaProvider, MetaContext } from '@/context';
import { CircularProgress, Footer, Header } from '@/components';

export default function RootLayout({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <html lang="ru">
      <head />
      <body>
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            minHeight: '100vh',
            width: '100%',
          }}
        >
          <MetaProvider>
            <Header />
            <Container
              component='main'
              disableGutters
              maxWidth={false}
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                width: '100%',
                maxWidth: 'lg',
                marginBlock: 'auto',
                paddingX: { zero: '16px', mobile: '32px' },
                paddingY: '16px',
              }}
            >
              <MetaContext.Consumer>
                {({ isLoading }) => isLoading ? <CircularProgress /> : <>{children}</>}
              </MetaContext.Consumer>
            </Container>
            <Footer />
          </MetaProvider>
        </Container>
      </body>
    </html>
  );
}
