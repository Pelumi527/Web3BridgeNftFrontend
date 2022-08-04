import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../layout'
import Provider from '../Providers'
import {useState, useEffect} from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true);
  }, []);

  
  if (!hasMounted) {
    return null;
  }

  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
