import { ColorModeProvider } from '@/providers/ColorMode';
import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorModeProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </ColorModeProvider>
  );
}

export default MyApp;
