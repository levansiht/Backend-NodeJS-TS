import User from '~/models/schemas/User.schema'
import databaseservice from './database.services'

class UsersService {
  async register(payload: { email: string; password: string }) {
    const { email, password } = payload
    const result = await databaseservice.users.insertOne(
      new User({
        email,
        password
      })
    )
    return result
  }
  async checkEmailExists(email: string) {
    const user = await databaseservice.users.findOne({ email })
    return Boolean(user)
  }
}

const usersService = new UsersService()
export default usersService
