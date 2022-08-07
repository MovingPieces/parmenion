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

  coordsPosition(coords) {
    coords = coords.getClamped();
    let position = this.middlePosition.copy();
    position.add(this.magnitude * coords.x(), - this.magnitude * coords.y());
    return position
  }

  drawField() {
    fill('yellow');
    strokeWeight(4);
    stroke('black');
    circle(this.middlePosition.x, this.middlePosition.y, this.fieldWidth);
  }

  lineTo(targetCoords) {
    //TODO two lines, stroke start and end and stuff
    targetCoords = targetCoords.getClamped();
    let startPos = this.coordsPosition(this.lastCoords);
    let targetPos = this.coordsPosition(targetCoords);

    strokeWeight(2);
    stroke('blue');
    line(startPos.x, startPos.y, targetPos.x, targetPos.y)
    this.lastCoords = targetCoords;
  }

  spiralTo() {
    //TODO
  }
}
