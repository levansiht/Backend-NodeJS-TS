import { Router } from 'express'
import {
  accessTokenValidator,
  verifyEmailTokenValidator,
  loginValidator,
  refreshTokenValidator,
  registerValidator,
  forgotPasswordValidator,
  verifyForgotPasswordTokenValidator,
  resetPasswordValidator
} from '../middlewares/users.middlewares'
import {
  verifyEmailController,
  loginController,
  logoutController,
  registerController,
  resendVerifyEmailController,
  forgotPasswordController,
  verifyForgotPasswordController,
  resetPasswordController
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
usersRouter.post('/verify-email', verifyEmailTokenValidator, wrapRequesHandler(verifyEmailController))

/**
 * description: resend verify email when user click on the link in email
 * Path: /resend-verify-email
 * Method: POST
 * Header: { Authorization: Bearer <access_token> }
 * Body: {}
 */
usersRouter.post('/resend-verify-email', accessTokenValidator, wrapRequesHandler(resendVerifyEmailController))

/**
 * description: Submit email to get link to reset password, send email to user
 * Path: /forgot-password
 * Method: POST
 * Body: {email: string}
 */
usersRouter.post('/forgot-password', forgotPasswordValidator, wrapRequesHandler(forgotPasswordController))

/**
 * description: Verify forgot password token
 * Path: /verify-forgot-password
 * Method: POST
 * Body: {forgot-password-token: string}
 */
usersRouter.post(
  '/verify-forgot-password',
  verifyForgotPasswordTokenValidator,
  wrapRequesHandler(verifyForgotPasswordController)
)

/**
 * description: Reset password
 * Path: /reset-password
 * Method: POST
 * Body: {forgot-password-token: string, password: string, confirm_password: string}
 */
usersRouter.post('/reset-password', resetPasswordValidator, wrapRequesHandler(resetPasswordController))
export default usersRouter
