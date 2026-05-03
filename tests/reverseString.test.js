import { reverseString } from "../src/reverseString.js";

describe('reverseString', () => {

    test('should reverse a normal string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    test('should return empty string', () => {
        expect(reverseString('')).toBe('');
    });

    test('should handle single character', () => {
        expect(reverseString('a')).toBe('a');
    });

    test('should reverse string with spaces', () => {
        expect(reverseString('ab cd')).toBe('dc ba');
    });
})