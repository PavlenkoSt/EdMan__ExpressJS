import { Router } from 'express';

import { createUserSchema } from '../schemas/users/createUserSchema';
import { getUserSchema } from '../schemas/users/getUserSchema';

import { validateQuery, validateBody } from '../utils/validate';

const usersRouter = Router();

usersRouter.get('/', [validateQuery(getUserSchema)], (req, res) => {
  res.status(200).json({
    res: 'get users',
  });
});

usersRouter.post('/', [validateBody(createUserSchema)], (req, res) => {
  res.status(200).json({
    res: 'create user',
  });
});

usersRouter.get('/:hash', (req, res) => {
  res.status(200).json({
    res: 'get user by hash',
  });
});

usersRouter.put('/:hash', (req, res) => {
  res.status(200).json({
    res: 'update user',
  });
});

usersRouter.delete('/:hash', (req, res) => {
  res.status(200).json({
    res: 'delete user',
  });
});

export default usersRouter;
