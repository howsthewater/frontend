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

  return errors;
}
