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


  x() {
    //TODO
  }

  y() {
    //TODO
  }

  phi() {
    //TODO
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
