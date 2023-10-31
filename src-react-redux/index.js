import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
// import { Provider } from 'react-redux'
import { Provider } from '@/utils/myReactRedux.js'
import Vote from './views/Vote'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <ConfigProvider>
    <Provider store={store}>
      <Vote />
    </Provider>
  </ConfigProvider>
)
