import { Router } from 'express';

import { authMiddleware, rateLimiter, generateToken, users } from '../utils';

import { AuthController } from '../controllers';

const authRouter = Router();

const authController = new AuthController();

authRouter.use(rateLimiter({ max: 100, windowMs: 1000 * 60 * 5 }));

authRouter.post('/login', async (req, res) => {
  try {
    // verbatim8872@gmail.com
    // 123123
    const { email, password } = req.body;

    const token = await authController.auth(email, password);

    res.set('X-TOKEN', token);

    res.status(200).json({
      res: 'Authorized - ' + email,
    });
  } catch (e) {
    const { message, statusCode } = e;

    res.status(statusCode || 500).json({ message });
  }
});

authRouter.post('/logout', [authMiddleware], (req, res) => {
  res.set('X-TOKEN', '');

  res.status(200).json({
    res: 'logout',
  });
});

export default authRouter;
