import { Inter as FontSans, JetBrains_Mono as FontMono } from 'next/font/google';

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' });
const fontMono = FontMono({ subsets: ['latin'], variable: '--font-mono' });

export { fontSans, fontMono };
