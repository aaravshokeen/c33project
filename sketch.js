var bg,bgImage;
var snow,snowImage;

function preload(){
  bgImage=loadImage("snow2.jpg");
  snowImage=loadImage("snow4.png");
}

function setup() {
  createCanvas(800,400);
  bg= createSprite(400, 200, 800, 400);
  bg.addImage(bgImage);
}

function draw() {
  background(0);  
  createSnow();
  drawSprites();
}
  function createSnow(){
    if(frameCount%20===0){
      snow=createSprite(400,0,20,20)
      snow.x=random(0,800);
      snow.velocityY=4
      snow.addImage(snowImage);
      snow.scale=0.2
    }
  }