export const authMiddleware = (req, res, next) => {
  // if (req.headers.authorization === process.env.PASSWORD) {
  //   return next();
  // }

  const { user } = req.session;

  if (user && user.email) {
    return next();
  }

  return res.send(401);
};
