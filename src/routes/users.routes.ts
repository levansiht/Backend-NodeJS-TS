import { Router } from 'express'
import {
  accessTokenValidator,
  emailVerifyTokenValidator,
  loginValidator,
  refreshTokenValidator,
  registerValidator
} from '../middlewares/users.middlewares'
import {
  emailVerifyValidator,
  loginController,
  logoutController,
  registerController
} from '../controllers/users.controller'
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
usersRouter.post('/logout', accessTokenValidator, refreshTokenValidator, wrapRequesHandler(logoutController))

/**
 * description: verify email when user click on the link in email
 * Path: /verify-email
 * Method: POST
 * Body: { email_verify_token: string }
 */
usersRouter.post('/verify-email', emailVerifyTokenValidator, wrapRequesHandler(emailVerifyValidator))

export default usersRouter
