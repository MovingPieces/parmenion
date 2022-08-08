const TWO_PI = Math.PI * 2;

class Coords {
  theta;
  rho;

  constructor(theta, rho) {
    this.theta = theta;
    this.rho = rho;
  }

  copy() {
    return new Coords(this.theta, this.rho);
  }

  getSimplified() {
    let th = this.theta % TWO_PI;

    if (th <= -Math.PI) {
      th += TWO_PI;
    } else if (th > Math.PI) {
      th -= TWO_PI;
    }
    return new Coords(th, this.rho);
  }

  getClamped() {
    let rho = this.rho;
    if(rho < 0.0) {
      rho = 0.0;
    }

    if(rho > 1.0) {
      rho = 1.0;
    }

    return new Coords(this.theta, rho);
  }

  xy() {
    return new p5.Vector(
      this.rho * Math.sin(this.theta), 
      this.rho * Math.cos(this.theta)
    );
  }

  x() {
    return this.xy().x;
  }

  y() {
    return this.xy().y;
  }

  phi() {
    return - 1.0 * this.theta + Math.PI / 2;
  }

  r() {
    return this.rho;
  }

  static fromXY(x, y){
    let r = Math.sqrt(x*x + y*y);
    let theta = Math.atan2(x, y);
    return new Coords(theta, r)
  }

  static fromPhiR(phi, r){
    let theta = - 1.0 * phi + Math.PI / 2;
    return new Coords(theta, r);
  }

  static distance(a, b) {
    // TODO assume both are coords and return the line distance
  }
}

// module.exports = Coords;
