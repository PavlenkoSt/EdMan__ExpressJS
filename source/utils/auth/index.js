import passport from 'passport';
import jwt from 'jsonwebtoken';

import { NotFoundError } from '../errors';
import { users } from '../mockDB/users';

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_JWT,
    },
    (jwt_payload, done) => {
      console.log('jwt_payload', jwt_payload);

      const user = users.find(user => user.id === jwt_payload.id);

      if (!user) return done(new NotFoundError(), null);

      return done(null, user);
    }
  )
);

export const authMiddleware = (req, res, next) => {
  // if (req.headers.authorization === process.env.PASSWORD) {
  //   return next();
  // }

  // -------sessions--------------
  // const { user } = req.session;

  // if (user && user.email) {
  //   return next();
  // }

  // return res.send(401);

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
    email: user.email,
    id: user.id,
  };

  return jwt.sign(payload, process.env.SECRET_JWT, { expiresIn: '1h' });
};
