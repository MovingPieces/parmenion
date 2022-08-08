var vis;
var angleSlider;
var angleProgressSlider;
var angleToRadiusSlider;

function setup() {
  noLoop()
  // put setup code here
  let myCanvas = createCanvas(800, 600);
  myCanvas.parent('canvasContainer');
  smooth();
  vis = new TableVisualiser(40, 20, 400)
  background(200, 200, 200);
  vis.drawField();

  angleSlider = createSlider(0.1, Math.PI * 2, 0.1, 0);
  angleSlider.style('width', '200px');
  controlContainer('controlsContainer', 'initialStepAngle', angleSlider)

  let angleProgressRange = 0.000001;
  angleProgressSlider = createSlider(-angleProgressRange, angleProgressRange, 0.0, 0);
  angleProgressSlider.style('width', '200px');
  controlContainer('controlsContainer', 'angleProgress', angleProgressSlider)

  iterationToRadiusSlider = createSlider(-0.0005, -0.0001, -0.02, 0);
  iterationToRadiusSlider.style('width', '200px');
  controlContainer('controlsContainer', 'iterationToRadius', iterationToRadiusSlider)

  let button = createButton('draw!');
  button.parent('controlsContainer');
  button.mousePressed(drawPattern);
}

function draw() {
  // vis.lineTo(new Coords(random(0.0, 2 * Math.PI), random(0.0, 1.0)));
}

function drawPattern() {
  let iteration = 0;
  vis.drawField();
  let coords = new Coords(0.0, 1.0);
  let thetaIncrement = angleProgressSlider.value();
  vis.lineTo(coords);

  let angleIncrement

  while(coords.rho > 0.001) {
    coords.theta += angleSlider.value() + thetaIncrement;
    coords.rho = 1.0 + iteration * iterationToRadiusSlider.value();
    vis.lineTo(coords);
    thetaIncrement += angleProgressSlider.value();
    // console.log(coords);
    iteration++;
  }
}
