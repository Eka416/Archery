const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerBase, computerBase, Player, computerPlayer

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	playerBase = new PlayerBase(300,random(450,height - 300),180,150)
  computerBase = new ComputerBase(100,random(450,height - 300),180,150)
  player = new Playert(285,playerBase.bob.position.y - 153,50,180)
  computer = new Computer(115,computerBase.bob.position.y - 153,50,180)



 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  playerBase.display()
  computerBase.display()
  player.display()
  computer.display()


}
