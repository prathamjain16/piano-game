var form;
var bg;
var pianoTile;

function preload() {
  bg = loadImage("assets/bg.jpg")
  pianoTile = loadImage("assets/pianoTile.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  form = new Form(width-90,height-20);
}

function draw() {
  background(bg);
  form.display();
  drawSprites();
}