class AppError extends Error {
  constructor(options, overrides = {}) {
    super(options.message);
    this.name = 'AppError';
    this.statusCode = options.statusCode;
    this.code = options.code;

    // validation errors object
    if (options.errors) this.errors = options.errors;

    Object.assign(this, overrides);
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
