function setup() {
  canvas = createCanvas(450,450);
  background('darkred');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // noStroke();
  // fill('darkred');
  // triangle(0,0,0,450,450,450);
  
  strokeWeight(5);
  stroke('pink');
  fill('pink');
  beginShape();
  vertex(450,5);
  vertex(450,450);
  vertex(450,450);
  vertex(10,225);
  endShape(CLOSE);

  strokeWeight(5);
  stroke('purple');
  fill('purple');
  beginShape();
  vertex(0,5);
  vertex(0,450);
  vertex(450,225);
  vertex(450,225);
  endShape(CLOSE);
}

