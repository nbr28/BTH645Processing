/* sketch_shape.js */

var testImg;
function preload() {
    testImg = loadImage('moon.png');
  }
  

function setup() {
    createCanvas(600, 400);
    background(0);
}

function draw() {

    noStroke();

    image(testImg, 0, 0);
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






