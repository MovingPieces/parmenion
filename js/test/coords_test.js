// 'use strict';

// // Import the expect library.  This is what allows us to check our code.
// // You can check out the full documentation at http://chaijs.com/api/bdd/
// // const expect = require('chai').expect;
// import { expect } from 'chai';

// // const Coords = require('../logic/coords.mjs');
// import { Coords } from '../logic/coords.mjs';

let expect = chai.expect;

describe('Coords', function() {

  // it() lets you comment on what an individual test is about.
  it('r == rho', function(done) {
    let c = new Coords(0.2, 0.5);
    expect(c.r()).to.equal(0.5);
    done();
  });

  it('should copy correctly', function(done) {
    let c = new Coords(0.2, 0.5);
    let c2 = c.copy();
    c.theta = -1.0;
    expect(c.theta).to.equal(-1.0);
    expect(c2.theta).to.equal(0.2);
    done();
  });
});
