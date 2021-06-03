let zombie_img;
let fast_zombie_img, fat_zombie_img, zombie_hit_img;
let zombie_blinking_img;
const zombie_size = 15;

function zombie_image_preload()
{
    zombie_img = loadImage( 'assets/images/zombie.png' );
    fast_zombie_img = loadImage( 'assets/images/zombie.png' );
    fat_zombie_img = loadImage( 'assets/images/zombie.png' );
    zombie_hit_img = loadImage('assets/images/zombie_hit.png')
    
}

class zombies
{
    constructor()
    {
        this.x = width + 20;
        this.y = round( random( 4 ) ) * line_size + line_size / 2;
        this.speed = 1; //normal zombie_speed
        this.line_size = 100; //wall x_position
        this.zombie_type = round( random( 2 ) ) //0 = normal, 1 = fast, 2 = fat
        this.zombie_hp = 5;
        this.zombie_size = 5;
    }

    update()
    {
        if ( this.zombie_type === 1 ) //fast_zombie
        {
            this.speed = 1.5;
            this.draw_fast_zombies();
            

        }
        else if ( this.zombie_type === 2 ) //fat_zombie
        {
            this.speed = 0.5;
            this.draw_fat_zombies();

        }

        //zombie stops at wall
        if ( this.x > line_size + zombie_size )
        {
            this.x -= this.speed;

        }

    }

    draw_fast_zombies()
    {
        //drawing fast zombies
        push();
        imageMode( CENTER );
        image( fast_zombie_img, this.x, this.y );
        pop();
    }

    draw_fat_zombies()
    {
        //drawing fat zombies
        push();
        imageMode( CENTER );
        image( zombie_hit_img, this.x, this.y );
        pop();
    }

    //This function is to decorate the effects for collision.
    //ex) blinking effect, bloods and sounds.
    collision_effects()
    {
        push();
        imageMode( CENTER );
        image( zombie_hit_img, this.x, this.y );
        pop();
    }
}