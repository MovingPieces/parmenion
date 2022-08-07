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

  it('should convert to xy correctly', function(done) {
    let c = new Coords(Math.PI / 2 / 3, 0.5);
    expect(c.x()).to.be.closeTo(0.25, 0.0001);
    expect(c.y()).to.be.closeTo(0.43301, 0.0001);
    done();
  });

  it('should calculate phi correclty', function(done) {
  // TEST_ASSERT_TRUE(PhirVector(0, 0.13) == gu::thrToPhir(ThrVector(PI / 2, 0.13)));
    let c = new Coords(Math.PI / 2, 0.13);
    expect(c.phi()).to.be.closeTo(0.0, 0.00001);
    done();
  });
});
