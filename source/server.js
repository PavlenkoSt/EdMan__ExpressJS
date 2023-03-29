import express from 'express';
import session from 'express-session';

import authRouter from './routers/authRouter';
import classesRouter from './routers/classesRouter';
import lessonRouter from './routers/lessonsRouter';
import usersRouter from './routers/usersRouter';

import { sessionOptions, loggerMiddleware, errorLoggerMiddleware, noEndpoint } from './utils';

const app = express();

// app.use(session(sessionOptions));
app.use(express.json({ limit: '10kb' }));

app.use(loggerMiddleware);

app.use(authRouter);

app.use('/users', usersRouter);
app.use('/lessons', lessonRouter);
app.use('/classes', classesRouter);

app.use('*', noEndpoint);
app.use(errorLoggerMiddleware);

export { app };
