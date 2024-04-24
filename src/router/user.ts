import Router from '@koa/router'
import { Context } from 'koa'
import user from '../contronllers/userContronllers'

const router = new Router({ prefix: '/users' })

router.get('/getInfo', user.getInfo)

router.get('/getList', user.getList)

// 注册接口
router.post('/register', user.register)

// 登录接口
router.post('/login', user.login)

// 修改密码接口
router.post('/ces', (ctx: Context) => {
  console.log(ctx.request.files, '------------------')

  ctx.body = 'ces'
})

module.exports = router
