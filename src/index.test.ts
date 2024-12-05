import { add, subtract, multiply, divide } from './index';

test('resultado de 2+3 é 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('resultado de 7-3 é 4', () => {
    expect(subtract(7, 3)).toBe(4);
});

test('resultado de 4x3 é 12', () => {
    expect(multiply(4, 3)).toBe(12);
});

test('resultado de 6/2 é 3', () => {
    expect(divide(6, 2)).toBe(3);
});

test('resultado de 1/0 é ERRO!', () => {
    expect(() => divide(1, 0)).toThrow('Divisão por zero aqui não!!!');
});
