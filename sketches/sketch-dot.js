/*
 * Title: Dot...dot...dot...
 * Author: Keira Porter
 * Date:  Feb 2026
 * Simple Description: Places randomized dots
 * Instructions: click any key to get a new formation
 */

let amount;
let size;
let shade;
let shadeTop;
let shadeBottom;
let sat;
let bright;
let posX;
let posY;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
  amount = int(random(1, 400));
  shadeBottom = random(0, 331);
  shadeTop = shadeBottom + 30;
  background(random(shadeBottom, shadeTop), 20, random(80, 99));
  describe(
    "random placement, size, and color of dots everytime a key is pressed"
  );
}

function draw() {
  for (i = 0; i < amount; i++) {
    //size and position randomization
    size = random(1, 40);
    posX = random(0, width);
    posY = random(0, height);

    //color randomization
    shade = random(shadeBottom, shadeTop);
    sat = random(0, 101);
    bright = random(0, 101);

    fill(shade, sat, bright);
    circle(posX, posY, size);

    noLoop();
  }
}

function keyPressed() {
  amount = int(random(10, 100));
  shadeBottom = random(0, 331);
  shadeTop = shadeBottom + 30;
  background(random(shadeBottom, shadeTop), 20, random(80, 99));
  redraw();
}
