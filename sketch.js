const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var player;

var backgroundIMG;

var orbs;

var score = 0;
var goal = 3000;
var sc, mn, hr;

var border1, border2;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){

	backgroundIMG = loadImage("Images/BG.jpg");
	
}

function setup() {
	createCanvas(1100, 600);
	engine = Engine.create();
	world = engine.world;

	if (gameState === PLAY){

		stroke("white");
		player = new Player(mouseX, 550, 100, 10);

		border1 = new Border(1080, 300, 2, 500);
		border2 = new Border(20, 300, 2, 500);

	} else if (gameState === END){




	}



	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(backgroundIMG);
  Engine.update(engine);

	sc = second();
	mn = minute();
	hr = hour();

	fill("white");
	textSize(25);
	textFont("Cinzel");
	text("Goal: " + goal, 10, 25);
	text("Score: " + score, 1005, 590);
	fill(0);
	noStroke();
	text("Time: ", 10, 590);
	text("HR:" + hr, 83, 590);
	text("MN:" + mn, 160, 590);
	text("SC:" + sc, 244, 590);

	border1.display();
	border2.display();

	player.display();
  
  drawSprites();
}



