import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import Vote from './views/Vote'
import store from './store'
import themeContext from './themeContext'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <ConfigProvider>
    <themeContext.Provider value={{ store }}>
      <Vote />
    </themeContext.Provider>
  </ConfigProvider>
)
