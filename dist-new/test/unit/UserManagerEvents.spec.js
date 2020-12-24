// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
import { UserManagerEvents } from '../../src/UserManagerEvents';
import 'chai/register-should';
describe("UserManagerEvents", function () {
    let subject;
    beforeEach(function () {
        subject = new UserManagerEvents();
    });
    describe("silent renew error", function () {
        it("should allow callback", function () {
            let wasCalled = false;
            var cb = function () {
                wasCalled = true;
            };
            subject.addSilentRenewError(cb);
            subject._raiseSilentRenewError(new Error("boom"));
            wasCalled.should.be.true;
        });
        it("should allow unregistering callback", function () {
            let wasCalled = false;
            var cb = function () {
                wasCalled = true;
            };
            subject.addSilentRenewError(cb);
            subject.removeSilentRenewError(cb);
            subject._raiseSilentRenewError(new Error("boom"));
            wasCalled.should.be.false;
        });
        it("should pass error to callback", function () {
            var cb = function (e) {
                e.message.should.equal("boom");
            };
            subject.addSilentRenewError(cb);
            subject._raiseSilentRenewError(new Error("boom"));
        });
    });
});
//# sourceMappingURL=UserManagerEvents.spec.js.map