//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//09_Exercise 4 - Color Coordinates

function setup() {
  createCanvas(750, 750); //Use this function to define the size of the output window



}

function draw() {
  background(0); //Set your background color to black (0)

  //code here...
  /*dont tell me what to do
  My dad works at nintendo */

  fill(random(255),random(255) ,random(255));
  for (let i=0; i<100; i++){
    ellipse(random(width),random(height), 25, 25);


  }
  fill(53, 50, 204);
  for (let i=0; i<40; i++){
    rect(random(width),random(height), 10, 32);
  }

  fill(50, 205,50);
  for (let i=0; i<40; i++){
    rect(random(width),random(height), 32, 10);
  }

}
//translate()
//circles()
//function circles(){
//  ellipse 1
//  ellipse 2
//}
