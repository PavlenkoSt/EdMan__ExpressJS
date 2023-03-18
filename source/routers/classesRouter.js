import { Router } from 'express';

import { authMiddleware } from '../utils';

const classesRouter = Router();

classesRouter.get('/', (req, res) => {
  res.status(200).json({
    res: 'get classes',
  });
});

classesRouter.post('/', [authMiddleware], (req, res) => {
  res.status(200).json({
    res: 'create class',
  });
});

classesRouter.get('/:hash', [authMiddleware], (req, res) => {
  res.status(200).json({
    res: 'get class by hash',
  });
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
