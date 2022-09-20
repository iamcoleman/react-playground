import '../styles/globals.css'
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { ApplicationContainer } from '../components/layout/ApplicationContainer';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>App Title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put Mantine theme override here **/
        }}
      >
        <ApplicationContainer>
          <Component {...pageProps} />
        </ApplicationContainer>
      </MantineProvider>
    </>
  )
}

export default MyApp
