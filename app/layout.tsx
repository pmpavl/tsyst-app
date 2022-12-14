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
import { CircularProgress, Header } from '@/components';

export default function RootLayout({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <html lang="ru">
      <head />
      <body>
        <MetaProvider>
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
            <MetaContext.Consumer>
              {({ isLoading }) => (
                isLoading
                  ? (
                    <Container
                      component='main'
                      disableGutters
                      maxWidth={false}
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        height: '100vh',
                        width: '100%',
                      }}
                    >
                      <CircularProgress />
                    </Container>
                  )
                  : (
                    <> {/** Root content */}
                      <Header />
                      <Container
                        component='main'
                        disableGutters
                        maxWidth={false}
                        sx={{
                          display: 'block',
                          maxWidth: 'lg',
                          paddingX: { zero: '16px', mobile: '32px' },
                        }}
                      >
                        {children}
                      </Container>
                    </>
                  )
              )}
            </MetaContext.Consumer>
          </Container>
        </MetaProvider>
      </body >
    </html >
  );
}
