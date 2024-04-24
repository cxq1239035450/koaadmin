type envType = 'dev' | 'test' | 'pro'
const env: envType = (process.env.NODE_ENV ?? 'dev') as envType

const config = {
  // 本地环境
  dev: {
    port: 3000,
    // host:''
    jwtSecret: 'secret',
  },
  // 测试环境
  test: {
    port: 80,
    jwtSecret: 'test',
  },
  // 生产环境
  pro: {
    port: 80,
    jwtSecret: 'pro',
  },
}
export default config[env]
