const Joi = require('joi');

const postUser = Joi.object().keys({
  email: Joi.string().required().email(),
  password: Joi.string()
    .required()
    .min(8)
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
    .messages({
      'string.pattern.base':
        'password must contain atleast 1 number and 1 special character',
    }),
  name: Joi.string()
    .required()
    .regex(/[a-zA-Z]/)
    .messages({
      'string.pattern.base': 'name can contain letters only',
    }),
});

module.exports = { postUser };
