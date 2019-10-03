export default function validate(values) {
  let errors = {};
  console.log("-----------IN VALIDATE CHANGE PASSWORD ---------------");

  // Validation for old password
  if (!values.oldPassword) {
    //password - more than 8 characters
    errors.oldPassword = "Old Password is required";
  } else if (values.oldPassword.length < 8) {
    errors.oldPassword = "Password needs to be more than 8 characters";
  } else if (!/\d/.test(values.oldPassword)) {
    errors.oldPassword = "Password should contain at least one number";
  } else if (!/[a-z]/.test(values.oldPassword)) {
    errors.oldPassword = "Password should contain at least one lowercase";
  } else if (!/[A-Z]/.test(values.oldPassword)) {
    errors.oldPassword = "Password should contain at least one uppercase";
  } else if (!/\W/.test(values.oldPassword)) {
    errors.oldPassword =
      "Password should contain at least one special character";
  }

  // Validation for new password
  if (!values.newPassword) {
    //password - more than 8 characters
    errors.newPassword = "New Password is required";
  } else if (values.newPassword.length < 8) {
    errors.newPassword = "Password needs to be more than 8 characters";
  } else if (!/\d/.test(values.newPassword)) {
    errors.newPassword = "Password should contain at least one number";
  } else if (!/[a-z]/.test(values.newPassword)) {
    errors.oldPassword = "Password should contain at least one lowercase";
  } else if (!/[A-Z]/.test(values.newPassword)) {
    errors.oldPassword = "Password should contain at least one uppercase";
  } else if (!/\W/.test(values.newPassword)) {
    errors.newPassword =
      "Password should contain at least one special character";
  }

  // Validation for confirm password
  if (!values.confirmPassword) {
    //password - more than 8 characters
    errors.confirmPassword = "Confirm Password is required";
  } else if (values.newPassword.length < 8) {
    errors.confirmPassword = "Password needs to be more than 8 characters";
  } else if (!/\d/.test(values.confirmPassword)) {
    errors.confirmPassword = "Password should contain at least one number";
  } else if (!/[a-z]/.test(values.confirmPassword)) {
    errors.confirmPassword = "Password should contain at least one lowercase";
  } else if (!/[A-Z]/.test(values.confirmPassword)) {
    errors.confirmPassword = "Password should contain at least one uppercase";
  } else if (!/\W/.test(values.confirmPassword)) {
    errors.confirmPassword =
      "Password should contain at least one special character";
  } else if (values.newPassword != values.confirmPassword) {
    errors.confirmPassword =
      "New Password and confirm password must be the same";
  }

  return errors;
}
