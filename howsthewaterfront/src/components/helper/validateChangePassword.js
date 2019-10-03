export default function validate(values) {
  let errors = {};

  // Validation for old password
  if (!values.oldPassword) {
    //password - more than 8 characters
    errors.oldPassword = "Password is required";
  } else if (values.password.length < 8) {
    errors.oldPassword = "Password needs to be more than 8 characters";
  } else if (!/\d/.test(values.password)) {
    errors.oldPassword = "Password should contain at least one number";
  } else if (!/[a-z]/.test(values.password)) {
    errors.oldPassword = "Password should contain at least one lowercase";
  } else if (!/[A-Z]/.test(values.password)) {
    errors.oldPassword = "Password should contain at least one uppercase";
  } else if (!/\W/.test(values.password)) {
    errors.oldPassword =
      "Password should contain at least one special character";
  }

  return errors;
}
