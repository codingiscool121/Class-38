var canvas,backgroundIMG;
var gameState = 0;
var playerCount,allPlayers;
var database;
var form,player,game;
var car1, car2, car3,car4,cars;


function preload(){
    silvercar = loadImage("car1.png");
    redcar = loadImage("car2.png");
    bluecar = loadImage("car3.png");
    blackcar = loadImage("car4.png");
}



function setup(){
    database = firebase.database();
    
    canvas = createCanvas(displayWidth-20,displayHeight-30);
    game = new Game();
    game.getState();
    game.start();   
}

function draw(){
    if(playerCount === 4){
        game.update(1);
    }
   if(gameState === 1){
       clear(0);
        game.play();
   }
}

