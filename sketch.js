var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  // fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  // movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.velocityY = 5
  fixedRect.velocityY = -5
  
  bounceoff(movingRect,fixedRect)
  drawSprites();
}

function bounceoff(a,b)
{
  if (a.x -b.x < a.width/2 + b.width/2  && b.x - a.x < b.width/2 + a.width/2)
{
  a.velocityX=a.velocityX * (-1)
  b.velocityX=b.velocityX * (-1)
}


if (a.y -b.y < a.height/2 + b.height/2  && b.y - a.y < b.height/2 + a.height/2)
{
  a.velocityY=a.velocityY * (-1)
  b.velocityY=b.velocityY * (-1)

}

}






