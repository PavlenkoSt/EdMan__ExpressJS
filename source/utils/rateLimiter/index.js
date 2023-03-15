import RateLimit from "express-rate-limit";

export const rateLimiter = ({max, windowMs}) => {
  return RateLimit({
    max,
    windowMs,
    standardHeaders: false
  })
}