import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import store from './store'
import { Provider } from 'react-redux'
import Demo from './views/Demo'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <ConfigProvider>
    <Provider store={store}>
      <Demo />
    </Provider>
  </ConfigProvider>
)
