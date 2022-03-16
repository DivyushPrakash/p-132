gold_bedroom_img = "";

function preload() {
    gold_bedroom_img = loadImage("bedroom.jpg");
}

function setup() {
    canvas = createCanvas(800, 600);
    canvas.center();
}

function draw() {
    image(gold_bedroom_img, 0, 0, 800, 600);
    stroke("orange")
    noFill();
    rect(199, 300, 380, 150);
    stroke("black");
    fill("black");
    text("Bed", 210, 310);


    stroke("orange")
    noFill();
    rect(70, 250, 60, 150);
    stroke("black");
    fill("black");
    text("Lamp", 80, 270);
}

function backbutton() {
    window.location = "home.html";
}