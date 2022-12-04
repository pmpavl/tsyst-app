import { AppMetaProvider, ThemeProvider } from '@/context';

export default function Providers({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <AppMetaProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </AppMetaProvider>
  );
}
