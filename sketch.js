var canvas, backgroundImage;
var button;
var gameState = 0;
var playerCount;
var allPlayers;
var database;

var form, player, game;
var bg_img,musiconbutton_img,musicoffbutton_img,startButton_img,sound_mp3;
var startButton,musicButton, bg ;
function preload(){
  bg_img = loadImage("images/bgforgamepage1.jpg")
  musiconbutton_img = loadImage("images/musiconButton.png")
  musicoffbutton_img = loadImage("images/musicoffButton.png")
  sound_mp3 = loadSound("music/Pandemia.mp3",loaded);
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  button = createImg("images/musiconButton.png");
  button.position(displayWidth-100,2);
  button.visible = false ;
  button.mousePressed(togglePlaying)
  game = new Game();
  game.getState();
  game.start();
 
}
function togglePlaying(){
  button.visible = false ;
  if(!sound_mp3.isPlaying()){
  sound_mp3.loop()
  sound_mp3.setVolume(0.1);
  } else{
    sound_mp3.stop();
  }
}
function loaded(){
  console.log("loaded")
}

function draw(){
  background(bg_img)
if(playerCount === 2){
  game.update(1);
}
if(gameState === 1){
  game.play();
}
  drawSprites();
}
