
export const validateAlphaOnly = (inputVal) => {
    const regEx = /^[A-Za-z]+$/;
    const errorMsg = "Please enter alphabetic characters only";
    const isValid = regEx.test(inputVal);
    return { valid: isValid, error: !isValid ? errorMsg : "" };
}

export const validateSymbolLength = (inputVal) => {
    const errorMsg = "Please enter a symbol of 4 characters only";
    const isValid = inputVal.length === 4;
    return { valid: isValid, error: !isValid ? errorMsg : "" };
}