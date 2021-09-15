const validate = require('./validate');
const { AppError, httpErrors } = require('../../lib');

const validatePostUser = (req, res, next) => {
  const rules = {
    email: {
      required: true,
      pattern: {
        regexp: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        message: 'email is invalid',
      },
    },
    password: {
      required: true,
      minLen: 8,
      pattern: {
        regexp: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        message:
          'password must contain atleast 1 number and 1 special character.',
      },
    },
    name: {
      required: true,
      pattern: {
        regexp: /^[a-zA-Z]+$/,
        message: 'name can contain letters only',
      },
    },
  };

  const errors = validate(req.body, rules);

  if (errors.length === 0) return next();
  return next(new AppError({ ...httpErrors.VALIDATION_ERROR, errors }));
};

module.exports = {
  validatePostUser,
};
