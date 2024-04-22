import { DataTypes } from 'sequelize'
import seq from '../db/seq'

// 创建模型(Model user - > users)
const user = seq.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, //是否唯一
      comment: '用户名，唯一',
    },
    password: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      comment: '密码',
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true, //默认值
    },
  },
  {
    tableName: 'users', // 设置表名，默认是复数形式
    timestamps: false, // 隐藏创建和更新时间
  }
)
// user.sync({ force: true })

export default user
