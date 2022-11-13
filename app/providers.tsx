import { PaletteModeProvider, ThemeProvider } from '@/provider';

export default function Providers({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <PaletteModeProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </PaletteModeProvider>
  );
}
