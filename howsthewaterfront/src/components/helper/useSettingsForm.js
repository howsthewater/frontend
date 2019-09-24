import { useState, useEffect } from 'react';


const useSettingsForm = (callback, validate) => {
    const [settingsValues, setSettingsValues] = useState({
        fullname: "",
        mobileNumber: ""
    });

    const [errors, setErrors] = useState({
        fullname: "",
        mobileNumber: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    const handleSubmit = e => {
        if(e) {
            e.preventDefault();
        }
        setErrors(validate(settingsValues));
        setIsSubmitting(true);
    };

    const handleChange = e => {
        e.persist();
        const { name, value } = e.target;
        setSettingsValues(values => ({ ...values, [name]: value }));
    };

    return {
        handleChange,
        handleSubmit,
        settingsValues,
        errors,
    }
};

export default useSettingsForm;
