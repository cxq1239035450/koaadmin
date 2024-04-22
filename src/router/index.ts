import fs from 'fs'
import Router from '@koa/router'
import { Context } from 'koa'

const router = new Router()

// 加载所有路由模块
fs.readdirSync(__dirname).forEach(file => {
  if (file !== 'index.ts') {
    let r = require('./' + file)
    router.use(r.routes())
  }
})

router.all(':catchAll(.*)', (ctx: Context) => {
  ctx.body = '404 not serve'
  ctx.status = 404
})

// 使用路由中间件
export default router
