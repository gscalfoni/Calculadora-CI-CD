import { add, subtract, multiply, divide } from './index.ts';

test('add works correctly', () => {
    expect(add(2, 3)).toBe(5);
});

test('subtract works correctly', () => {
    expect(subtract(7, 3)).toBe(4);
});

test('multiply works correctly', () => {
    expect(multiply(4, 3)).toBe(12);
});

test('divide works correctly', () => {
    expect(divide(6, 2)).toBe(3);
});

test('divide throws error for division by zero', () => {
    expect(() => divide(1, 0)).toThrow('Cannot divide by zero');
});
