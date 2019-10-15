export default function validate(values) {
  let errors = {};
  console.log("-----------IN VALIDATE FORGOT PASSWORD ---------------");

  // Validation for email address
  if (!values.email) {
    //email - more than 0 and should be an email  - /\$+@\$+\.\$+/.test(values.email)
    errors.email = "Email is required";
  } else if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  // Validation for verification code
  if (!values.verificationCode) {
    //verification code will only be numbers
    errors.verificationCode = "Verification code is required";
  } else if (!/^[0-9]/.test(values.verificationCode)) {
    errors.verificationCode = "Verification code is invalid";
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
    errors.newPassword = "Password should contain at least one lowercase";
  } else if (!/[A-Z]/.test(values.newPassword)) {
    errors.newPassword = "Password should contain at least one uppercase";
  } else if (!/\W/.test(values.newPassword)) {
    errors.newPassword =
      "Password should contain at least one special character";
  } else if (values.newPassword === values.oldPassword) {
    errors.newPassword = "Old Password and New Password should be different";
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
  } else if (values.newPassword !== values.confirmPassword) {
    errors.confirmPassword =
      "New Password and confirm password must be the same";
  }

  return errors;
}
