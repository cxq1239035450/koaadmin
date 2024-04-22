import userModel from '../model/userModel'

class User {
  async createUser(userName: string, password: any) {
    const res = await userModel.create({ userName, password })
    return res.dataValues
  }
  async getList(page: number, pageSize: number) {
    const res = await userModel.findAndCountAll({
      limit: pageSize,
      offset: (page - 1) * pageSize,
    })
    return res
  }
  async getUser(userId: any) {
    const res = await userModel.findOne({
      where: {
        id: userId,
      },
    })
    return res
  }
  async updateUser(userId: any, user: any) {
    const newUser = {}
    const res = await userModel.update(newUser, {
      where: {
        id: userId,
      },
    })
  }
  deleteUser(userId: any) {
    userModel.destroy({
      where: {
        id: userId,
      },
    })
  }
}

export default new User()
