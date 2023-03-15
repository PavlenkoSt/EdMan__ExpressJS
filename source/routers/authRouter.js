import { Router } from 'express';

import { rateLimiter } from '../utils';

const authRouter = Router();

authRouter.use(rateLimiter({ max: 100, windowMs: 1000 * 60 * 5 }));

authRouter.post('/login', (req, res) => {
  res.status(200).json({
    res: 'login',
  });
});

authRouter.post('/logout', (req, res) => {
  res.status(200).json({
    res: 'logout',
  });
});

export default authRouter;
