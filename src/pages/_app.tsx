import { Appbar } from '@/components';
import { auth } from '@/lib/firebaseAppClient';
import { ColorModeProvider } from '@/providers/ColorMode';
import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './login';

function MyApp({ Component, pageProps }: AppProps) {
  const [user, loading, error] = useAuthState(auth);
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
    </ColorModeProvider>
  );
}

export default MyApp;
