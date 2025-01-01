import { NextFunction, Request, Response } from 'express'
import User from '~/models/schemas/User.schema'
import databaseservice from '~/services/database.services'
import usersService from '~/services/users.services'
import { ParamsDictionary } from 'express-serve-static-core'
import { RegisterReqBody } from '~/models/requests/User.requests'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'levansia1ct@gmail.com' && password === '123456') {
    res.json({
      message: 'User logged inadadad successfuassdasdlly'
    })
  }
  res.status(401).json({
    message: 'Invalid email or password'
  })
}

export const registerController = async (
  req: Request<ParamsDictionary, any, RegisterReqBody>,
  res: Response,
  next: NextFunction
) => {
  const result = await usersService.register(req.body)
  return res.json({
    message: 'Register Successfully',
    data: result
  })
}
