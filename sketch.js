function setup() {
  createCanvas(640, 480);
 /* background(128, 0, 64); */
  noFill();

  stroke(255, 0, 0);
}

/*
  var x;
//
  x = 100;
  ellipse(x, 100, 50, 50);

  x = 250;
  ellipse(x, 100, 50, 50);

  x = 300;
  ellipse(x, 100, 50, 50);

*/

/*
for (var x = 1; x <= 8; x++)
{
  ellipse(x * 70, x * 20 + 100, 20, 40);
}

*/
function draw() {
  background(128, 0, 64);

for (var x = 1; x <= 8; x++)
{

  ellipse(x * 70, x * 20 + 100, x + 50, x * 10);

}
var size=Math.abs(mouseX - 320);
  ellipse(320, 240, mouseX, mouseY);
  ellipse(mouseX, mouseY, mouseX, mouseY);
fill(225,640*225,480*225)
ellipse(mouseY, mouseX, mouseX, mouseY);

}

