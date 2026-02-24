/*
 * Title: Digital Coin Flip
 * Author: Keira Porter
 * Date:  Jan 2026
 * Simple Description: The "coin" spins and randomly lands on water or fire
 * Instructions: Press any key to flip the coin
 */

let numGen;
let toggle;
let x;

function setup() {
  createCanvas(400, 400);

  numGen = int(random(0, 100));
  toggle = true;
  x = 361;

  rectMode(CENTER);
  angleMode(DEGREES);

  describe(
    "A grey rounded square coin spins when a key is pressed and lands on water or fire"
  );
}

function draw() {
  background(100, 200, 200);

  if (x < 361) {
    spin();
  } else {
    stroke(0);
    fill(200);
    rect(width / 2, height / 2, 200, 200, 20);
  }

  // coin flip code
  if (toggle == true) {
    tails();
  } else {
    heads();
  }
}

function keyPressed() {
  x = 0;

  numGen = int(random(0, 100));

  if (numGen % 2 == 1) {
    toggle = false;
  } else {
    toggle = true;
  }

  print(numGen);
}

//heads and tails functions
function tails() {
  noStroke();
  fill(190, 70, 10);

  arc(173, 200, 70, 40, 250, 70);
  arc(225, 200, 70, 40, 110, 290);

  push();
  translate(width / 2, height / 2 + 20);
  rotate(20);
  fill(100, 50, 50);
  rect(0, 0, 80, 20);
  rotate(140);
  rect(0, 0, 80, 20);
  pop();

  triangle(180, 155, 180, 220, 220, 220);
  triangle(210, 140, 180, 220, 220, 220);
}
function heads() {
  noStroke();
  fill(10, 70, 150);
  arc(180, 200, 50, 50, 90, 320);
  arc(235, 200, 50, 50, 90, 320);
  triangle(180, 200, 235, 225, 180, 225);
  triangle(235, 200, 270, 225, 235, 225);
  triangle(190, 210, 235, 225, 230, 175);
  push();
  translate(-56, 0);
  triangle(190, 225, 235, 225, 225, 177);
  pop();
  fill(200);
  ellipse(186, 196, 25);
  ellipse(241, 196, 25);
}

//animation
function spin() {
  x = x + 12;
  stroke(0);
  fill(200);
  push();
  translate(width / 2, height / 2);
  rotate(x);
  rect(0, 0, 200, 200, 20);
  pop();
}
