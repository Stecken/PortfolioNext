import React from "react";
//import { AuthProvider } from "../contexts/AuthContext";
import '../styles/global.css'
import { HeaderPages } from '../components/HeaderPages';
import { FooterPages } from '../components/FooterPages';

function App({ Component, pageProps }) {

  return (
    <>
      <HeaderPages />
      <Component {...pageProps}/>
      <FooterPages />
    </>
  )
}

export default App