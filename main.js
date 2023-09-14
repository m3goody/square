noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristx=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(600,550);
    canvas=createCanvas(550,550);
    canvas.position(550,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.Y;
        console.log("noseX="+noseX+",noseY="+noseY);

        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("leftwristX="+leftwristX+",rightwristX="+rightwristX+",difference="+difference);
    }

}
function modelLoaded(){
    console.log('poseNet has Started');
}
function draw(){
    background('#7F7F7F');
    document.getElementById("square_side").innerHTML="width and height of the square will be:"+difference+"px";
    fill('00C9FF');
    stroke('2E00FF');
    square(noseX,noseY,difference);
}