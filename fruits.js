cocostatus = "";

function backbutton() {
    window.location = "home.html";
}


function preload() {
    fruitimg = loadImage("fruit.jpg");
}

function setup() {
    canvas = createCanvas(800, 600);
    canvas.center();
    cocomodel = ml5.objectDetecter("cocossd", modelloaded);
    document.getElementById("labelstatus").innerHTML = "Detecting Objects...";
}

function modelloaded() {
    console.log("CoCo Loaded");
    cocostatus = true;
    cocomodel.detect(fruitimg, getresult);
}

function getresult(errorarray, resultsarray) {
    if (errorarray) {
        console.error(errorarray);
    } else {
        console.log(resultsarray);
    }
}

function draw() {

}