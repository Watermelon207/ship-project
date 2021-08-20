var shipSprite, ocean;
var shipRunning, oceanIMG;

function preload(){
  shipRunning=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  oceanIMG=loadAnimation("sea.png");

}

function setup(){
  createCanvas(800,800);

  ocean=createSprite(400,400,10,1000)
  ocean.addAnimation("oceanIMG",oceanIMG);
  ocean.scale=0.5
  shipSprite= createSprite(400,600,10,10);
  shipSprite.addAnimation("shipRunning",shipRunning);
  shipSprite.scale = 0.5;
  
  edges = createEdgeSprites();
}

function draw() {
  background("blue");
  
  ocean.velocityX=-10
  
  console.log(shipSprite)

if(ocean.x<0)
  {
    ocean.x=ocean.width/8;
  }
  
  drawSprites();



}