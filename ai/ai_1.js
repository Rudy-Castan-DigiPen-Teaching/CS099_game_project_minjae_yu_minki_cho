// Name       : Minjae Yoo, Minki Cho
// Assignment : Final Project - Make a Game
// Course     : CS099
// Spring 2021

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
        this.y = line_size / 2 - 5;
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