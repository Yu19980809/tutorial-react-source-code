/**
 * 向服务器发送数据请求的方案
 *  + 第一类：XMLHttpRequest
 *    ++ ajax：自己编写请求的逻辑和步骤
 *    ++ axios：第三方库，对 XMLHttpRequest 进行（基于 Promise）封装
 * 
 *  + 第二类：fetch
 *    ++ ES6 内置的 API，本身就是基于 promise，用全新的方案实现数据请求
 *      +++ 不兼容 IE
 *      +++ 机制的完善度上不如 XMLHttpRequest（例如：无法设置超时时间、没有内置的请求中断处理......）
 * 
 *  + 第三类：其他方案，主要是跨域为主
 *    ++ jsonp
 *    ++ postMessage
 *    ++ 利用 img 的 src 发送请求，实现数据埋点和上报
 *    ++ ......
 */
import qs from 'qs'

let header = new Headers()
header.append('Content-Type', 'application/json')
header.append('name', 'Libra')

/**
 * 服务器返回的 response 对象（Response 类的实例）
 *  私有属性：
 *    + body：响应主体信息（是一个 ReadableStream 可读流）
 *    + headers：响应头信息（是 Headers 类的实例）
 *    + status/statusText：返回的 HTTP 状态码及描述
 */
const p = fetch('/api/getTaskList', {headers: header})
p.then(response => {
  //进入 then 的时候，不一定是请求成功（因为状态码可能是各种情况）
  const {headers, status, statusText} = response
  if (/^(2|3)\d{2}$/.test(status)) {
    console.log('success: ', response)
    return response.json()
  }

  // 获取数据失败的（状态码不对），使用 reject 使得下一步被 catch 捕捉到进行处理
  return Promise.reject({
    code: -100,
    status,
    statusText
  })
}).then(data => {
  console.log('Final result: ', data)
}).catch(error => {
  // 会有不同的失败情况
  // 1. 服务器没有返回任何信息
  // 2. 状态码不对
  // 3. 数据格式转换失败
  // ......
  console.log('fail: ', error)
})

document.body.addEventListener('click', () => {
  fetch('/api/addTask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    // 自己手动把请求主体格式变为服务器需要的
    body: qs.stringify({
      task: 'Learn Fetch',
      time: '2023-10-30 15:00:00'
    })
  }).then(response => {
    const {status, statusText} = response
    if (/^(2|3)\d{2}$/.test(status)) {
      return response.json()
    }

    return Promise.reject({
      code: -100,
      status,
      statusText
    })
  }).then(data => {
    console.log('final result: ', data)
  }).catch(error => {
    console.log('fail: ', error)
  })
})

// fetch 的请求中断（基于中断控制器 AbortController）
const controller = new AbortController()
fetch('/api/getTaskList', {
  // 请求中断的信号
  signal: controller.signal
})
  .then(response => {
    const {status, statusText} = response
    if (/^(2|3)\d{2}$/.test(status)) {
      return response.json()
    }

    return Promise.reject({
      code: -100,
      status,
      statusText
    })
  })
  .then(data => {
    console.log('final result: ', data)
  })
  .catch(error => {
    console.log('fail: ', error)
  })

// 立即中断请求
controller.abort()
