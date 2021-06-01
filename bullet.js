var bullet = [];

class Bullet {
  constructor() {
    this.x = 10;
    this.y = height/2;
    this.angleX=map(mouseX,0,width,2,-5 );
    this.angleY=map(mouseY,0,width,2,-5);


    //maps mouse location to angle
  }

  drawball () {
    stroke(255);
    fill(200,0,0);
    circle(this.x,this.y,5);
    this.y = this.y - this.angleY; 
    this.x = this.x - this.angleX;
  }

}

function mousePressed () {
    bullet.push(new Bullet());
  }
  
  function activateballgun() {
    for (var i=0; i<bullet.length; i++) {
      bullet[i].drawball(); 
  
      if (bullet[i].x <= 0 || bullet[i].y <= 0 || bullet[i].x >= width || bullet[i].y >= height) {
           bullet.splice(i,1);
      }//if ball goes out of frame, delete the ball from the array. 
    }
  }