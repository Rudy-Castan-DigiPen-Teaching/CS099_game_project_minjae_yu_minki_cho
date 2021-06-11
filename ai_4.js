let ai_4_survived = true;

class draw_ai_4
{
    constructor()
    {
        this.x = 50;
        this.y = ( ( 4 * line_size ) + line_size / 2 ) - 5;
    }

    draw()
    {
        if ( ai_4_survived == true )
        {
            push();
            imageMode( CENTER )

            if ( ai_bullet_fired === false )
            {
                image( ai4_arm_img, this.x + 10, ( ( 4 * line_size ) + line_size / 2 ) - 5 );
            }
            else if ( ai_bullet_fired === true )
            {
                image( ai4_gun_recoil_img, this.x + 10, ( ( 4 * line_size ) + line_size / 2 ) - 5 );
            }
            image( ai4_img, this.x, ( ( 4 * line_size ) + line_size / 2 ) );
            pop();
        }
    }
}

class Ai_bullet_4
{
    constructor()
    {
        this.x = 90;
        this.y = 4 * line_size + line_size / 2 - 10;
        this.distance = 0;
        this.speed = 30 * ( deltaTime / 1000 );
        this.damage = 3;
    }

    move()
    {
        this.distance = this.distance + this.speed;
    }

    show()
    {
        push(); // remember the fill and stroke before
        fill( 50, 50, 50);
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