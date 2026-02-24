let colorOne;
let colorTwo;


function setup() {
  createCanvas(400, 400);
  colorOne = color(random(0, 256), random(0, 256), random(0, 256));
  colorTwo = color(random(0, 256), random(0, 256), random(0, 256));
  // colorOne = color(map(mouseX, 0,400, 0, 360), 100, 100);
  // colorTwo = color(map(mouseY, 0,400, 0, 360), 100, 100);
  noStroke()
  //colorMode(HSB)
}

function draw() {
  background(220);
  
  //setColor()

  for (i = 0; i < 8; i++) { 
    for (j = 0; j < 8; j++) {
      if ((i % 2 == 0 && j % 2 == 0) || (i % 2 == 1 && j % 2 == 1)) {
        fill(colorOne);
      } else {
        fill(colorTwo);
      }
      ellipse(25 + i * 50, 25 + j * 50, 50);
    }
  }
}

function setColor() {
  colorOne = color(random(0, 256), random(0, 256), random(0, 256));
  colorTwo = color(random(0, 256), random(0, 256), random(0, 256));
  // colorOne = color(map(mouseX, 0,400, 0, 360), 100, 100);
  // colorTwo = color(map(mouseX, 0,400, 0, 360), 100, 100);
}

function keyPressed(){
  setColor()
}