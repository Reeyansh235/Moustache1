noseX=0;
noseY=0;

function preload() {
}

function setup() {
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

function draw() {
    //fill(255,0,0);
    //stroke(0,255,0);
    //circle(noseX, noseY, 20);
}
function take_snapshot(){
    save('MyFilterImage');
}

