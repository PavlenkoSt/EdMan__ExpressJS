import { Router } from 'express';

const classesRouter = Router();

classesRouter.get('/', (req, res) => {
  res.status(200).json({
    res: 'get classes',
  });
});

classesRouter.post('/', (req, res) => {
  res.status(200).json({
    res: 'create class',
  });
});

classesRouter.get('/:hash', (req, res) => {
  res.status(200).json({
    res: 'get class by hash',
  });
});

classesRouter.put('/:hash', (req, res) => {
  res.status(200).json({
    res: 'update class by hash',
  });
});

classesRouter.delete('/:hash', (req, res) => {
  res.status(200).json({
    res: 'delete class by hash',
  });
});

classesRouter.post('/:hash/enroll', (req, res) => {
  const { hash } = req.params;

  res.status(200).json({
    res: 'enroll user with hash ' + hash,
  });
});

classesRouter.post('/:hash/expel', (req, res) => {
  const { hash } = req.params;

  res.status(200).json({
    res: 'expel user with hash ' + hash,
  });
});

export default classesRouter;
