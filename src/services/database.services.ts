import { MongoClient } from 'mongodb'
import { config } from 'dotenv'
config()
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@twitter.cajnjyg.mongodb.net/?retryWrites=true&w=majority&appName=Twitter`

const client = new MongoClient(uri)

class DatabaseService {
  private client: MongoClient
  constructor() {
    this.client = new MongoClient(uri)
  }
  async connect() {
    try {
      await client.db('admin').command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close()
    }
  }
}
const databaseservice = new DatabaseService()
export default databaseservice
