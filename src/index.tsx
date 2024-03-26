import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './assets/fonts/Nunito-Regular.ttf'
import './assets/fonts/Nunito-Bold.ttf'
import './assets/fonts/Nunito-Black.ttf'

const root = ReactDOM.createRoot(
  document.getElementById('root') as Element
)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
