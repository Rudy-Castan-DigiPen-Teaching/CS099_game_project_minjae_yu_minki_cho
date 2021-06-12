let ai_1_survived = true;

class draw_ai_1
{
    constructor()
    {
        this.x = 50;
        this.y = ( ( 0 * line_size ) + line_size / 2 ) - 5;
    }

    draw()
    {
        if ( ai_1_survived == true )
        {
            push();
            imageMode( CENTER )

            if ( ai_bullet_fired === false )
            {
                image( ai_arm_img, this.x + 10, ( ( 0 * line_size ) + line_size / 2 ) - 5 );
            }
            else if ( ai_bullet_fired === true )
            {
                image( ai_gun_recoil_img, this.x + 10, ( ( 0 * line_size ) + line_size / 2 ) - 5 );
            }
            image( ai_img, this.x, ( ( 0 * line_size ) + line_size / 2 ) );
            pop();
        }
    }
}

class Ai_bullet_1
{
    constructor()
    {
        this.x = 90;
        this.y = line_size / 2 - 10;
        this.distance = 0;
        this.speed = 2 * ( deltaTime / 1000 );
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