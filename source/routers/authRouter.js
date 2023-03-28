import { Router } from 'express';

import { authMiddleware, rateLimiter } from '../utils';

const authRouter = Router();

authRouter.use(rateLimiter({ max: 100, windowMs: 1000 * 60 * 5 }));

authRouter.post('/login', (req, res) => {
  const { email } = req.body;

  req.session.user = { email };

  res.status(200).json({
    res: 'your email - ' + email,
  });
});

authRouter.post('/logout', [authMiddleware], (req, res) => {
  req.session.destroy(error => {
    res.status(200).json({
      res: 'logout',
    });
  });
});

export default authRouter;
