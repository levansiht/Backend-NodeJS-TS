import { Request, Response } from 'express'
import User from '~/models/schemas/User.schema'
import databaseservice from '~/services/database.services'
import usersService from '~/services/users.services'

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

export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  try {
    const result = await usersService.register({
      email,
      password
    })
    return res.json({
      message: 'Register Successfully',
      data: result
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Register failed'
    })
  }
}
