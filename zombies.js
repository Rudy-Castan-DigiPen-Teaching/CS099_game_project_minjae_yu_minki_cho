let zombie_img;
let zombie_collision_img;

function zombie_image_preload()
{
    zombie_img = loadImage( 'assets/images/zombie.png' );
}

class zombies
{
    constructor()
    {
        this.x = width + 20;
        this.y = round( random( 4 ) ) * line_size + line_size / 2;
        this.speed = 10; //normal zombie_speed
        this.line_size = 100; //wall x_position
        this.zombie_type = round( random( 2 ) ) //0 = normal, 1 = fast, 2 = fat
        this.zombie_hp = 5;
        this.zombie_size = 5;
    }

    update()
    {
        if ( this.zombie_type === 1 ) //fast_zombie
        {
            this.speed = 50;
        }
        else if ( this.zombie_type === 2 ) //fat_zombie
        {
            this.speed = 1;
        }

        //zombie stops at wall
        if ( this.x > line_size )
        {
            this.x -= this.speed;
        }
        
    }

    draw()
    {
        //drawing zombie
        push()
        imageMode(CENTER)
        image( zombie_img, this.x, this.y );
        pop()
    }
}