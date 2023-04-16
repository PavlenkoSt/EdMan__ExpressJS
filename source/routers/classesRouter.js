import { Router } from 'express';

import { ClassesController } from '../controllers';

import { authMiddleware, validateBody } from '../utils';

import { createClassSchema, updateClassSchema } from '../validationSchemas';

const classesRouter = Router();

const classesController = new ClassesController();

classesRouter.get('/', async (req, res) => {
  try {
    const classes = await classesController.getAll();

    return classes;
  } catch (e) {
    const { message } = e;

    res.status(e.statusCode || 500).json(message);
  }
});

classesRouter.post('/', [authMiddleware, validateBody(createClassSchema)], async (req, res) => {
  try {
    const classItem = await classesController.create(req.body);

    res.status(201).json(classItem);
  } catch (e) {
    const { message } = e;

    res.status(e.statusCode || 500).json(message);
  }
});

classesRouter.get('/:hash', [authMiddleware], async (req, res) => {
  try {
    const classItem = await classesController.getOneByHash(req.params.hash);

    res.status(200).json(classItem);
  } catch (e) {
    const { message } = e;

    res.status(e.statusCode || 500).json(message);
  }
});

classesRouter.put('/:hash', [authMiddleware, validateBody(updateClassSchema)], async (req, res) => {
  try {
    const classItem = await classesController.updateOneByHash(req.params.hash, req.body);

    res.status(200).json(classItem);
  } catch (e) {
    const { message } = e;

    res.status(e.statusCode || 500).json(message);
  }
});

classesRouter.delete('/:hash', [authMiddleware], async (req, res) => {
  try {
    const deleted = await classesController.deleteOneByHash(req.params.hash);

    res.status(200).json({ message: 'ok' });
  } catch (e) {
    const { message } = e;

    res.status(e.statusCode || 500).json(message);
  }
});

classesRouter.post('/:hash/enroll', [authMiddleware], (req, res) => {
  const { hash } = req.params;

  res.status(200).json({
    res: 'enroll user with hash ' + hash,
  });
});

classesRouter.post('/:hash/expel', [authMiddleware], (req, res) => {
  const { hash } = req.params;

  res.status(200).json({
    res: 'expel user with hash ' + hash,
  });
});

export default classesRouter;
