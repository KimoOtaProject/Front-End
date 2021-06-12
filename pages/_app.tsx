import {AppProps} from "next/app";

import '../styles/globals.scss';

import {Wrapper} from '../store';

import {Footer, Header} from "../components/Layout";

function MyApp({Component, pageProps, router}:AppProps) {
  return router.pathname === '/'
    ? <Component {...pageProps} router={router}/>
    : (
      <div className="Wrapper">
        <Header/>
        <Component {...pageProps} router={router}/>
        <Footer/>
      </div>
    );
}

export default Wrapper.withRedux(MyApp);
