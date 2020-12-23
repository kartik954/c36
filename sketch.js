var database;
var gamestate = 0;
var playercount = 0;
var form;
var player;
var game;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
    drawSprites();
  
}