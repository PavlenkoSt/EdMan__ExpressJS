import { Router } from 'express';

import { LessonsController } from '../controllers';

import { authMiddleware, validateBody } from '../utils';
import { createLessonSchema } from '../validationSchemas';

const lessonRouter = Router();

const lessonController = new LessonsController();

lessonRouter.get('/', (req, res) => {
  res.status(200).json({
    res: 'get all lessons',
  });
});

lessonRouter.post('/', [authMiddleware, validateBody(createLessonSchema)], async (req, res) => {
  try {
    const lesson = await lessonController.create(req.body);

    res.status(201).json(lesson);
  } catch (e) {
    res.status(e.statusCode || 500).json(e);
  }
});

lessonRouter.get('/:hash', [authMiddleware], (req, res) => {
  res.status(200).json({
    res: 'get lesson by hash',
  });
});

lessonRouter.put('/:hash', [authMiddleware], (req, res) => {
  res.status(200).json({
    res: 'update lesson by hash',
  });
});

lessonRouter.delete('/:hash', [authMiddleware], (req, res) => {
  res.status(200).json({
    res: 'delete lesson by hash',
  });
});

lessonRouter.post('/:hash/videos', [authMiddleware], (req, res) => {
  const { hash } = req.params;

  res.status(200).json({
    res: 'add video to lesson by hash ' + hash,
  });
});

lessonRouter.get('/:hash/videos/:videoHash', [authMiddleware], (req, res) => {
  const { hash, videoHash } = req.params;

  res.status(200).json({
    res: 'video from lesson by 2 hashes 1- ' + hash + ' 2- ' + videoHash,
  });
});

lessonRouter.delete('/:hash/videos/:videoHash', [authMiddleware], (req, res) => {
  const { hash, videoHash } = req.params;

  res.status(200).json({
    res: 'delete video from lesson by 2 hashes 1- ' + hash + ' 2- ' + videoHash,
  });
});

lessonRouter.post('/:hash/keynotes', [authMiddleware], (req, res) => {
  const { hash } = req.params;

  res.status(200).json({
    res: 'add keynote to lesson by hash ' + hash,
  });
});

lessonRouter.get('/:hash/keynotes/:videoHash', [authMiddleware], (req, res) => {
  const { hash, videoHash } = req.params;

  res.status(200).json({
    res: 'keynote from lesson by 2 hashes 1- ' + hash + ' 2- ' + videoHash,
  });
});

lessonRouter.delete('/:hash/keynotes/:videoHash', [authMiddleware], (req, res) => {
  const { hash, videoHash } = req.params;

  res.status(200).json({
    res: 'delete keynote from lesson by 2 hashes 1- ' + hash + ' 2- ' + videoHash,
  });
});

export default lessonRouter;
