beliver = "beliver.mp3";
harry_potter = "Harry potter.mp3"

Song_1 = "";
Song_2 = "";

Left_Wrist_X = "";
Left_Wrist_Y = "";

Right_Wrist_X = "";
Right_Wrist_Y = "";

function preload(){
    Song_1 = loadSound("beliver.mp3");
    Song_2 = loadSound("Harry potter.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    pose_net = poseNet(video,Modelloaded);
    pose_net.on('pose',gotposes);
}

function draw(){
    image(video,0,0,600,500)
}

function Modelloaded(){
    console.log("Model Is Loaded");
}

function gotposes(results){

    console.log(results);

    if(results>0){
        Left_Wrist_X = results[0].pose.leftWrist.x
        Left_Wrist_Y = results[0].pose.leftWrist.y

        Right_Wrist_X = results[0].pose.rightWrist.x
        Right_Wrist_Y = results[0].pose.rightWrist.y
    }
}