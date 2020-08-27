var fixedRect , movingRect,gameobject1,gameobject2 ; 



function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 80, 50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = 5;

  movingRect = createSprite(200,300,50,80);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -5;

  gameobject1 = createSprite(600,200,50,80);
  gameobject1.shapeColor = "green";
  gameobject1.velocityY = 5;

  gameobject2 = createSprite(600,300,50,80);
  gameobject2.shapeColor = "green";
  gameobject2.velocityY = -5;

}

function draw() {
  background(0);  

 bounceoff(fixedRect,movingRect);
 bounceoff(gameobject1,gameobject2);


  drawSprites();
}
 
