import React from "react";
import { ToastContainer } from "react-toastify";
import { Provider } from 'react-redux';
import {store, persistor } from "@/redux/store/store"; 
import { PersistGate } from 'redux-persist/integration/react'; 
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer autoClose={2000} />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default App;
