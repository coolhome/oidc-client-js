
// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

import { Event } from '../../src/Event';

import { assert } from 'chai';

describe("Event", function () {

    let subject;

    beforeEach(function () {
        subject = new Event("test name");
    });

    describe("addHandler", function () {

        it("should allow callback to be invoked", function () {
            let wasCalled = false;
            var cb = function () {
                wasCalled = true;
            }
            subject.addHandler(cb);

            subject.raise();

            wasCalled.should.be.true;
        });

        it("should allow multiple callbacks", function () {
            var count = 0;
            var cb = function () {
                count++;
            };
            subject.addHandler(cb);
            subject.addHandler(cb);
            subject.addHandler(cb);
            subject.addHandler(cb);

            subject.raise();

            count.should.equal(4);
        });

    });

    describe("removeHandler", function () {

        it("should remove callback from being invoked", function () {
            let wasCalled = false;
            var cb = function () {
                wasCalled = true;
            };
            wasCalled = false;

            subject.addHandler(cb);
            subject.removeHandler(cb);
            subject.raise();

            wasCalled.should.be.false;
        });

        it("should remove individual callback", function () {
            var count = 0;
            var cb1 = function () {
                count++;
            };
            let wasCalled = false;
            var cb2 = function () {
                wasCalled = true;
            };

            subject.addHandler(cb1);
            subject.addHandler(cb2);
            subject.addHandler(cb1);
            subject.removeHandler(cb1);
            subject.removeHandler(cb1);

            subject.raise();

            count.should.equal(0);
            wasCalled.should.be.true;
        });

    });

    describe("raise", function () {

        it("should pass params", function () {
            var cb = function (a,b,c) {
                a.should.equal(1);
                b.should.equal(2);
                c.should.equal(3);
            };
            subject.addHandler(cb);

            subject.raise(1,2,3);
        });

        it("should allow passing no params", function () {
            var cb = function (a,b,c) {
                assert.isUndefined(a);
                assert.isUndefined(b);
                assert.isUndefined(c);
            };
            subject.addHandler(cb);

            subject.raise();
        });

    });

});
