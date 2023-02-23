// TEST RAPIDO DE PRUEBA PARA MOCHA
// const assert = require("assert");
// describe("just a silly test", function () {
//     it("checks a sum", function () {
//         assert.equal(2 + 2, 4);
//     });
// });

// TEST QUE FALLARA INTENCIONALMENTE
// const assert = require("assert");
// const greeter = require("../greeter.js");
// describe("testing the greeter", function () {
//     it("checks the greet function", function () {
//         assert.equal(greeter.greet('Alice'), 'Hello, Alice! Today is Friday, January 15, 2021.');
//     });
// });

// TEST ANTERIOR MODIFICADO PARA QUE PASE CON EXITO
const assert = require("assert");
const greeter = require("../greeter.js");
const sinon = require("sinon");
describe("testing the greeter", function () {
    it("checks the greet function", function () {
        var clock = sinon.useFakeTimers(new Date(2021, 0, 15));
        assert.equal(greeter.greet('Alice'), 'Hello, Alice! Today is Friday, January 15, 2021');
        clock.restore();
    });
});
