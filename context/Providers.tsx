import React from 'react';
import { ThemeProvider } from '@/context';

export default function Providers({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
