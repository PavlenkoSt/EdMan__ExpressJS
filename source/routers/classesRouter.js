import { Router } from 'express';

import { ClassesController } from '../controllers';

import { authMiddleware, validateBody } from '../utils';
import { createClassSchema } from '../validationSchemas';

const classesRouter = Router();

const classesController = new ClassesController();

classesRouter.get('/', (req, res) => {
  res.status(200).json([]);
});

classesRouter.post('/', [authMiddleware, validateBody(createClassSchema)], async (req, res) => {
  try {
    const classItem = await classesController.create(req.body);

    res.status(201).json(classItem);
  } catch (e) {
    res.status(e.statusCode || 500).json(e);
  }
});

classesRouter.get('/:hash', [authMiddleware], (req, res) => {
  res.status(200).json({});
});

classesRouter.put('/:hash', [authMiddleware], (req, res) => {
  res.status(200).json({
    res: 'update class by hash',
  });
});

classesRouter.delete('/:hash', [authMiddleware], (req, res) => {
  res.status(200).json({
    res: 'delete class by hash',
  });
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
