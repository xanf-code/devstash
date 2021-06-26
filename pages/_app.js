import '../styles/globals.css'
import Layout from '../components/Layout';
import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
