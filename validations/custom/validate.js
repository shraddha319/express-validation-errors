const validate = (input, rules) => {
  const errors = [];
  Object.entries(rules).forEach(([key, rules]) => {
    const value = input[key];

    if (rules.required && (!value || value === '')) {
      errors.push({
        key,
        message: `${key} is a required field`,
        type: 'required',
      });
    } else if (rules.minLen && value?.length < rules.minLen) {
      errors.push({
        key,
        message: `${key} must be atleast ${rules.minLen} characters long.`,
        type: 'min',
      });
    } else if (rules.pattern && !rules.pattern?.regexp.test(value)) {
      errors.push({
        key,
        type: 'pattern',
        message: rules.pattern.message,
      });
    }
  });
  return errors;
};

module.exports = validate;
