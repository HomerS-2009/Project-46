var alien;
var health;
var parts;
var scavenger;
var ship;
var gun;
var mars;
var robot;
var king;
var sneaky;
var astronaut;
var guard;
var alienImg;
var partsImg;
var scavengerImg;
var shipImg;
var gunImg;
var marsImg;
var robotImg;
var kingImg;
var sneakyImg;
var astronautImg;
var guardImg;
var alienGroup;
var kingGroup;
var guardGroup;
var scavengerGroup;
var sneakyGroup;

function preload(){
    alienImg = loadImage("sl/alien.png");
    partsImg = loadImage("sl/parts.png");
    scavengerImg = loadImage("sl/scavenger.png");
    shipImg = loadImage("sl/ship.png");
    gunImg = loadImage("sl/gun.png");
    marsImg = loadImage("sl/mars.jpg");
    robotImg = loadImage("sl/robot.png");
    kingImg = loadImage("sl/king.png");
    sneakyImg = loadImage("sl/sneaky.png");
    astronautImg = loadImage("sl/astronaut.png");
    guardImg = loadImage("sl/guard.png");
}

function setup() {
    createCanvas(windowWidth,windowHeight);

    mars = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
    mars.addImage(marsImg)
    mars.scale = 3.3

    ship = createSprite(300,600)
    ship.addImage(shipImg)
    ship.scale = 0.75

    astronaut = createSprite(500,750)
    astronaut.addImage(astronautImg)
    astronaut.scale = 0.6

    parts = createSprite(500,750)
    parts.addImage(partsImg)
    parts.scale = 0.2
    parts.depth = astronaut.depth

    robot = createSprite(150,750)
    robot.addImage(robotImg)
    robot.scale = 0.5
    robot.depth = astronaut.depth

    gun = createSprite(astronaut.x + 165,astronaut.y - 70)
    gun.addImage(gunImg)
    gun.scale = 0.3

   alienGroup = new Group();
   kingGroup = new Group();
   scavengerGroup = new Group();
   sneakyGroup = new Group();
   guardGroup = new Group();
}

function draw() {
  background(0); 
  
  parts.visible = false

  if(keyDown(UP_ARROW)){
    astronaut.y = astronaut.y - 12
    gun.y = gun.y - 12
  }

  if(keyDown(DOWN_ARROW)){
    astronaut.y = astronaut.y + 8
    gun.y = gun.y + 8
  }

  if(keyDown(LEFT_ARROW)){
    astronaut.x = astronaut.x - 7
    gun.x = gun.x - 7
  }
  if(keyDown(RIGHT_ARROW)){
    astronaut.x = astronaut.x + 7
    gun.x = gun.x + 7
  }

  if(alienGroup.isTouching(gun)){
    for(var i=0;i<alienGroup.length;i++){     
     if(alienGroup[i].isTouching(gun)){
          alienGroup[i].destroy()
          } 
    }
   }

   if(guardGroup.isTouching(gun)){
    for(var i=0;i<guardGroup.length;i++){     
     if(guardGroup[i].isTouching(gun)){
          guardGroup[i].destroy()
          } 
    }
   }

   if(scavengerGroup.isTouching(gun)){
    for(var i=0;i<scavengerGroup.length;i++){     
     if(scavengerGroup[i].isTouching(gun)){
          scavengerGroup[i].destroy()
          } 
    }
   }

   if(kingGroup.isTouching(gun)){
    for(var i=0;i<kingGroup.length;i++){     
     if(kingGroup[i].isTouching(gun)){
          kingGroup[i].destroy()
          } 
    }
   }

   if(sneakyGroup.isTouching(gun)){
    for(var i=0;i<sneakyGroup.length;i++){     
     if(sneakyGroup[i].isTouching(gun)){
          sneakyGroup[i].destroy()
          } 
    }
   }

  alienSpawn();
  guardSpawn();
  kingSpawn();
  sneakySpawn();
  scavengerSpawn();

  drawSprites();
}

 function alienSpawn(){
 if(frameCount%150===0){
    alien = createSprite(random(1600,1650),random(450,750))
    alien.addImage(alienImg)
    alien.scale = 0.3
    alien.velocityX = - 1
    alien.depth = astronaut.depth
   
    alien.lifetime = 1000
    alienGroup.add(alien)
  }
}

 function kingSpawn(){
  if(frameCount%600===0){
     king = createSprite(random(1550,1800),random(450,750))
     king.addImage(kingImg)
     king.scale = 0.3
     king.velocityX = - 1
     king.depth = astronaut.depth
    
     king.lifetime = 1000
     kingGroup.add(king)
   }
}

 function guardSpawn(){
  if(frameCount%500===0){
     guard = createSprite(random(1700,1800),random(450,750))
     guard.addImage(guardImg)
     guard.scale = 0.35
     guard.velocityX = - 1
     guard.depth = astronaut.depth
    
     guard.lifetime = 1000
     guardGroup.add(guard)
   }
}

 function scavengerSpawn(){
  if(frameCount%1000===0){
     scavenger = createSprite(random(-1000,-900),random(600,750))
     scavenger.addImage(scavengerImg)
     scavenger.scale = 0.45
     scavenger.velocityX = 1
     scavenger.depth = astronaut.depth
    
     scavenger.lifetime = 2500
     scavengerGroup.add(scavenger)
   }
}

 function sneakySpawn(){
  if(frameCount%150===0){
     sneaky = createSprite(random(100,450),random(0,350))
     sneaky.addImage(sneakyImg)
     sneaky.scale = 0.3
     sneaky.velocityX = 1
     sneaky.velocityY = 1
     sneaky.depth = astronaut.depth
    
     sneaky.lifetime = 1000
     sneakyGroup.add(sneaky)
   }
}