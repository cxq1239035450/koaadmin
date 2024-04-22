// import { Context, Next } from 'koa'
// import { methodType } from '../types/request'
// const verifyFn = (rules: any[], method?: methodType) => {
//   return (ctx: Context, next: Next) => {
//     rules.forEach(rule => {
//       const { key, type, required, validate, message } = rule
//       let value = ctx.query[key]
//       if (ctx.request.method !== 'get' && ctx.request.method !== 'GET') {
//         const body = ctx.request.body as any
//         value = body[key]
//       }

//       if (required && !value) {
//         throw new Error(message)
//       }
//       // 验证类型
//       if (type && value) {
//       }
//       if (validate) {
//         validate(value)
//       }
//     })
//   }
// }
