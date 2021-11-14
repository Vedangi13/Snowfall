const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var backgroundimg , engine , world 
var snow1=[]
var maxsnow=800
function preload(){

backgroundimg=loadImage("snow2.jpg");

}
function setup() {
  createCanvas(800,400);
  
     engine=Engine.create()
     world=engine.world
     for(var i=0 ; i<maxsnow; i++){
       snow1.push(new Snow(random(0,600),random(0,600),20))
     }

}

function draw() {
  background(backgroundimg);  
  for(var i=0 ; i<maxsnow; i++){
    snow1[i].display()
  }
  
}

