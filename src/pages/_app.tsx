import React from "react";
//import { AuthProvider } from "../contexts/AuthContext";
import '../styles/global.css'
import { HeaderPages } from '../components/HeaderPages';
import { FooterPages } from '../components/FooterPages';
import { ModeProvider } from "../contexts/ModeContext";

function App({ Component, pageProps }) {

  return (
    <ModeProvider>
      <HeaderPages />
      <Component {...pageProps}/>
      <FooterPages />
    </ModeProvider>
  )
}

export default App