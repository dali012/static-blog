import { Appbar } from '@/components';
import { ColorModeProvider } from '@/providers/ColorMode';
import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import Login from './login';

function MyApp({ Component, pageProps }: AppProps) {
  const user: boolean = false;
  return (
    <ColorModeProvider>
      <CssBaseline />
      {user ? (
        <>
          <Appbar />
          <Component {...pageProps} />
        </>
      ) : (
        <Login />
      )}
      <Component {...pageProps} />
    </ColorModeProvider>
  );
}

export default MyApp;
