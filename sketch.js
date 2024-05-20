function setup() {
  createCanvas(400, 600);
}
let s = 0.0;

//call my function: draw a rectangle;
function DrawRect(x,y,angle){
  translate(x,y);
  rotate(angle);
  noStroke();
  rect(0,0,200,20,50);
}

function draw() {
  background(0);
  //corpse;
  push();
  translate(-8,0);
  fill(255, 234, 79)
  DrawRect(300,190,PI/3);
  DrawRect(-70,150,PI/3);
  DrawRect(12,25,1.33*PI);
  fill(79, 255, 220);
  DrawRect(10,10,0.35*PI);
  DrawRect(100,-170,0.3*PI);
  fill(79, 132, 255);
  DrawRect(170,-80,0.35*PI);
  fill(255, 66, 170);
  DrawRect(0,0,1.5*PI);
  DrawRect(190,200,PI);
  pop();
  
  //head;
  push();
  fill(220,mouseY);
  rect(125,87,120,120);
  fill(0);
  triangle(mouseX, 90, mouseY, 200, 250, 90);
  pop();
  
  

  
  //left hair;
  noStroke();
  point(125, 87);
  point(120, 120);
  point(100, 160);
  point(115, 180);
  point(119, 215);
  point(96, 230);
  point(119, 250);
  point(170, 230);
  point(180, 180);
  point(160, 150);
  point(180, 150);
  
  beginShape();
  curveVertex(125, 87);
  curveVertex(125, 87);
  curveVertex(120, 120);
  curveVertex(100, 160);
  curveVertex(115, 180);
  curveVertex(119, 215);
  curveVertex(96, 230);
  curveVertex(119, 250);
  curveVertex(170, 230);
  curveVertex(180, 180);
  curveVertex(160, 150);
  curveVertex(180, 87);
  curveVertex(180, 87);
  endShape();
  
  //right hair;
  point(230, 87);
  point(270, 87);
  point(273, 110);
  point(260, 150);
  point(275, 170);
  point(320, 200);
  point(312, 220);
  point(300, 240);
  point(276, 260);
  point(268, 270);
  point(280, 272);
  point(300, 274);
  point(285, 290);
  point(240, 280);
  point(220, 220);
  point(215, 190);
  point(230, 180);
  
  beginShape();
  curveVertex(230, 87);
  curveVertex(230, 87);
  curveVertex(270, 87);
  curveVertex(273, 110);
  curveVertex(260, 150);
  curveVertex(275, 170);
  curveVertex(320, 200);
  curveVertex(312, 220);
  curveVertex(300, 240);
  curveVertex(276, 260);
  curveVertex(268, 270);
  curveVertex(280, 272);
  curveVertex(300, 274);
  curveVertex(285, 290);
  curveVertex(240, 280);
  curveVertex(220, 220);
  curveVertex(215, 190);
  curveVertex(230, 180);
  curveVertex(230, 180);
  endShape();
  
  //hat;
  push();
  fill(161, 74, 237);
  triangle(87, 90, 200, 40, 300, 90);
  triangle(mouseX, mouseY,100, 0, 250, 90);
  
    //eyes;
  fill(255);
  rect(160,50,70,10);
  ellipse(180,120,16);
  ellipse(220,120,16); 
  pop();

}
