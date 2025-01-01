import express, { Request, Response, NextFunction } from 'express'
import usersRouter from './routes/users.routes'
import databaseservice from './services/database.services'
const app = express()
const port = 3000

app.use(express.json())
app.use('/users', usersRouter)
databaseservice.connect()
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({ error: err.message })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
