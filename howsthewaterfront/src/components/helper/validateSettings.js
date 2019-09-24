export default function validateSettings(values) {
    let errors = {};

    if(!values.fullname) {
        errors.fullname = "Full Name is required!"
    } else if(!/[a-zA-Z]*( [a-zA-Z]*)?/.test(values.fullname)) {
        errors.fullname = "That is not a valid fullname!"
    }

    if(!values.mobileNumber) {
        errors.mobileNumber = "Mobile Number is required!"
    } else if(!/^[2-9]\d{2}-\d{3}-\d{4}$/) {
        errors.mobileNumber = "That is not a valid mobile number!"
    }

    return errors;
};
