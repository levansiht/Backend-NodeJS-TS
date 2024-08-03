import express from 'express'
import usersRouter from './routes/users.routes'
import databaseservice from './services/database.services'
const app = express()
const port = 3000

app.use(express.json())
app.use('/users', usersRouter)
databaseservice.connect()
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
