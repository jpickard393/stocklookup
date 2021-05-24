import { validateAlphaOnly, validateSymbolLength } from './quoteValidation';

describe('validateAlphaOnly', () => {
    test('should return error: Please enter alphabetic characters only and valid: false', () => {
        const validateAlpha = jest.fn(validateAlphaOnly);
        const testAlpha = validateAlpha("123");
        expect(testAlpha.valid).toBe(false);
        expect(testAlpha.error).toBe("Please enter alphabetic characters only");
    });

    test('should return valid: true and no error message', () => {
        const validateAlpha = jest.fn(validateAlphaOnly);
        const testAlpha = validateAlpha("goog");
        expect(testAlpha.valid).toBe(true);
        expect(testAlpha.error).toBe("");
    });
});

describe('validateSymbolLength', () => {
    test('should return error: Please enter a symbol of 1 to 4 characters only and valid: false', () => {
        const validateLength = jest.fn(validateSymbolLength);
        const testLength = validateLength("hello");
        expect(testLength.valid).toBe(false);
        expect(testLength.error).toBe("Please enter a symbol of 1 to 4 characters only");
    });

    test('should return valid: false and Please enter a value', () => {
        const validateLength = jest.fn(validateSymbolLength);
        const testLength = validateLength("");
        expect(testLength.valid).toBe(false);
        expect(testLength.error).toBe("Please enter a value");
    });

    test('should return valid: true and no error message', () => {
        const validateLength = jest.fn(validateSymbolLength);
        const testLength = validateLength("goog");
        expect(testLength.valid).toBe(true);
        expect(testLength.error).toBe("");
    });


});


