var particles= [];
var plinkos= [];
var divisions= [];

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//var divisions;
var score= 0;

var divisionHeight= 300;

function setup() {
  createCanvas(500,800);
  engine= Engine.create();
  world= engine.world;

  ground= new Division(250, 790, 500, 10);
  //createSprite(400, 200, 50, 50);
  for (var k= 0; k <= width; k= k + 80){  
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight))
  }
  for (var j= 65; j <= width; j= j + 50){  
    plinkos.push(new Plinko(j, 200));
  }
  for (var j= 40; j <= width-10; j= j + 50){  
    plinkos.push(new Plinko(j, 260));
  }
  for (var j= 65; j <= width; j= j + 50){  
    plinkos.push(new Plinko(j, 340));
  }
  for (var j= 40; j <= width-10; j= j + 50){  
    plinkos.push(new Plinko(j, 430));
  }
}

function draw() {
  background(0); 
  Engine.update(engine);
  ground.display();
  for (var i = 0; i < plinkos.length; i++) { 
    plinkos[i].display();
   }
   if(frameCount %30 ===0){
     //score++;
   }
   for (var j = 0; j < particles.length; j++) { 
   particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) { 
    divisions[k].display();
   }
   if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   // score++;
  }
  //drawSprites();  
}