const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world



  ground = new Ground(240,800,480,10)
}

function draw() {
  background(0);  
  Engine.update(engine)
  drawSprites();
} 