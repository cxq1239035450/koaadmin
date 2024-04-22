import app from './app/index'
import config from './config/index'

app.listen(config.port, () => {
  console.log(`服务启动成功,端口号:${config.port}`)
})
