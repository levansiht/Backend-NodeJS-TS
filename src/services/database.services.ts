import { MongoClient, Db, Collection } from 'mongodb'
import { config } from 'dotenv'
import User from '~/models/schemas/User.schema'
config()
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@twitter.qrye1.mongodb.net/?retryWrites=true&w=majority&appName=twitter`

const client = new MongoClient(uri)

class DatabaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(process.env.DB_NAME)
  }
  async connect() {
    try {
      await this.db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error) {
      console.error('Unable to connect to MongoDB')
      throw error
    }
  }

  get users(): Collection<User> {
    return this.db.collection(process.env.DB_USERS_COLLECTION as string)
  }
}
const databaseservice = new DatabaseService()
export default databaseservice
