import { capitalize } from "../src/capitalize.js";

describe('capitalize', () => {

    test('should capitalize first letter', () => {
        expect(capitalize('hello')).toBe('Hello');
    });

    test('should handle single character', () => {
        expect(capitalize('a')).toBe('A');
    });

    test('should not change already capitalized string', () => {
        expect(capitalize('Hello')).toBe('Hello');
    });

    test('should return empty string', () => {
        expect(capitalize('')).toBe('');
    });

});