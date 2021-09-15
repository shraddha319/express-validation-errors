const AppError = require('./AppError');
const createError = require('./createError');
const sendResponse = require('../res/sendResponse');

const errorHandler = (err, req, res, next) => {
  const error = !(err instanceof AppError) ? createError(err) : err;
  return sendResponse({
    res,
    payload: error,
    statusCode: error.statusCode,
  });
};

module.exports = errorHandler;
