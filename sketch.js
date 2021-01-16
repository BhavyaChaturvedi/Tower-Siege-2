const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
polygonImg = loadImage("polygon.png");
}

function setup(){
createCanvas(1200,500);

engine = Engine.create();
world = engine.world;


ground1 = new Ground(500, 420, 450, 20);
ground2 = new Ground(870, 200, 390, 20);
block1 = new box(400, 410, 40, 70);
block2 = new box(430, 410, 40, 70);
block3 = new box(460, 410, 40, 70);
block4 = new box(490, 410, 40, 70);
block5 = new box(520, 410, 40, 70);
block6 = new box(550, 410, 40, 70);
block7 = new box(580, 410, 40, 70);
block8 = new box(600, 410, 40, 70);
block9 = new box(730, 190, 40, 70);
block10 = new box(770, 190, 40, 70);
block11 = new box(810, 190, 40, 70);
block12 = new box(850, 190, 40, 70);
block13 = new box(890, 190, 40, 70);
block14 = new box(930, 190, 40, 70);
block15 = new box(970, 190, 40, 70);
polygon = new Polygon(70, 250, 20);
slingShot = new SlingShot(polygon.body,{x: 100, y:200})
}

function draw(){
background(225);
Engine.update(engine);

ground1.display();
ground2.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
polygon.display();
slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(polygon.body);
  }
}