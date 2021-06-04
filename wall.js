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
        rectMode( CENTER );
        fill( 'brown' );
        rect( this.x, this.y, this.width, this.height );
        this.wall_hp();
        console.log(this.wall_health);
    }

    wall_hp()
    {
        //draw wall_health_bar
        push()
        rectMode(CENTER)
        this.wall_health_bar = this.wall_health / 10;
        fill('green')
        rect(line_size / 2, line_size * 3 - 25, this.wall_health_bar, 5)
        pop()

        //If wall become 0 or less then game over.
        if(this.wall_health <= 0)
        {
            game_mode = GAME_OVER;
        }
    }
}