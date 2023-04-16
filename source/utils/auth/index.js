import passport from 'passport';
import jwt from 'jsonwebtoken';

import { NotFoundError } from '../errors';
import { UserODM } from '../../odm';

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_JWT,
    },
    async (jwt_payload, done) => {
      const user = await UserODM.findById(jwt_payload.id);

      if (!user) return done(new NotFoundError(), null);

      return done(null, user);
    }
  )
);

export const authMiddleware = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    req.user = user;

    next();
  })(req, res, next);
};

export const generateToken = user => {
  const payload = {
    id: user.id,
  };

  return jwt.sign(payload, process.env.SECRET_JWT, { expiresIn: '1h' });
};
