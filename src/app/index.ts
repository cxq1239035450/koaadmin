import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import serve from 'koa-static'
import router from '../router/index'
import errFn from './err'

const app = new Koa()

// 解析请求体中的参数,
app.use(
  bodyParser({
    enableTypes: ['json', 'form', 'text', 'xml'],
    formLimit: '56kb',
    jsonLimit: '1mb',
    textLimit: '1mb',
    xmlLimit: '1mb',
    strict: true,
  })
)
// 静态文件服务
app.use(serve(__dirname + '/public'))

app.use(router.routes()).use(router.allowedMethods())

app.on('error', errFn)

export default app
