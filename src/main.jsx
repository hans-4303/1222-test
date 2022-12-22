import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './redux/store'
/* vite로 앱을 만들면 index.css도 한번 참조 */
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
