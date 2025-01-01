import { Router } from 'express'
import { loginValidator, registerValidator } from '../middlewares/users.middlewares'
import { loginController, registerController } from '../controllers/users.controller'
import { wrapRequesHandler } from '~/utils/handlers'
const usersRouter = Router()

usersRouter.post('/login', loginValidator, loginController)
usersRouter.post('/register', registerValidator, wrapRequesHandler(registerController))
export default usersRouter
