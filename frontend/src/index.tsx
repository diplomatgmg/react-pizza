import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './assets/fonts/Nunito-Regular.ttf'
import './assets/fonts/Nunito-Bold.ttf'
import './assets/fonts/Nunito-Black.ttf'
import { Provider } from 'react-redux'
import store from './redux/store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as Element
)
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
)
