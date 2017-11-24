

function setup() {
  createCanvas(500, 500);
}

function draw() {

  fill (mouseX, mouseY,mouseY)
rect(0, 0, 250, 250);

fill (mouseY, mouseY,mouseX/2)
rect(250, 250, 250, 250);


fill (mouseY, mouseX,mouseX)
rect(250, 0, 250, 250);

fill (mouseX/2, mouseX,mouseX)
rect(0, 250, 250, 250);
}
