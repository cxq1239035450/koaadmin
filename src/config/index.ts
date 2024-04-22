type envType = 'dev' | 'test' | 'pro'
const env: envType = (process.env.NODE_ENV ?? 'dev') as envType

const config = {
  // 本地环境
  dev: {
    port: 3000,
    // host:''
  },
  // 测试环境
  test: {
    port: 80,
  },
  // 生产环境
  pro: {
    port: 80,
  },
}
export default config[env]
