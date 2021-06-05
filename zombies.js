let normal_zombie_img;
let fast_zombie_img, fat_zombie_img, zombie_hit_img,white_zombie_img, test_zombie_img;
let zombie_blinking_img;
const zombie_size = 15;

function zombie_image_preload()
{
    normal_zombie_img = loadImage( 'assets/images/normal_zombie.png' );
    fast_zombie_img   = loadImage( 'assets/images/normal_zombie.png' );
    fat_zombie_img    = loadImage( 'assets/images/normal_zombie.png' );
    zombie_hit_img    = loadImage( 'assets/images/zombie_hit.png' );
    white_zombie_img  = loadImage('assets/images/white_zombie.png');
    test_zombie_img   = loadImage('assets/images/Zombie.gif')
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

        if ( this.zombie_type === 0 )
        {
            this.zombie_hp = 5;//normal_zombie
        }
        else if ( this.zombie_type === 1 )
        {
            this.zombie_hp = 2;//fast_zombie
        }
        else if ( this.zombie_type === 2 )
        {
            this.zombie_hp = 10;//fat_zombie
        }
    }

    update()
    {
        if ( this.zombie_type === 0 )//normal_zombie
        {
            this.speed = 100 * (deltaTime/1000);
            this.draw_normal_zombies();
        }
        else if ( this.zombie_type === 1 ) //fast_zombie
        {
            this.speed = 150 * (deltaTime/1000);
            this.draw_fast_zombies();
        }
        else if ( this.zombie_type === 2 ) //fat_zombie
        {
            this.speed = 50 * (deltaTime/1000);
            this.draw_fat_zombies();
        }

        //zombie stops at wall
        if ( this.x > game_wall.x + zombie_size )
        {
            this.x -= this.speed;

        }
        //if zombie is on the wall later we could change into meaning full name.
        if ( this.x <= line_size + zombie_size )
        {
            if ( deltaTime % 1 == 0 )
            {
                //console.log("zombie hit the wall");
                game_wall.wall_health--;
            }
        }

    }

    draw_normal_zombies()
    {
        //drawing normal zombies
        push();
        imageMode( CENTER );
        translate(this.x,this.y)
        rotate(2*PI)
        image( normal_zombie_img, 0, 0 );
        pop();
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
        hit_sound.play();
        imageMode( CENTER );
        image( white_zombie_img, this.x, this.y );
        this.x += 10; //Knock-back
        pop();
    }
}