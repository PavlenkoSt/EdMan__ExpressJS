import { Router } from 'express';

import { LessonsController } from '../controllers';

import { authMiddleware, validateBody } from '../utils';

import { createLessonSchema, updateLessonSchema } from '../bodyValidate';

const lessonRouter = Router();

const lessonController = new LessonsController();

lessonRouter.get('/', async (req, res) => {
  try {
    const lessons = await lessonController.getAll();

    res.status(200).json(lessons);
  } catch (e) {
    const { message } = e;

    res.status(e.statusCode || 500).json({ message });
  }
});

lessonRouter.post('/', [authMiddleware, validateBody(createLessonSchema)], async (req, res) => {
  try {
    const lesson = await lessonController.create(req.body);

    res.status(201).json(lesson);
  } catch (e) {
    const { message } = e;

    res.status(e.statusCode || 500).json({ message });
  }
});

lessonRouter.get('/:hash', [authMiddleware], async (req, res) => {
  try {
    const lesson = await lessonController.getOneByHash(req.params.hash);

    res.status(200).json(lesson);
  } catch (e) {
    const { message } = e;

    res.status(e.statusCode || 500).json({ message });
  }
});

lessonRouter.put('/:hash', [authMiddleware, validateBody(updateLessonSchema)], async (req, res) => {
  try {
    const newLesson = await lessonController.updateOneByHash(req.params.hash, req.body);

    res.status(200).json(newLesson);
  } catch (e) {
    const { message } = e;

    res.status(e.statusCode || 500).json({ message });
  }
});

lessonRouter.delete('/:hash', [authMiddleware], async (req, res) => {
  try {
    const newLesson = await lessonController.deleteOneByHash(req.params.hash);

    res.status(200).json(newLesson);
  } catch (e) {
    const { message } = e;

    res.status(e.statusCode || 500).json({ message });
  }
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
