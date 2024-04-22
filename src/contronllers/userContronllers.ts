import { Context, Next } from 'koa'
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
      console.log(res, '============================')

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
  getUser(userId: any) {}
  updateUser(userId: any, user: any) {}
  deleteUser(userId: any) {}
  async getList(ctx: Context) {
    try {
      console.log(ctx)

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
