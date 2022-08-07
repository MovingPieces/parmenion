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

  simplify() {
    //TODO
  }


  xy() {
    return new p5.Vector(this.rho * Math.sin(this.theta), this.rho * Math.cos(this.theta));
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

  static FromXY(x, y){
    // TODO
    return new Coords(0, 0)
  }

  static FromPhiR(phi, r){
    // TODO
    return new Coords(0, 0)
  }

  static Distance(a, b) {
    // TODO assume both are coords and return the line distance
  }
}

// module.exports = Coords;
