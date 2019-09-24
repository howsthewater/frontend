import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
    mobile: "",
    regionInput: "",
    beachInput: "",
    surferInput: "",
    imageInput: null
  });

  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    password: "",
    mobile: "",
    regionInput: "",
    beachInput: "",
    surferInput: "",
    imageInput: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = event => {
    event.persist();
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("USEFORM:: HANDLE SUBMIT :: SUBMIT CLICKED");
    // validate form fields
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    // call callback if there are no errors
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;
