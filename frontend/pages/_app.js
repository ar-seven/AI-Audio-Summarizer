import React from 'react';
import Navbar from '../components/Navbar';

import '../styles/globals.css';
import { AuthProvider } from "./AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
