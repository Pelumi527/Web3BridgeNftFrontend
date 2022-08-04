import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../layout'
import Provider from '../Providers'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
