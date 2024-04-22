import Router from '@koa/router'
import { Context } from 'koa'
import User from '../contronllers/userContronllers'

const router = new Router({ prefix: '/users' })

router.get('/getUserInfo', (ctx: Context) => {
  ctx.body = '获取用户信息'
  ctx.status = 200
})
router.get('/getList', User.getList)
// 注册接口
router.post('/register', User.register)

// 登录接口
router.post('/login')

// 修改密码接口
router.patch('/')

module.exports = router
