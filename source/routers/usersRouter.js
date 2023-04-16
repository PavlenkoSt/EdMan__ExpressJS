import { Router } from 'express';

import { createUserSchema } from '../validationSchemas';
import { UsersController } from '../controllers';

import { authMiddleware, validateBody } from '../utils';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.get('/', (req, res) => {
  res.status(200).json({
    res: 'get users',
  });
});

usersRouter.post('/', [authMiddleware, validateBody(createUserSchema)], async (req, res) => {
  const user = await usersController.create(req.body);

  res.status(201).json({
    message: 'User successfully created',
    res: user,
  });
});

usersRouter.get('/:hash', [authMiddleware], (req, res) => {
  res.status(200).json({
    res: 'get user by hash',
  });
});

usersRouter.put('/:hash', [authMiddleware], (req, res) => {
  res.status(200).json({
    res: 'update user',
  });
});

usersRouter.delete('/:hash', [authMiddleware], (req, res) => {
  res.status(200).json({
    res: 'delete user',
  });
});

export default usersRouter;
