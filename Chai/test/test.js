const assert = require('chai').assert
    , foo = 'bar'
    , beverages = { tea: ['chai', 'matcha', 'oolong'] };

describe('Primer test de la documentacion', () => {
    it('assert primer ejemplo', () => {
        assert.typeOf(foo, 'string'); // without optional message
        assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
        assert.equal(foo, 'bar', 'foo equal `bar`');
        assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
        assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
        assert.equal(foo, 'bar', 'no es igual');
    });
})

describe('Tests de la documentacion', () => {
    it('Primeros ejemplos', () => {
        assert('foo' !== 'bar', 'foo is not bar');
        assert(Array.isArray([]), 'empty arrays are arrays');
    });

    it('Lanzado Fails', () => {
        // descomentar de una en una para cada test

        // assert.fail();
        // assert.fail("custom error message");
        // assert.fail(1, 2);
        // assert.fail(1, 2, "custom error message");
        // assert.fail(1, 2, "custom error message", ">");
        // assert.fail(1, 2, undefined, ">");
    });

    it('Revisando valores', () => {
        assert.isAtMost(3, 6, '3 is less than or equal to 6');
        assert.isAtMost(4, 4, '4 is less than or equal to 4');
    });
})
