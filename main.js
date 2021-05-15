function setup(){
 video=createCapture(VIDEO);
 video.size(500, 650);
    
 canvas=createCanvas(550, 550);
 canvas.position(420, 140);
 
 poseNet=ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}
    
function modelLoaded(){
 console.log('PoseNet is on');
}
    
function draw(){
 background('#90EE90');
}
    
function gotPoses(results){
 if (results.length >0){
 console.log(results);
 }
}