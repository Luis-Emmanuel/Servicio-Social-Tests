expect.extend({
    toBeEqualTwo(received) {
        if (received !== 2) { // si el valor recibido no es 2
            return {
                pass: false, // pasamos un falso
                message: () => `Expected ${received} to be number 2`
                // mensaje de error personalizado
            };
        }
        return {
            pass: true // simplemente pasamos true en caso de cumplirse el test
        };
    }
});

test("number 2", () => {
    expect(2).toBeEqualTwo(); // llamaremos a nuestro matcher personalizado como toBeEqualTwo()
});
