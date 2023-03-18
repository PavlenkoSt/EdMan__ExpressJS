export const authMiddleware = (req, res, next) => {
  if (req.headers.authorization === process.env.PASSWORD) {
    return next();
  }

  return res.send(401);
};
