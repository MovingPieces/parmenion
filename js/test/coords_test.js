// 'use strict';

// // Import the expect library.  This is what allows us to check our code.
// // You can check out the full documentation at http://chaijs.com/api/bdd/
// // const expect = require('chai').expect;
// import { expect } from 'chai';

// // const Coords = require('../logic/coords.mjs');
// import { Coords } from '../logic/coords.mjs';

let expect = chai.expect;

describe('Coords', function() {

  let delta = 0.0001;

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
    expect(c.x()).to.be.closeTo(0.25, delta);
    expect(c.y()).to.be.closeTo(0.43301, delta);
    done();
  });

  it('should convert from xy correctly', function(done) {
    let c = Coords.fromXY(0.15, -0.9);
    expect(c.x()).to.be.closeTo(0.15, delta);
    expect(c.y()).to.be.closeTo(-0.9, delta);
    done();
  });

  it('should calculate phi correclty', function(done) {
    let c = new Coords(Math.PI / 2, 0.13);
    expect(c.phi()).to.be.closeTo(0.0, delta);
    done();
  });

  it('should construct from PhiR correctly', function(done) {
    let c = Coords.fromPhiR(Math.PI/2 / 3, 0.42);
    expect(c.theta).to.be.closeTo(Math.PI/2 * 2/3, delta);
    expect(c.rho).to.be.closeTo(0.42, delta);
    done();
  });

  it('should simplify correctly', function(done) {
    let c = new Coords(Math.PI / 4, 0.3)
    let s = c.getSimplified();
    expect(s.theta).to.be.closeTo(Math.PI/4, delta);
    expect(s.rho).to.be.closeTo(0.3, delta);


    c.theta = Math.PI * 4 + 0.4;
    expect(c.getSimplified().theta).to.be.closeTo(0.4, delta);

    c.theta = - Math.PI * 2 + 0.4;
    expect(c.getSimplified().theta).to.be.closeTo(0.4, delta);

    c.theta = Math.PI * 4 - 0.22;
    expect(c.getSimplified().theta).to.be.closeTo(-0.22, delta);

    c.theta = - Math.PI * 8 - 0.22;
    expect(c.getSimplified().theta).to.be.closeTo(-0.22, delta);

    // edge cases
    c.theta = Math.PI;
    expect(c.getSimplified().theta).to.be.closeTo(Math.PI, delta);

    c.theta = 3 * Math.PI;
    expect(c.getSimplified().theta).to.be.closeTo(Math.PI, delta);

    c.theta = -Math.PI;
    expect(c.getSimplified().theta).to.be.closeTo(Math.PI, delta);

    c.theta = -7 * Math.PI;
    expect(c.getSimplified().theta).to.be.closeTo(Math.PI, delta);
    done();
  });
});
