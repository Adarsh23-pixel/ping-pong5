function setup() {
  canvas = createCanvas(600,500);
  canvas.center();

   video = createCapture(VIDEO);
    video.hide();

 
function draw() {
  if(GameStatus == "start")
}
  }
poseNet = ml5.poseNet(video,ModelLoaded);
poseNet.on('pose',gotPoses);

function ModelLoaded (){
console.log("Model is loaded");
}
function gotPoses(results) {
if(results.length>0)  {
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;

}
}
GameStatus = "";

function startGame() {
GameStatus = "start";
document.getElementById("status").innerHTML = "game is loaded"






