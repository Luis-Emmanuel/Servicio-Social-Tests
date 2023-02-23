// const sinon = require("sinon");
// const { assert } = require("@sinonjs/referee");

// describe("stubbed callback", function () {
//     it("should behave differently based on arguments", function () {
//         const callback = sinon.stub();
//         callback.withArgs(42).returns(1);
//         callback.withArgs(1).throws("name");
//         assert.isUndefined(callback()); // No return value, no exception
//         assert.equals(callback(42), 1); // Returns 1
//         assert.equals(callback.withArgs(42).callCount, 1); // Use withArgs in assertion
//         assert.exception(() => {
//             callback(1);
//         }); // Throws Error("name")
//     });
// });

// const sinon = require("sinon");
// const PubSub = require("pubsub-js");
// const referee = require("@sinonjs/referee");
// const assert = referee.assert;

// describe("PubSub", function () {
//     it("should call all subscribers, even if there are exceptions", function () {
//         const message = "an example message";
//         const stub = sinon.stub().throws();
//         const spy1 = sinon.spy();
//         const spy2 = sinon.spy();
//         const clock = sinon.useFakeTimers();

//         PubSub.subscribe(message, stub);
//         PubSub.subscribe(message, spy1);
//         PubSub.subscribe(message, spy2);

//         assert.exception(() => {
//             PubSub.publishSync(message, "some data");

//             // PubSubJS reschedules exceptions using setTimeout(fn,0)
//             // We have faked the clock, so just tick the clock to throw!
//             clock.tick(1);
//         });

//         assert.exception(stub);
//         assert(spy1.called);
//         assert(spy2.called);
//         assert(stub.calledBefore(spy1));

//         clock.restore();
//     });
// });

const sinon = require("sinon");
const referee = require("@sinonjs/referee");
const assert = referee.assert;
const bluebird = require("bluebird");

const myObj = {
    saveSomething: sinon.stub().usingPromise(bluebird.Promise).resolves("baz"),
};

describe("stub", function () {
    it("should resolve using specific Promise library", function () {
        myObj.saveSomething().tap(function (actual) {
            assert.equals(actual, "baz");
        });
    });
});