import express, { Request, Response, NextFunction } from 'express'
import usersRouter from './routes/users.routes'
import databaseservice from './services/database.services'
import { defaultErrorHandler } from './middlewares/error.middlewares'
databaseservice.connect()

const app = express()
const port = 3000

app.use(express.json())
app.use('/users', usersRouter)
app.use(defaultErrorHandler)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
