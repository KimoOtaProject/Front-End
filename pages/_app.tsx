import {AppProps} from "next/app";

import '../styles/globals.scss'
import {Wrapper} from '../store';

function MyApp({ Component, pageProps, router }:AppProps) {
  return <Component {...pageProps} router={router} />
}

export default Wrapper.withRedux(MyApp);
