import { Router } from "express";

const usersRouter = Router()

usersRouter.get('/', (req, res) => {
  res.status(200).json({
    res: 'get users'
  })
})

usersRouter.post('/', (req, res) => {
  res.status(200).json({
    res: 'create user'
  })
})

usersRouter.get('/:hash', (req, res) => {
  res.status(200).json({
    res: 'get user by hash'
  })
})

usersRouter.put('/:hash', (req, res) => {
  res.status(200).json({
    res: 'update user'
  })
})

usersRouter.delete('/:hash', (req, res) => {
  res.status(200).json({
    res: 'delete user'
  })
})

export default usersRouter