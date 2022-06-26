var road, car, leftBoundary, rightBoundary, sword
var car_running, swordImage
var roadImg 
var swordG

var END = 0;
var PLAY = 1;
var gameState = PLAY;

var distance = 0





function preload() {
  car_running = loadAnimation("car1.png", "car2.png", "car3.png");
  roadImg = loadImage("Road.png")
  swordImage = loadImage("sword.png")
 
gameOverImg=loadAnimation("gameOver.png")



}

function setup() {
  createCanvas(400, 600)
  road = createSprite(200, 200)
  road.addImage("road", roadImg)
  road.scale = 1.2
  road.velocityY = 4

  car = createSprite(70, 500, 30, 30)
  car.addAnimation("running", car_running)
  car.scale = 0.09

  swordG = new Group();
 

}



function draw() {
  

  if (gameState===PLAY){
  background(0)

  

 
  if (keyDown("left_arrow")) {
    car.x = car.x - 4

  }
  if (keyDown("right_arrow")) {
    car.x = car.x + 4

  }

  edges = createEdgeSprites();
  car.collide(edges);

  distance = distance + Math.round(getFrameRate() / 50);
  road.velocityY = (6 * distance / 150);

  if (road.y > 400) {
    road.y = height / 2;
  }

  createSword();
  
  
if (swordG.isTouching(car)){
  car.destroy()
  gameState=END

swordG.destroyEach()



swordG.setVelocityYEach(0)


gameOver=createSprite(200,250) 

 gameOver.addAnimation("gameOver",gameOverImg)
  gameOver.scale=0.6
} 
drawSprites();
textSize(20);
fill(220);
text("Distance: " + distance, 10, 30);
}

}






function createSword() {
  if (World.frameCount % 320 == 1){
    sword = createSprite(Math.round(random(50, 350), 40, 10, 10));
 sword.scale = 0.09;
  sword.velocityY = 3
  sword.addImage("sword",swordImage);
sword.lifetime = 170;
  swordG.add(sword)
}
}














