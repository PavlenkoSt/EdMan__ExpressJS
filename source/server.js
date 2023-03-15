import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';

import authRouter from './routers/authRouter';
import classesRouter from './routers/classesRouter';
import lessonRouter from './routers/lessonsRouter';
import usersRouter from './routers/usersRouter';

import { sessionOptions } from './utils';

const app = express();

app.use(bodyParser.json({ limit: '10kb' }));

app.use(authRouter);
app.use('/users', usersRouter);
app.use('/lessons', lessonRouter);
app.use('/classes', classesRouter);

app.use(session(sessionOptions));
app.use(express.json({ limit: '10kb' }));

export { app };
