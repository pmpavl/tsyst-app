import localFont from '@next/font/local';
import { ThemeProvider } from '@/context';
import { Header, Footer } from '@/components';
import 'style/global.css';

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
      <body className='flex min-h-screen flex-col items-center justify-start bg-light-background text-light-on-background transition duration-100 dark:bg-dark-background dark:text-dark-on-background'>
        <ThemeProvider>
          <Header />
          <main className='my-auto flex w-screen max-w-screen-laptop flex-col items-center justify-start px-4 mobile:px-8'>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
