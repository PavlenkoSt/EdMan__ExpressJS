import { Router } from 'express';

import { ClassesController } from '../controllers';

import { authMiddleware, validateBody } from '../utils';
import { createClassSchema } from '../validationSchemas';

const classesRouter = Router();

classesRouter.get('/', (req, res) => {
  res.status(200).json([]);
});

classesRouter.post('/', [authMiddleware, validateBody(createClassSchema)], async (req, res) => {
  const classesController = new ClassesController(req.body);

  const classItem = await classesController.create();

  res.status(201).json({
    res: 'created successfully',
    data: classItem,
  });
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
