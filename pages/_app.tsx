import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/styles/theme'
import { Provider } from 'react-redux';
import store from '../Redux/store';


export default function App({ Component, pageProps: { session, ...pageProps }, }: AppProps<{ session: Session }>) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ChakraProvider>
    </Provider>
  )
}