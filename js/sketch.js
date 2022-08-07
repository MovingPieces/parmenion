var vis;

function setup() {
  // put setup code here
  let myCanvas = createCanvas(800, 600);
  myCanvas.parent('canvasContainer');
  smooth();
  vis = new TableVisualiser(40, 20, 200)
  background(0, 100, 0);
  vis.drawField();
}

function draw() {
  // put drawing code here
  vis.lineTo(new Coords(Math.PI * 2 / 3, 3/4));
}
