
const defaultError = "Please enter a value";

export const validateAlphaOnly = (inputVal) => {
    if (!inputVal.trim()) return { valid: false, error: defaultError };
    const regEx = /^[A-Za-z]+$/;
    const isValid = regEx.test(inputVal);
    return { valid: isValid, error: !isValid ? "Please enter alphabetic characters only" : "" };
}

export const validateSymbolLength = (inputVal) => {
    if (!inputVal.trim()) return { valid: false, error: defaultError };
    const isValid = inputVal.length > 0 && inputVal.length < 5;
    return { valid: isValid, error: !isValid ? "Please enter a symbol of 1 to 4 characters only" : "" };
}