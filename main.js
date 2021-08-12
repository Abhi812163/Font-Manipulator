noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(900,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#adadad');
    text(difference)
    fill('#00ff3c');
    text('Abhineet',50,400);
    document.getElementById("size").innerHTML="Width and Height of the text is = "+ difference+"px";
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}

function gotPoses(results){
    if(results.length>0){
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX - rightWristX);
        console.log("leftWrist x= "+leftWristX + " rightWrist x = " + rightWristX + " difference= " + difference);
}  
}