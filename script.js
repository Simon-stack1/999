var x, v; 
function setup() {
	createCanvas(500, 400);
}
x=30;
v=-5;

function draw() {
	background(225);
	
  
  circle(x, 199, 10);



  x = x + v
if(x > 500)
 v=-5 
if(x < 0)
 v=5

}