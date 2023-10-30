import axios from 'axios'
import qs from 'qs'
import { message } from 'antd'
import { isPlainObject } from '../utils'

const http = axios.create({
  baseUrl: '/api',
  timeout: 60000
})

http.defaults.transformRequest = data => {
  if (isPlainObject(data)) data = qs.stringify(data)
  return data
}

http.interceptors.response.use(response => {
  return response.data
}, error => {
  message.error('当前网络繁忙，请稍后再试~')
  return Promise.reject(error)
})

export default http
