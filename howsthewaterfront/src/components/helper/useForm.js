import { useState } from "react";

const useForm = callback => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: ""
  });

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
    console.log("Sign Up clicked");
    callback();
  };

  return {
    handleChange,
    handleSubmit,
    values
  };
};

export default useForm;
