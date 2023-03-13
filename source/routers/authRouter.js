import { Router } from "express";

const authRouter = Router()

authRouter.post('/login', (req, res) => {
  res.status(200).json({
    res: 'login'
  })
})

authRouter.post('/logout', (req, res) => {
  res.status(200).json({
    res: 'logout'
  })
})

export default authRouter