class Wall
{
    constructor()
    {
        this.x = 100;
        this.y = height / 2;
        this.width = 10;
        this.height = height;
        this.wall_health = 300;
    }

    draw()
    {
        rectMode( CENTER );
        fill( 'brown' );
        rect( this.x, this.y, this.width, this.height );
        this.wall_hp();
    }

    wall_hp()
    {
        //If wall become 0 or less then game over.
        if(this.wall_health <= 0)
        {
            game_mode = GAME_OVER;

        //TODO) If game is over then we have to reset the game
        //making reset() is good way to present.
        //
        this.wall_health = 300;
        }
    }
};