import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ValidationError } from 'yup';

import AppError from './AppError';

interface IValidationErrors {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  if (err instanceof ValidationError) {
    const errors: IValidationErrors = {};

    err.inner.forEach(error => {
      errors[error.path] = error.errors;
    });

    return response.status(400).json({
      status: 'error',
      message: errors,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
};

export default errorHandler;
