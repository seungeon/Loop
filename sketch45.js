	function draw() {


  background(255,20,147);
  

	//red
	  fill(220,20,60);
	  stroke(220,20,60);
	  rect(mouseX+20,mouseY+20,10,10);
	  rect(mouseX+20,mouseY+30,30,10);
	  rect(mouseX+20,mouseY+40,40,10);
//white
	  fill(255,248,220);
	  stroke(255,248,220);
	  rect(mouseX+20,mouseY+50,50,40);
	  rect(mouseX+20,mouseY+90,70,40);
	  //yello;
	  	  fill(255,127,80);
	  stroke(255,127,80);
	  rect(mouseX+10,mouseY+70,10,20);
	  //black

	  fill(0);
	  stroke(0);
	  rect(mouseX+30,mouseY+60,10,10)
	    //brown;
	  fill(165,42,42);
	  stroke(165,42,42);
	  rect(mouseX+40,mouseY+130,10,30);
	  rect(mouseX+30,mouseY+150,10,10);


	  //병아리

	  	  fill(255,248,220);
	  stroke(255,248,220);
	  rect(mouseX+120,mouseY+90,40,50);

	  	  fill(0);
	  stroke(0);
	  rect(mouseX+130,mouseY+100,10,10);

	  	  	  fill(255,127,80);
	  stroke(255,127,80);
	  rect(mouseX+110,mouseY+110,10,10);

	    fill(165,42,42);
	  stroke(165,42,42);
	  rect(mouseX+140,mouseY+140,10,20);	  
	  rect(mouseX+130,mouseY+150,10,10);


}

function setup() {
  createCanvas(500, 410);
  }