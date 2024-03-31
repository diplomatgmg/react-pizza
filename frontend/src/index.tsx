import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './assets/fonts/Nunito-Regular.ttf'
import './assets/fonts/Nunito-Bold.ttf'
import './assets/fonts/Nunito-Black.ttf'
import { Provider } from 'react-redux'
import store, { persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(
  document.getElementById('root') as Element
)
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>
)
