status1 = "";
imag1e = "";
objects = [];
function preload(){
    imag1e = loadImage('img-1.jpg');
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.position(630, 300);
    x = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelloaded(){
    status1 = true;
    console.log("cocossd has loaded!");
    x.detect(imag1e, detectedObject);
}
function detectedObject(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        objects = result;
    }
}
function draw(){
    image(imag1e, 0, 0, 640, 420);
}
function back1(){
    window.location = "index.html";
}