class TableVisualiser {
  fieldWidth;
  lastCoords;
  // upper left corner pixel position
  origin;
  // the size of the drawing field
  fieldWidth;

  // p5 vector of the middle pixel
  middlePosition;

  // length of a unity vector
  magnitude;

  constructor(xPos, yPos, fieldWidth = 100) {
    this.fieldWidth = fieldWidth;
    this.origin = new p5.Vector(xPos, yPos);
    this.lastCoords = new Coords(0.0, 0.0);
    this.fieldWidth = fieldWidth;
    this.magnitude = (this.fieldWidth - 1) / 2;
    this.middlePosition = this.origin.copy().add(this.magnitude, this.magnitude);
  }

  sandColor() {
    return color('#D8BE99');
  }

  hillColor() {
    let ret = this.sandColor();
    ret.setAlpha(140);
    return ret;
  }

  valleyColor() {
    return color('black');
  }

  coordsPosition(coords) {
    coords = coords.getClamped();
    let position = this.middlePosition.copy();
    position.add(this.magnitude * coords.x(), - this.magnitude * coords.y());
    return position
  }

  drawField() {
    fill(this.sandColor());
    strokeWeight(6);
    stroke(this.valleyColor());
    circle(this.middlePosition.x, this.middlePosition.y, this.fieldWidth);
  }

  lineTo(targetCoords) {
    //TODO two lines, stroke start and end and stuff
    targetCoords = targetCoords.getClamped();
    let startPos = this.coordsPosition(this.lastCoords);
    let targetPos = this.coordsPosition(targetCoords);

    // outer
    strokeCap(SQUARE);
    strokeWeight(4);
    stroke(this.hillColor());
    line(startPos.x, startPos.y, targetPos.x, targetPos.y)

    // inner
    strokeCap(ROUND);
    strokeWeight(1.4);
    stroke(this.valleyColor());
    line(startPos.x, startPos.y, targetPos.x, targetPos.y)

    this.lastCoords = targetCoords;
  }

  spiralTo() {
    //TODO
  }
}
