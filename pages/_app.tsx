import {AppProps} from "next/app";

import '../styles/globals.scss'
import {Wrapper} from '../store';

function MyApp({ Component, pageProps, router }:AppProps) {
  return router.pathname === '/'
    ? <Component {...pageProps} router={router}/>
    : (
      <>
        <nav>nav bar</nav>
        <Component {...pageProps} router={router}/>
      </>
    );
}

export default Wrapper.withRedux(MyApp);
