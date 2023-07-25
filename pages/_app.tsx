import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react';
import {theme} from '@/styles/theme'


export default function App({ Component, pageProps: { session, ...pageProps }, }: AppProps<{ session: Session }>) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  )
}