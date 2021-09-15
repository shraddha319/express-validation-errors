const AppError = require('./error/AppError');
const catchAsync = require('./error/catchAsync');
const createError = require('./error/createError');
const httpErrors = require('./error/httpErrors');
const errorHandler = require('./error/errorHandler');

module.exports = {
  AppError,
  catchAsync,
  createError,
  httpErrors,
  errorHandler,
};
