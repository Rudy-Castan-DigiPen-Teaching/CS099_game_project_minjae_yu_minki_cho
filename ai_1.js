class Ai_1{
    constructor()
    {
        this.x = 50;
        this.y = line_size / 2; 
    }
    draw()
    {
        circle(50, this.y, 25);
    }
}


class Ai_bullet {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.distance = 0;
      this.speed = 2 * ( deltaTime / 1000 );
    }
    move() {
      this.distance = this.distance + this.speed;
      this.speed = this.speed + this.distance / 10000;
    }
    show()
        {
            push(); // remember the fill and stroke before
            fill( 0, 0, 0, 0);
            stroke( 255, 0, 0, 155);
            this.x += this.distance;
            if ( this.x < width )
            {
                for ( var i = 0; i < 10; i++ )
                {

                    ellipse( this.x, this.y, i * 4, i );
                }
      }
      pop();  //restore fill and stroke
    }
    run()
    {
        this.show();
        this.move();
    }
  }

  function ai_bullet_setoff()
  {
      for ( var i = 0; i < laser1.length; i++ )
      {
          laser1[ i ].run();
  
          if ( laser1[ i ].x >= width )
          {
              laser1.splice( i, 1 );
          } 
      }
      
  }



 