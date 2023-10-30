import { createProxyMiddleware } from 'http-proxy-middleware'

const app = app => {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:9000',
      changeOrigin: true,
      ws: true,
      pathRewrite: {'/^api': ''}
    })
  )
}

export default app
