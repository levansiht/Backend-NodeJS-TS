import { Router } from 'express'
import { accessTokenValidator, loginValidator, registerValidator } from '../middlewares/users.middlewares'
import { loginController, registerController } from '../controllers/users.controller'
import { wrapRequesHandler } from '~/utils/handlers'
const usersRouter = Router()

/**
 * description: Login
 * Path: /login
 * Method: POST
 * Body: email, password
 */
usersRouter.post('/login', loginValidator, loginController)

/**
 * description: Register
 * Path: /register
 * Method: POST
 * Body: name, email, password,confirm_password, date_of_birth
 */
usersRouter.post('/register', registerValidator, wrapRequesHandler(registerController))

/**
 * description: Logout
 * Path: /logout
 * Method: POST
 * Header: { Authorization: Bearer <access_token> }
 * Body: { refresh_token }
 */
usersRouter.post(
  '/logout',
  accessTokenValidator,
  wrapRequesHandler((req, res) => {
    res.json({ message: 'Logout successfully' })
  })
)
export default usersRouter
