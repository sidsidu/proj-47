var backgroundImg,bg
var zombies,zombiesImg,zombiesImg2,zombiesGroup
var player,playerImg,playerImg2
var arrow,arrowImg,arrowGroup


function preload(){
 playerImg = loadImage("assets/shooter1.png");
 playerImg2 = loadImage("assets/shooter2.png");
 backgroundImg = loadImage("assets/bg.jpeg")
 zombiesImg = loadImage("assets/zombie1.png");
 zombiesImg2 = loadImage("assets/zombie2.png");
 arrowImg  = loadImage("assets/arrow.png")

}
function setup(){
  canvas = createCanvas(windowWidth-20,windowHeight-20);
  //database = firebase.database();
  bg = createSprite(windowHeight/2 - 20,windowWidth/2-20);
  bg.addImage("bg",backgroundImg);
  bg.scale = 2

  player = createSprite(200,200,20,20);
  player.addImage("player",playerImg)
  player.scale = 0.5

  arrowGroup  = new Group();
  zombiesGroup = new Group();
  
}
function draw(){
  drawSprites();
  keyPressed();
  spawnZombies();
  if(arrowGroup.isTouching(zombiesGroup)){
    zombiesGroup.destroyEach();
  }
 
}

function keyPressed(){
  if(keyDown(LEFT_ARROW)){
    player.x = player.x -20
  }
  if(keyDown(RIGHT_ARROW)){
    player.x = player.x +20
  }
  if(keyDown(UP_ARROW)){
    player.y = player.y -20
  }
  if(keyDown(DOWN_ARROW)){
    player.y = player.y +20
  }
  if(keyWentDown("space")){
    player.addImage("player",playerImg2);
    arrow = createSprite(player.x+80,player.y-30,50,20);
    arrow.addImage("arrow",arrowImg)
    arrow.scale=0.1
    arrow.velocityX = 10
    arrowGroup.add(arrow)
    
  }

  if(keyWentUp("space")){
    player.addImage("player",playerImg)
  }
  
}

function spawnZombies(){
  if(frameCount%60 === 0 ){
    zombies = createSprite(random(100,2000),random(20,500),20,20)
    zombies.addImage("zombie",zombiesImg);
    zombies.scale = 0.5
    zombiesGroup.add(zombies)
  }
}