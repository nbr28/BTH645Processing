/* sketch_shape.js */

var testImg;
var StarArray = [];
var angle = 0;

function preload() {
    testImg = loadImage('assets/moon.png');
}


function setup() {
    createCanvas(600, 400);
    background(0);
    frameRate(15);
    for (i = 0; i < 100; i++)
        StarArray.push(new Star());
}

function nextRad(theta) {
    let r = height * 0.50;
    var cordiantes = { x: 0, y: 0 };
    cordiantes.x = r * cos(theta);
    cordiantes.y = abs(r * sin(theta))*-1;

    return cordiantes;
}

function draw() {

    clear();//for each frame

    background(0);
    noStroke();


    push();
    var moonPoint = nextRad(angle);
    angle += 0.001;
    translate(width / 2, height / 2);
    image(testImg, moonPoint.x, moonPoint.y, 50, 50);
    pop();


    //stars
   
    for (i = 0; i < 100; i++) {
        push();
        StarArray[i].display();
        pop();
    }
    

    push();
    {
        fill(255, 204, 0);


        //Head
        push();
        ellipse(300, 135, 50, 50);
        pop();

        //Toso
        push();
        rect(285, 160, 30, 80)
        pop();


        //Left Leg
        push();
        rect(265, 240, 20, 120)
        pop();


        //Right Leg
        push();
        rect(315, 240, 20, 120)
        pop();

        //Left Arm
        push();
        rect(260, 160, 20, 75)
        pop();


        //Right Arm
        push();
        rect(320, 160, 20, 75)
        pop();
    }
    pop();

}

function Star() {

    this.Brighness = random() * 255;
    this.x = random(width)
    this.y = abs(random(height));
    this.diameter = 1;
}

Star.prototype.display = function () {

    noStroke();
    fill(color(this.Brighness,this.Brighness,this.Brighness));
    ellipse(this.x, this.y, 2, 2);

    this.Brighness +=random(-50,50);
}









