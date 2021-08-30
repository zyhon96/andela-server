import { respondWithWarning } from './helpers/responseHandler';

import apiRouter from './routes/index';

const logger = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');
const express = require('express');

dotenv.config();

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(apiRouter);

app.use('*', (req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

if (process.env.NODE_ENV === 'development') {
  app.use((error, req, res, next) => {
    respondWithWarning(res, error.status || 500, error.message, error);
  });
} else {
  app.use((error, req, res, next) => {
    respondWithWarning(res, error.status || 500, error.message);
  });
}

app.get('/', (req, res) => {
  res.send('hello world');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server initialised and listening on port ${PORT}`));

export default app;
