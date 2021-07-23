



function preload()
{
 bgImage = loadImage("cbimg.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  bg = createSprite(displayWidth,displayHeight-430);
  bg.addImage(bgImage);
  bg.scale = 4.2;
  bg.velocityX = -5;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
if(bg.x <0){
  bg.x=bg.width/2
}
  drawSprites();
}


