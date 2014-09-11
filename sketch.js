function setup() {
  createCanvas(640, 480);
  background(128, 0, 64);
  no Fill();


  stroke(255, 0, 0);

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




for (var x = 1; x <=13; x++)
{
  ellipse(x * 100, 100, 50, 50);
}
