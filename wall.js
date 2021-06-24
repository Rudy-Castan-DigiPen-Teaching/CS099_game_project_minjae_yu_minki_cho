// Name       : Minjae Yoo, Minki Cho
// Assignment : Final Project - Make a Game
// Course     : CS099
// Spring 2021

let wall_img, braking_wall_img, braking_wall2_img;

function preload_wall()
{
    wall_img = loadImage( 'assets/images/game_background/wall2.jpg' );
    braking_wall_img = loadImage ('assets/images/game_background/wall2_braking.jpg');
    braking_wall2_img = loadImage('assets/images/game_background/wall2_braking2.png');

}

class Wall
{
    constructor()
    {
        this.x = 100;
        this.y = height / 2;
        this.width = 10;
        this.height = height;
        this.wall_health = 300;
        this.wall_health_bar = 30;
    }

    draw()
    {
        //rectMode( CENTER );
        fill( 'brown' );
        imageMode( CENTER );
        if(this.wall_health>250)
        {
            image( wall_img, this.x, this.y );
        }
        else if(this.wall_health>150&& this.wall_health<250)
        {
            image(braking_wall_img, this.x, this.y);
        }
        else{
            image(braking_wall2_img, this.x, this.y);
        }
        this.wall_hp();
        //console.log( this.wall_health );
    }

    wall_hp()
    {
        //draw wall_health_bar
        push();
        rectMode( CORNER );
        this.wall_health_bar = this.wall_health / 10;
        fill( 'red' );
        rect( line_size / 3, line_size * 3 - 15, 30, 5 );
        fill( 'green' );
        rect( line_size / 3, line_size * 3 - 15, this.wall_health_bar, 5 );
        pop();

        //If wall become 0 or less then game over.
        if ( this.wall_health <= 0 )
        {
            game_mode = GAME_OVER;
        }
    }
}