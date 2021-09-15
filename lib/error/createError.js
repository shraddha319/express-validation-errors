const AppError = require('./AppError');
const httpErrors = require('./httpErrors');
const Joi = require('joi');

const getJoiErrors = (joiError) =>
  joiError.details.reduce(
    (arr, err) =>
      arr.concat([
        { message: err.message, type: err.type, key: err.context.key },
      ]),
    []
  );

const createError = (err, overrides = {}) => {
  let options;

  if (err instanceof Joi.ValidationError) {
    options = {
      ...httpErrors.VALIDATION_ERROR,
      errors: getJoiErrors(err),
    };
  } else options = httpErrors.SERVER_ERROR;

  if (err.message) options.message = err.message;

  const error = new AppError(options, overrides);
  return error;
};

module.exports = createError;
