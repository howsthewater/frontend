export default function validate(values) {
  let errors = {};
  //full name - more than 0 characters
  if (!values.fullname) {
    errors.fullname = "Full Name is required";
  }
  if (!values.email) {
    //email - more than 0 and should be an email  - /\$+@\$+\.\$+/.test(values.email)
    errors.email = "Email is required";
  } else if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    //password - more than 8 characters
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password needs to be more than 8 characters";
  } else if (!/\d/.test(values.password)) {
    errors.password = "Password should contain at least one number";
  } else if (!/[a-z]/.test(values.password)) {
    errors.password = "Password should contain at least one lowercase";
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = "Password should contain at least one uppercase";
  } else if (!/\W/.test(values.password)) {
    errors.password = "Password should contain at least one special character";
  }

  return errors;
}
