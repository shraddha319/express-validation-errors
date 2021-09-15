const Joi = require('joi');

const validate = (schema) => async (req, res, next) => {
  const { error } = Joi.compile(schema)
    .prefs({ abortEarly: false })
    .validate(req.body);

  if (error) return next(error);
  return next();
};

module.exports = validate;
