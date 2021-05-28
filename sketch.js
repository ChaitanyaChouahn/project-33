var bg,bgimgd;
var snow,snowImg;

function preload() {
  bg = loadImage("snow3.jpg");
snowImg = loadImage("snow4.webp");
}

function setup() {
  createCanvas(1000,600);
  snow = createSprite(500, 300, 50, 50);
  snow.addImage(snowImg);
  snow.scale = 0.2;

  snow = createSprite(50, 100, 50, 50);
  snow.addImage(snowImg);
  snow.scale = 0.2;

  snow = createSprite(150, 500, 50, 50);
  snow.addImage(snowImg);
  snow.scale = 0.2;

  snow = createSprite(900, 500, 50, 50);
  snow.addImage(snowImg);
  snow.scale = 0.2;

  snow = createSprite(800, 200, 50, 50);
  snow.addImage(snowImg);
  snow.scale = 0.2;

  snow = createSprite(550, 50, 50, 50);
  snow.addImage(snowImg);
  snow.scale = 0.2;

  snow = createSprite(900, 500, 50, 50);
  snow.addImage(snowImg);
  snow.scale = 0.2;

  snow = createSprite(750, 80, 50, 50);
  snow.addImage(snowImg);
  snow.scale = 0.2;

  snow = createSprite(300, 200, 50, 50);
  snow.addImage(snowImg);
  snow.scale = 0.2;
  
  snow = createSprite(550, 550, 50, 50);
  snow.addImage(snowImg);
  snow.scale = 0.2;
}

function draw() {
  background(bg);  
  drawSprites();

}
