import { Router } from 'express';

import { authMiddleware } from '../utils';

const classesRouter = Router();

classesRouter.get('/', (req, res) => {
  res.status(200).json([]);
});

classesRouter.post('/', [authMiddleware], (req, res) => {
  res.status(201);
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
