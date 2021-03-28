
export const validateAlphaOnly = (inputVal) => {
    if (inputVal) {
        const regEx = /^[A-Za-z]+$/;
        const errorMsg = "Please enter alphabetic characters only";
        const isValid = regEx.test(inputVal);
        return { valid: isValid, error: !isValid ? errorMsg : "" };
    }
}

export const validateSymbolLength = (inputVal) => {
    if (inputVal) {
        const errorMsg = "Please enter a symbol of 1 to 4 characters only";
        const isValid = inputVal.length > 0 && inputVal.length < 5;
        return { valid: isValid, error: !isValid ? errorMsg : "" };
    }
}