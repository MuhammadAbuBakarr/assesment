// Validator for Empty of Space Values

const postValidator = (message) => {
  return {
    validator: function (v) {
      return v && v.trim().length > 0;
    },
    message: `${message} cannot be empty`,
  };
};

module.exports = postValidator;
