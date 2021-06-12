let ai_2_survived = true;

class draw_ai_2
{
    constructor()
    {
        this.x = 50;
        this.y = ( ( 1 * line_size ) + line_size / 2 ) - 5;
    }

    draw()
    {
        if ( ai_2_survived == true )
        {
            push();
            imageMode( CENTER )

            if ( ai_bullet_fired === false )
            {
                image( ai2_arm_img, this.x + 10, ( ( 1 * line_size ) + line_size / 2 ) - 5 );
            }
            else if ( ai_bullet_fired === true )
            {
                image( ai2_gun_recoil_img, this.x + 10, ( ( 1 * line_size ) + line_size / 2 ) - 5 );
            }
            image( ai2_img, this.x, ( ( 1 * line_size ) + line_size / 2 ) );
            pop();
        }
    }
}

class Ai_bullet_2
{
    constructor()
    {
        this.x = 90;
        this.y = 1 * line_size + line_size / 2 - 10;
        this.distance = 0;
        this.speed = 13 * ( deltaTime / 1000 );
        this.damage = 2;
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
            image(ai_bullet_img,this.x,this.y);
        }
        pop();  //restore fill and stroke
    }
  

    run()
    {
        this.show();
        this.move();

    }
}