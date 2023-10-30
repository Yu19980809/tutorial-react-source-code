import http from './http2'

// 新增任务
export const addTask = (task, time) => {
  return http.post('/api/addTask', {
    task,
    time
  })
}

// ...
