const errors = (req, res, next) => {
  const errors = req.validationErrors();

  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};

exports.registerValidator = (req, res, next) => {
  const nameRegex = /^[a-zA-Z]{1,30}$/;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,20}$/;
  const phoneRegex =
    /^(?:(?:\+|0{0,2})44\s?|0)(?:\d{2}\s?\d{4}\s?\d{4}|\d{3}\s?\d{3}\s?\d{2}|\d{4}\s?\d{6})$/;

  req.check("firstName", "First Name is required!").notEmpty();
  req.check("firstName", "First Name incorrect format").matches(nameRegex);

  req.check("surname", "Surname is required!").notEmpty();
  req.check("surname", "Surname incorrect format").matches(nameRegex);

  req.check("phoneNumber", "Phone Number is required!").notEmpty();
  req.check("phoneNumber", "Phone Number incorrect format").matches(phoneRegex);

  req.check("emailAddress", "Email is required").notEmpty();
  req.check("emailAddress", "Email incorrect format").matches(emailRegex);

  req.check("password", "Password is required").notEmpty();
  req.check("password", "Password incorrect format").matches(passwordRegex);

  errors(req, res, next);
};
