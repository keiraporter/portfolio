/*
 * Title: Project One: Penguin Generator
 * Author: Keira Porter
 * Date: Feb 2026
 * Simple Description: This code generates random heights and color penguins that decrease in size the farther they are up the mountain
 * Instructions: click anywhere on the screen to place a penguin, click a key to get rid of the penguins and reset to the background
 */

let x;
let y;
let blackCirc;
let innerCirc;
let circColor;
let blackCircHeight;
let innerCircHeight;
let headY;
let headWidth;
let headHeight;
let distPoint;
let footDown;
let footOut;

function setup() {
  createCanvas(600, 600);
  background(200, 220, 255);

  angleMode(DEGREES);

  noStroke();
  fill(240);
  ellipse(555, 300, 650, 550);
  fill(245);
  arc(100, height, 1050, 950, 180, 0);

  circColor = 255;
  distPoint = 450;
  describe(
    "Penguins of random height and color are place where the mouse is clicked. There is a snowy mountain background, and the farther the penguins are placed up the mountain, the smaller they are. When a key is pressed the penguins disappear and the background is reset."
  );
}

function draw() {}

function setPosition() {
  x = mouseX;
  y = mouseY;
}

function setSize() {
  blackCirc = dist(x, y, distPoint, 0) / 4;
  innerCirc = blackCirc * 0.6;

  blackCircHeight = blackCirc + random(-0.7, 1.5) * blackCirc;
  innerCircHeight = blackCircHeight * 0.6;

  headY = y - blackCircHeight / 2;
  headWidth = blackCirc * 0.7;
  headHeight = blackCircHeight * 0.7;

  footDown = y + blackCircHeight / 3;
  footOut = blackCirc / 4;
}

function setColor() {
  circColor = color(random(50, 256), random(50, 256), random(50, 256));
}

function penguin() {
  fill("orange");
  triangle(
    x - footOut / 2,
    footDown,
    x - footOut,
    footDown + footDown / 12,
    x - footOut * 2,
    footDown + footDown / 25
  );
  triangle(
    x + footOut / 2,
    footDown,
    x + footOut,
    footDown + footDown / 12,
    x + footOut * 2,
    footDown + footDown / 25
  );
  fill(0);
  ellipse(x, y, blackCirc, blackCircHeight);
  ellipse(x, headY, headWidth, headHeight);
  fill(circColor);
  ellipse(x, y + blackCircHeight / 10, innerCirc, innerCircHeight);
  fill("orange");
  triangle(
    x - headWidth / 6,
    headY,
    x + headWidth / 6,
    headY,
    x,
    headY + headHeight / 4
  );
}

function mousePressed() {
  if (mouseX < 300) {
    distPoint = 150;
  } else {
    distPoint = 500;
  }

  setPosition();
  setSize();
  setColor();
  penguin();
}

function keyPressed() {
  background(200, 220, 255);
  noStroke();
  fill(240);
  ellipse(555, 300, 650, 550);
  fill(245);
  arc(100, height, 1050, 950, 180, 0);
}
