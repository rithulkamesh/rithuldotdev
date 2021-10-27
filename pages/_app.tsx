import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../components/Footer';
import theme from '../libs/theme';
import Layout from '../components/layouts/Main';
import Fonts from '../components/Fonts';
export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </ChakraProvider>
  );
}
