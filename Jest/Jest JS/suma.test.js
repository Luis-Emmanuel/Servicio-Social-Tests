// const suma = require('./suma');
// test('sumar 1 + 2 es igual a 3', () => {
//     expect(suma(1, 2)).toBe(3);
// });

import { calculadora } from ".";
test('sum calculator', () => {
    const result = calculadora.sum(1, 2);
    expect(result).toBe(3);
});