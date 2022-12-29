import { Footer, Header } from '@/components';
import 'style/global.css';

export default function RootLayout({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <html lang='ru'>
      <head />
      <body className='flex min-h-screen flex-col'>
        <Header />
        <main className='flex grow flex-col items-center px-2'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
