// Name       : Minjae Yu, Minki Cho
// Assignment : Final Project - Make a Game
// Course     : CS099
// Spring 2021

let ai_3_survived = true;

class draw_ai_3
{
    constructor()
    {
        this.x = 50;
        this.y = ( ( 3 * line_size ) + line_size / 2 ) - 5;
    }

    draw()
    {
        if ( ai_3_survived == true )
        {
            push();
            imageMode( CENTER )

            if ( ai_bullet_fired === false )
            {
                image( ai3_arm_img, this.x + 10, ( ( 3 * line_size ) + line_size / 2 ) - 5 );
            }
            else if ( ai_bullet_fired === true )
            {
                image( ai3_gun_recoil_img, this.x + 10, ( ( 3 * line_size ) + line_size / 2 ) - 5 );
            }
            image( ai3_img, this.x, ( ( 3 * line_size ) + line_size / 2 ) );
            pop();
        }
    }
}

class Ai_bullet_3
{
    constructor()
    {
        this.x = 90;
        this.y = 3 * line_size + line_size / 2 - 10;
        this.distance = 0;
        this.speed = 100 * ( deltaTime / 1000 );
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
            image(ai_bullet_img,this.x,this.y)
        }
        pop();  //restore fill and stroke
    }
  

    run()
    {
        this.show();
        this.move();
    }
}