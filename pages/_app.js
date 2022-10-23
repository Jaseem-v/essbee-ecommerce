import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import Head from "next/head";
import Router from 'next/router';
import 'nprogress/nprogress.css'; //styles of nprogress
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import AlrtContainer from "../components/alrtmsg/AlrtContainer";
import BottomNavigation from "../components/footer/BottomNavigation";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import store from "../redux/store";
import "../styles/globals.scss";
//Binding events. 


function MyApp({ Component, pageProps }) {

  const [isPageLoading, SetIsPageLoading] = useState(false)
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");

    Router.events.on('routeChangeStart', () => SetIsPageLoading(true));
    Router.events.on('routeChangeComplete', () => SetIsPageLoading(false));
    Router.events.on('routeChangeError', () => SetIsPageLoading(false));
  }, []);

  return (
    <Provider store={store}>
      <div>
        <Head>
          <title>Essbee Ecommerce</title>
        </Head>
        <Navbar />
        <AlrtContainer />
        <Component {...pageProps} />

        <Footer />

        <BottomNavigation />

        <div className={`loading ${isPageLoading ? '' : "d-none"}`}></div>

      </div>
    </Provider>
  );
}

export default MyApp;
