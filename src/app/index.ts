import Koa from 'koa'
import body from 'koa-body'
import serve from 'koa-static'
import cors from '@koa/cors'
import path from 'path'

import router from '../router/index'
import errFn from './err'

const app = new Koa()

// 跨域
app.use(
  cors({
    origin: '*',
    allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
  })
)
// 解析请求体中的参数,
app.use(
  body({
    multipart: true,
    formidable: {
      multiples: true,
      maxFieldsSize: 200 * 1024 * 1024, // 文件上传大小限制
      uploadDir: path.join(__dirname, '../upload'),
      keepExtensions: true,
    },
    onError: (error, ctx) => {
      console.log('请求体解析错误', error)
    },
  })
)
// 静态文件服务
app.use(serve(path.join(__dirname, '../public')))

app.use(router.routes()).use(router.allowedMethods())

app.on('error', errFn)

export default app
