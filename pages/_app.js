import '../styles/globals.scss'
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.min.css"
import { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import store from '../redux/store'
import { Provider } from 'react-redux'
import Head from 'next/head'



function MyApp({ Component, pageProps }) {


  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <Provider store={store}>
      <div>

        <Head>
          <title>Essbee Ecommerce</title>
        </Head>
        <Navbar />
        < Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default MyApp
