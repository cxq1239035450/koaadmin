import { Context, Next } from 'koa'
import jwt from 'jsonwebtoken'
import config from '../config/index'
import userService from '../service/userService'
interface UserRequestBody {
  userName: string
  password: string
}
class User {
  async register(ctx: Context, next: Next) {
    // 1. 获取数据
    const { userName, password } = ctx.request.body as UserRequestBody

    // 2. 操作数据库
    try {
      const res = await userService.createUser(userName, password)
      // 3. 返回结果
      ctx.body = {
        code: 200,
        message: '用户注册成功',
        result: {
          id: res.id,
          userName: res.userName,
        },
      }
    } catch (err) {
      ctx.app.emit('error', err, ctx)
    }
  }
  async getInfo(ctx: Context) {
    try {
      const id = ctx.query.id
      const user = await userService.getUser({ id })
      if (user) {
        ctx.body = {
          code: 200,
          message: '用户登录成功',
          data: user,
        }
      } else {
        ctx.body = {
          code: 500,
          message: '用户不存在',
        }
      }
    } catch (err) {
      ctx.app.emit('error', err, ctx)
    }
  }
  async login(ctx: Context) {
    try {
      const { userName, password } = ctx.request.body as UserRequestBody
      const user = await userService.getUser({ userName, password })
      if (user) {
        ctx.body = {
          code: 200,
          message: '用户登录成功',
          token: jwt.sign({ userName }, config.jwtSecret, { expiresIn: '8h' }),
        }
      } else {
        ctx.body = {
          code: 500,
          message: '用户名或密码错误',
        }
      }
    } catch (err) {
      ctx.app.emit('error', err, ctx)
    }
  }
  async getList(ctx: Context) {
    try {
      const { page, pageSize } = ctx.query
      const res = await userService.getList(Number(page), Number(pageSize))
      ctx.body = {
        code: 200,
        message: '',
        data: res.rows,
      }
    } catch (err) {
      ctx.app.emit('error', err, ctx)
    }
  }
}

export default new User()
