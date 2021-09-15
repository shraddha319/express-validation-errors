const express = require('express');
const { json } = require('body-parser');
const { validatePostUser } = require('./validations/custom');
const joi = require('./validations/joi');
const { catchAsync, errorHandler, httpErrors } = require('./lib');

const app = express();
app.use(json());

app.get('/', (req, res) => {
  res.send('Hello Express app!');
});

// For custom validation use middleware: validatePostUser

app.post(
  '/users',
  joi.validate(joi.postUser),
  catchAsync(async (req, res, next) => {
    // const user = await User.create(req.body);
    return sendResponse({
      res,
      statusCode: 201,
      payload: { user: req.body },
    });
  })
);

app.all('*', (req, res, next) => {
  return next(
    new AppError({
      ...httpErrors.RESOURCE_NOT_FOUND,
      message: `${req.originalUrl} not found`,
    })
  );
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log('server started');
});
