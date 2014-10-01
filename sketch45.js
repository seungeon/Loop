	
var trailX = [0] ;
var trailY = [0] ;



	function draw() {


  background(255,20,147);
  
  trailX = (mouseX + trailX) / 2;
  trailY = (mouseY + trailY) / 2;

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

	  	  fill(255,215,0);
	  stroke(255,215,0);
	  rect(trailX+120,trailY+90,40,40);

	  	  fill(0);
	  stroke(0);
	  rect(trailX+130,trailY+100,10,10);

	  	  	  fill(255,127,80);
	  stroke(255,127,80);
	  rect(trailX+110,trailY+110,10,10);

	    fill(165,42,42);
	  stroke(165,42,42);
	  rect(trailX+140,trailY+130,10,20);	  
	  rect(trailX+130,trailY+140,10,10);

//

	  	  fill(255,215,0);
	  stroke(255,215,0);
	  rect(trailX+190,trailY+90,40,40);

	  	  fill(0);
	  stroke(0);
	  rect(trailX+200,trailY+100,10,10);

	  	  	  fill(255,127,80);
	  stroke(255,127,80);
	  rect(trailX+180,trailY+110,10,10);

	    fill(165,42,42);
	  stroke(165,42,42);
	  rect(trailX+210,trailY+130,10,20);	  
	  rect(trailX+200,trailY+140,10,10);

//

	  	  fill(255,215,0);
	  stroke(255,215,0);
	  rect(trailX+260,trailY+90,40,40);

	  	  fill(0);
	  stroke(0);
	  rect(trailX+270,trailY+100,10,10);

	  	  	  fill(255,127,80);
	  stroke(255,127,80);
	  rect(trailX+250,trailY+110,10,10);

	    fill(165,42,42);
	  stroke(165,42,42);
	  rect(trailX+280,trailY+130,10,20);	  
	  rect(trailX+270,trailY+140,10,10);

}

function setup() {
  createCanvas(500, 410);
  }