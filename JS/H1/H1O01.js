function setup() {
  canvas = createCanvas(500,500);
  background('grey');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // groene cirkel zonder rand
  
  noStroke(0);
  fill('green');
  ellipse(250,250,400);
  
  noStroke(0);
  fill('white');
  ellipse(250,250,300);

  // witte rechthoek met rode rand
  
  stroke('green');
  fill('white');
  strokeWeight(10);
  rect(140,140,225,225);
}
