import {AppProps} from "next/app";

import '../styles/globals.scss'
import {Wrapper} from '../store';

function MyApp({ Component, pageProps }:AppProps) {
  return <Component {...pageProps} />
}

export default Wrapper.withRedux(MyApp);
