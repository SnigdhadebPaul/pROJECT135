video = "";
Status="";

function setup() {
    canvas = createCanvas(480, 320);
    canvas.center();
    video.hide();
    video = createCapture(VIDEO,modelloaded);

}
function draw() {
    image(video, 0, 0, 480, 320);

}
function start(){
objectdetector=ml5.objectDetector('cocossd',modelloaded);
document.getElementById("status").innerHTML='Status:Detecting Objects';

}
function modelloaded(){
console.log("Model Loaded!");
Status=true;


}


