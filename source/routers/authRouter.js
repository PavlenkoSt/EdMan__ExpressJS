import { Router } from 'express';

import { loginSchema } from '../schemas/LoginSchema';

import { rateLimiter, validateBody } from '../utils';

const authRouter = Router();

authRouter.use(rateLimiter({ max: 100, windowMs: 1000 * 60 * 5 }));

authRouter.post('/login', [validateBody(loginSchema)], (req, res) => {
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
