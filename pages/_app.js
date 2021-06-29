import '../styles/globals.css'
import Layout from '../components/Layout';
import { Provider } from 'next-auth/client'

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}
      options={{
        keepAlive: 5 * 60
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider >
  )
}