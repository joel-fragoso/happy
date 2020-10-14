import express from 'express';
import path from 'path';

import 'express-async-errors';

import '../typeorm';

import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.use(
  '/uploads',
  express.static(
    path.join(__dirname, '..', '..', '..', '..', 'tmp', 'uploads'),
  ),
);

export default app;
