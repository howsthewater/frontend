export default function validate(values) {
  let errors = {};
  //full name - more than 0 characters
  if (!values.fullname) {
    errors.fullname = "Full Name is required";
  }
  if (values.mobile) {
    if (
      !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(values.mobile)
    ) {
      errors.mobile = "Mobile number format is invalid";
    }
  }

  return errors;
}
