import { Router } from 'express';

import { createUserSchema, updateUserSchema } from '../validationSchemas';

import { UsersController } from '../controllers';

import { authMiddleware, validateBody } from '../utils';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.get('/', async (req, res) => {
  try {
    const users = await usersController.getAll();

    res.status(200).json(users);
  } catch (e) {
    const { message } = e;

    res.status(e.statusCode || 500).json({ message });
  }
});

usersRouter.post('/', [authMiddleware, validateBody(createUserSchema)], async (req, res) => {
  try {
    const user = await usersController.create(req.body);

    res.status(201).json(user);
  } catch (e) {
    const { message } = e;

    res.status(e.statusCode || 500).json({ message });
  }
});

usersRouter.get('/:hash', [authMiddleware], async (req, res) => {
  try {
    const user = await usersController.getOneByHash(req.params.hash);

    res.status(200).json(user);
  } catch (e) {
    const { message } = e;

    res.status(e.statusCode || 500).json({ message });
  }
});

usersRouter.put('/:hash', [authMiddleware, validateBody(updateUserSchema)], async (req, res) => {
  try {
    const newUser = await usersController.updateOneByHash(req.params.hash, req.body);

    res.status(200).json(newUser);
  } catch (e) {
    const { message } = e;

    res.status(e.statusCode || 500).json({ message });
  }
});

usersRouter.delete('/:hash', [authMiddleware], async (req, res) => {
  try {
    const user = await usersController.deleteOneByHash(req.params.hash);

    res.status(200).json({
      message: 'ok',
    });
  } catch (e) {
    const { message } = e;

    res.status(e.statusCode || 500).json({ message });
  }
});

export default usersRouter;
