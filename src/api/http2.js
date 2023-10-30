import qs from 'qs'
import { message } from 'antd'
import { isPlainObject } from '../utils'

// 核心方法
const baseUrl = '/api'
const http = config => {
  // initialize config
  if (!isPlainObject(config)) config = {}
  config = Object.assign({
    url: '',
    method: 'GET',
    credentials: 'include',
    headers: null,
    body: null,
    params: null,
    responseType: 'json',
    signal: null
  }, config)

  // validate params
  if (!config.url) {
    throw new TypeError('url is required')
  }
  if (!isPlainObject(config.headers)) {
    config.headers = {}
  }
  if (config.params !== null && !isPlainObject(config.params)) {
    config.params = null
  }

  let {url, method, credentials, headers, body, params, responseType, signal} = config
  
  // 处理问号传参
  url = baseUrl + url
  if (params) {
    url += `${url.indexOf('?') ? '&' : '?'}${qs.stringify(params)}`
  }

  // 处理请求主体信息：按照后台要求
  // 例如：如果传递的是一个普通对象，将其设置为 urlencoded 格式
  if (!isPlainObject(body)) {
    body = qs.stringify(body)
    headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }

  // 类似于 axios 中的请求拦截器，处理每一个请求传递给服务器的相同内容
  let token = localStorage.getItem('token')
  if (token) {
    headers['Authorization'] = token
  }

  // send request
  config = {
    method: method.toUpperCase(),
    credentials,
    headers,
    cache: 'no-cache',
    signal
  }
  if (/^(POST|PUT|PATCH)$/i.test(method) && body) {
    config['body'] = body
  }
  return fetch(url, config)
    .then(response => {
      const {status, statusText} = response
      // 请求成功
      if (/^(2|3)\d{2}$/.test(status)) {
        // 根据预设的方式（即 responseType），获取需要的值
        let result
        switch(responseType.toLowerCase()) {
          case 'text':
            result = response.text()
            break
          case 'arrayBuffer':
            result.arrayBuffer()
            break
          case 'blob':
            result = response.blob()
            break
          default:
            result = response.json()
        }
        return result
      }
      // 请求失败
      return Promise.reject({
        code: -100,
        status,
        statusText
      })
    })
    .catch(error => {
      // 失败提示
      // if (error && typeof error === 'object') {
      //   let {code, status} = error
      //   if (code === -100) {
      //     switch(+status) {
      //       case 400:
      //         message.error('请求参数有误')
      //         break
      //       default:
      //     }
      //   } else if (code === 20) {
      //     message.error('请求被中断了~')
      //   } else {
      //     message.error('当前网络繁忙，请稍后再试~')
      //   }
      // } else {
      //   message.error('当前网络繁忙，请稍后再试~')
      // }

      message.error('当前网络繁忙，请稍后再试~')
      return Promise.reject(error)
    })
}

// 快捷方法
['GET', 'HEAD', 'DELETE', 'OPTIONS'].forEach(item => {
  http[item.toLowerCase()] = (url, config) => {
    if (!isPlainObject(config)) config = {}
    config['url'] = url
    config['method'] = item
    return http(config)
  }
})

// eslint-disable-next-line no-sequences
['POST', 'PUT', 'PATCH'].forEach(item => {
  http[item.toLowerCase()] = (url, body, config) => {
    if (!isPlainObject(config)) config = {}
    config['url'] = url
    config['method'] = item
    config['body'] = body
    return http(config)
  }
})

export default http
