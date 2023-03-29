import { Router } from 'express';

import { authMiddleware, rateLimiter, generateToken, users } from '../utils';

const authRouter = Router();

authRouter.use(rateLimiter({ max: 100, windowMs: 1000 * 60 * 5 }));

authRouter.post('/login', (req, res) => {
  const { email } = req.body;

  const user = users.find(user => user.email === email);

  if (!user) {
    return res.status(400).json({
      res: 'credentials are not valid',
    });
  }

  const token = generateToken(user);

  res.set('X-TOKEN', token);

  res.status(200).json({
    res: 'WELCOME, your email - ' + email,
  });
});

authRouter.post('/logout', [authMiddleware], (req, res) => {
  // req.session.destroy(error => {
  res.status(200).json({
    res: 'logout',
  });
  // });
});

export default authRouter;
