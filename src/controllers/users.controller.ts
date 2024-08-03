import { Request, Response } from 'express'

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
