import { Sequelize } from 'sequelize'
const sequelize = new Sequelize('sqlite::memory:')

const seq = new Sequelize('koasql', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
})
seq
  .authenticate()
  .then(() => {
    console.log('连接成功')
  })
  .catch(err => {
    console.log('连接失败', err)
  })
export default seq
