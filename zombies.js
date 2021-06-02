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
        fill( 'green' )
        image( zombie_img, this.x, this.y );
        //circle(this.x,this.y,15)
    }



    /* (TODO)  
    Trying to figure the collision with zombie and bullet. (ongoing..)
     1. If the bullet's position x and y is in zombie's position x and y.
     2. Then zombie's life(hp) will decrease -1.
     3. And the effect ex) blinking(It will be in the assets soon.) 
     4. If the hp get 0(zero) the zombie will disappear.(I don't the way maybe split() will match up.)
    */
    collision_with_bullet()
    {
        if ( bullet.x < this.x + this.zombie_size || bullet.x > this.x - this.zombie_size )
        {
            if ( ( bullet.y < this.y + this.zombie_size || bullet.y > this.y - this.zombie_size ) )
            {
                this.zombie_hp--;
            }
        }
        if(this.zombie_hp == 0)
        {
            zombies_day1.split([1,1]) //There are problem in 
        }
    }
}