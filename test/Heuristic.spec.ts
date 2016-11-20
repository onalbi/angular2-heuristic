/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />

import Heuristic from '../src/heuristic.lib'
import { expect } from 'chai';

describe("Heuristic", () => {

    beforeEach(() => {
        console.log('before');
    });

    afterEach(() => {
        console.log('after');
    });

    describe("100%", () => {
        it("success", () => {
            expect(Heuristic.similarity('albion', 'albion')).to.equal(100);
        });
    })
});