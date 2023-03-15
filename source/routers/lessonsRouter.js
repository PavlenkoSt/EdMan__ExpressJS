import { paginationQueriesSchema } from '../schemas/paginationQueriesSchema';

import { validateQuery } from '../utils';

const { Router } = require('express');

const lessonRouter = Router();

lessonRouter.get('/', [validateQuery(paginationQueriesSchema)], (req, res) => {
  res.status(200).json({
    res: 'get all lessons',
  });
});

lessonRouter.post('/', (req, res) => {
  res.status(200).json({
    res: 'create lesson',
  });
});

lessonRouter.get('/:hash', (req, res) => {
  res.status(200).json({
    res: 'get lesson by hash',
  });
});

lessonRouter.put('/:hash', (req, res) => {
  res.status(200).json({
    res: 'update lesson by hash',
  });
});

lessonRouter.delete('/:hash', (req, res) => {
  res.status(200).json({
    res: 'delete lesson by hash',
  });
});

lessonRouter.post('/:hash/videos', (req, res) => {
  const { hash } = req.params;

  res.status(200).json({
    res: 'add video to lesson by hash ' + hash,
  });
});

lessonRouter.get('/:hash/videos/:videoHash', (req, res) => {
  const { hash, videoHash } = req.params;

  res.status(200).json({
    res: 'video from lesson by 2 hashes 1- ' + hash + ' 2- ' + videoHash,
  });
});

lessonRouter.delete('/:hash/videos/:videoHash', (req, res) => {
  const { hash, videoHash } = req.params;

  res.status(200).json({
    res: 'delete video from lesson by 2 hashes 1- ' + hash + ' 2- ' + videoHash,
  });
});

lessonRouter.post('/:hash/keynotes', (req, res) => {
  const { hash } = req.params;

  res.status(200).json({
    res: 'add keynote to lesson by hash ' + hash,
  });
});

lessonRouter.get('/:hash/keynotes/:videoHash', (req, res) => {
  const { hash, videoHash } = req.params;

  res.status(200).json({
    res: 'keynote from lesson by 2 hashes 1- ' + hash + ' 2- ' + videoHash,
  });
});

lessonRouter.delete('/:hash/keynotes/:videoHash', (req, res) => {
  const { hash, videoHash } = req.params;

  res.status(200).json({
    res: 'delete keynote from lesson by 2 hashes 1- ' + hash + ' 2- ' + videoHash,
  });
});

export default lessonRouter;
