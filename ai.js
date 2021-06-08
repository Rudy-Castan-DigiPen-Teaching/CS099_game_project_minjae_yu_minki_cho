class draw_ai{
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


class ai_bullet
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.distance = 0;
        this.speed = 2 * ( deltaTime / 1000 );
    }
    move()
    {
        this.distance = this.distance + this.speed;
    }
    show()
    {
        push(); // remember the fill and stroke before
        fill( 0, 0, 0);
        //stroke( 255, 0, 0, 155);
        this.x += this.distance;
        if ( this.x < width )
        {
            ellipse( this.x, this.y, 40, 5 );
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
    //이거 델타타임말고 좋은 방법 있을까?
    if( deltaTime % 1 == 0 )
    {  
        ai_bullets.push(new ai_bullet(50, line_size / 2));
    }

     
    for ( var i = 0; i < ai_bullets.length; i++ )
    {
        ai_bullets[ i ].run();
  
        if ( ai_bullets[ i ].x >= width )
        {
            ai_bullets.splice( i, 1 );
        } 
    }
}