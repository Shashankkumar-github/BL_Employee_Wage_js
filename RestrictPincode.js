const validatePinCode = (pinCode) => {
    const pinRegex = /^[1-9][0-9]{5}$/;
    return pinRegex.test(pinCode);
};

// Test Cases
console.log(validatePinCode("110001"));  
console.log(validatePinCode("560102"));  
console.log(validatePinCode("A400088")); 
console.log(validatePinCode("$400088"));  
console.log(validatePinCode("040088")); 
console.log(validatePinCode("12345"));  
console.log(validatePinCode("1234567")); 
console.log(validatePinCode("12A456"));  