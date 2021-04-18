const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var world, engine;
var bg;
var ground1, ground2, ground3, ground4, ground5, ground6, ground7, ground8, ground9, ground10,
ground11, ground12, ground13, ground14, ground15, ground16, ground17, ground18, ground19, ground20,
ground21, ground22, ground23, ground24, ground25, ground26, ground27, ground28, ground29, ground30;
var tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9, tile10;
var player;
var key1, key2, key3;


function preload() {

    bg = loadImage("bg.jpg");

}


function setup() {

    createCanvas(10000, 910);

    engine = Engine.create();
    world = engine.world;

    //creating objects from classes

    ground1 = new Tile1(100, 790, 200, 300);
    ground2 = new Tile2(400, 760, 200, 400);
    ground3 = new Tile2(1030, 800, 200, 400);
    ground4 = new Tile1(1230, 860, 200, 300);
    ground5 = new Tile1(1430, 860, 200, 300);
    ground6 = new Tile1(1630, 860, 200, 300);
    ground7 = new Tile1(1830, 860, 200, 300);
    ground8 = new Tile2(2030, 860, 200, 400);
    ground9 = new Tile2(2230, 800, 200, 400);
    ground9 = new Tile2(2230, 800, 200, 400);
    ground10 = new Tile2(2830, 800, 200, 400);
    ground11 = new Tile2(3030, 800, 200, 300);
    ground12 = new Tile1(3230, 860, 200, 300);
    ground13 = new Tile1(3430, 860, 200, 300);
    ground14 = new Tile2(4030, 760, 200, 400);
    ground15 = new Tile1(4830, 860, 200, 300);
    ground16 = new Tile2(5030, 860, 200, 400);
    ground17 = new Tile2(5230, 800, 200, 400);
    ground18 = new Tile2(6030, 780, 200, 400);
    ground19 = new Tile2(6230, 720, 200, 400);
    ground20 = new Tile2(6430, 780, 200, 400);
    ground21 = new Tile2(7030, 780, 200, 400);
    ground22 = new Tile1(7230, 800, 200, 300);
    ground23 = new Tile1(7430, 860, 200, 300);
    ground24 = new Tile1(7630, 860, 200, 300);
    ground25 = new Tile1(7830, 860, 200, 300);
    ground26 = new Tile1(8030, 860, 200, 300);
    ground27 = new Tile1(8230, 800, 200, 300);
    ground28 = new Tile2(8430, 800, 200, 400);
    ground29 = new Tile2(9230, 800, 200, 400);
    ground30 = new Tile2(9830, 720, 200, 400);

    tile1 = new Tile3(720, 500, 300, 80);
    tile2 = new Tile3(1350, 540, 300, 80);
    tile3 = new Tile3(2530, 540, 300, 80);
    tile4 = new Tile3(3730, 655, 300, 80); 
    tile5 = new Tile4(4430, 655, 500, 80);
    tile6 = new Tile4(5630, 555, 500, 80);
    tile7 = new Tile3(6730, 535, 300, 80); 
    tile8 = new Tile4(7660, 585, 500, 80);
    tile9 = new Tile4(8830, 700, 500, 80);
    tile10 = new Tile3(9530, 555, 300, 80);

    player = new Player(100, 650, 90, 170);

    key1 = new Key(1340, 450, 80, 100);
    key2 = new Key(4400, 565, 80, 100);
    key3 = new Key(7630, 495, 80, 100);

}


function draw() {

    background(bg);

    Engine.update(engine);

    //displaying objects

    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();
    ground5.display();
    ground6.display();
    ground7.display();
    ground8.display();
    ground9.display();
    ground10.display();
    ground11.display();
    ground12.display();
    ground13.display();
    ground14.display();
    ground15.display();
    ground16.display();
    ground17.display();
    ground18.display();
    ground19.display();
    ground20.display();
    ground21.display();
    ground22.display();
    ground23.display();
    ground24.display();
    ground25.display();
    ground26.display();
    ground27.display();
    ground28.display();
    ground29.display();
    ground30.display();

    tile1.display();
    tile2.display();
    tile3.display();
    tile4.display();
    tile5.display();
    tile6.display();
    tile7.display();
    tile8.display();
    tile9.display();
    tile10.display();

    player.display();

    key1.display();
    key2.display();
    key3.display();

    drawSprites();
    
}   
