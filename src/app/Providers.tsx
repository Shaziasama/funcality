"use client"

import React from 'react'
import { Store } from './(add)/Redux/store';
import { Provider } from 'react-redux';


import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";



function Providers({ children,}: Readonly<{ children: React.ReactNode;}>) {
  let persistore = persistStore(Store)
  return (
    <div>
       <Provider store={Store}>
        <PersistGate persistor={persistore}>
        {children}
        </PersistGate>
        </Provider>
    </div>
  )
}

export default Providers
