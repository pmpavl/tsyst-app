import React from 'react';
import localFont from '@next/font/local';
import { Providers } from '@/context';
import 'style/globals.css';

const INTER = localFont({
  variable: '--font-inter', src: '../style/fonts/Inter.woff2', weight: '100 900', style: 'normal', preload: true,
});
const FIRA_CODE = localFont({
  variable: '--font-fira-code', src: '../style/fonts/FiraCode.woff2', weight: '300 700', style: 'normal', preload: true,
});

export default function RootLayout({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <html lang='ru' className={`${INTER.variable} ${FIRA_CODE.variable}`}>
      <head />
      <body className='bg-light-background transition duration-100 dark:bg-dark-background'>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
