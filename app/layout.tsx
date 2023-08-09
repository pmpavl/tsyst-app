import '@/styles/globals.css';
import { Metadata } from 'next';

import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import {
  AppProvider,
  ThemeProvider,
  Header,
  TailwindIndicator,
  LoaderProvider,
} from '@/components';

export const metadata: Metadata = {
  title: 'Система тестирования',
  description: 'School Testing System Application',
  authors: { name: 'Maxim Prokashev' },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  viewport: { width: 'device-width', initialScale: 1, viewportFit: 'cover' },
  manifest: '/site.webmanifest',
  icons: '/favicon.ico',
};

export default function RootLayout({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <html lang='ru' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <AppProvider>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <LoaderProvider>
              <div className='relative flex min-h-screen flex-col'>
                <Header />
                <main className='flex-1'>
                  {children}
                </main>
              </div>
            </LoaderProvider>
            <TailwindIndicator />
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
