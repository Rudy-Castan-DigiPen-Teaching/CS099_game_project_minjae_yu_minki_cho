let normal_zombie_img;
let fast_zombie_img, fat_zombie_img, zombie_hit_img, white_zombie_img;
let zombie_hit_wall_img, blood_img;
const zombie_size = 30;
const boss_zombie_size = 100;

let boss_zombie_img, boss_hit_img;

function zombie_image_preload()
{
    normal_zombie_img   = loadImage( 'assets/images/zombies/zombie_normal.gif' );
    fast_zombie_img     = loadImage( 'assets/images/zombies/zombie_fast.gif' );
    fat_zombie_img      = loadImage( 'assets/images/zombies/zombie_fat.gif' );
    zombie_hit_img      = loadImage( 'assets/images/zombies/zombie_hit.png' );
    white_zombie_img    = loadImage('assets/images/zombies/white_zombie.png');
    zombie_hit_wall_img = loadImage('assets/images/game_background/wall_hit.jpg');
    blood_img           = loadImage('assets/images/blood.png');

    boss_zombie_img  = loadImage( 'assets/images/zombies/boss_zombie.png' );
    boss_hit_img     = loadImage( 'assets/images/zombies/boss_zombie_hit.png' );
}

class zombies
{
    constructor(boss_zombie = false)
    {
        this.x = width- 20;
        //this.y = round( random( 4 ) ) * line_size + line_size / 2;
        this.y = round( random( zombie_size, height-zombie_size ) );
        this.speed = 1; //normal zombie_speed
        this.line_size = 100; //wall x_position
        this.zombie_type = round( random( 2 ) ) //0 = normal, 1 = fast, 2 = fat
        this.boss_zombie = boss_zombie;
        this.normal_zombie_hp = 5;
        this.fat_zombie_hp = 10;
        this.fast_zombie_hp = 2;


        if ( this.boss_zombie == false)
        {
            if ( this.zombie_type === 0 )
            {
                this.zombie_hp = this.normal_zombie_hp; //normal_zombie
            }
            else if ( this.zombie_type === 1 )
            {
                this.zombie_hp = this.fast_zombie_hp; //fast_zombie
            }
            else if ( this.zombie_type === 2 )
            {
                this.zombie_hp = this.fat_zombie_hp; //fat_zombie
            }
        }
        else
        {
            this.x = width + 100;
            this.y = 450;
            this.zombie_hp = 300; //boss_zombie
        }
    }

    update()
    {
        if ( this.boss_zombie == false)
        {
            if ( this.zombie_type === 0 ) //normal_zombie
            {
                this.speed = 100 * ( deltaTime / 1000 );
                this.draw_normal_zombies();
            }
            else if ( this.zombie_type === 1 ) //fast_zombie
            {
                this.speed = 150 * ( deltaTime / 1000 );
                this.draw_fast_zombies();
            }
            else if ( this.zombie_type === 2 ) //fat_zombie
            {
                this.speed = 50 * ( deltaTime / 1000 );
                this.draw_fat_zombies();
            }
        }
        else
        {
            this.speed = 50 * ( deltaTime / 1000 );
            this.draw_fat_zombies();
        }

        //zombie stops at wall
        if ( this.boss_zombie == false)
        {
            if ( this.x > game_wall.x + zombie_size )
            {
                this.x -= this.speed;
            }
        }
        else
        {
            if ( this.x > game_wall.x + boss_zombie_size )
            {
                this.x -= this.speed;
            }
        }
        //if zombie is on the wall later we could change into meaning full name.
        if ( this.boss_zombie == false)
        {
            if ( this.x <= line_size + zombie_size )
            {
                if ( deltaTime % 1 == 0 )
                {
                    //console.log("zombie hit the wall");
                    game_wall.wall_health -= 500; //originally -= 1
                    fill('black');
                    text("-1",this.x-20, this.y);
                    image( zombie_hit_wall_img, game_wall.x, game_wall.y );
                }
            }
        }
        else
        {
            if ( this.x <= line_size + boss_zombie_size )
            {
                if ( deltaTime % 1 == 0 )
                {
                    //console.log("zombie hit the wall");
                    game_wall.wall_health -= 500; //originally -= 1
                    image( zombie_hit_wall_img, game_wall.x, game_wall.y );
                }
            }
        }

    }

    draw_normal_zombies()
    {
        //drawing normal zombies
        push();
        imageMode( CENTER );
        image( normal_zombie_img, this.x, this.y );
        // fill('red');
        // rectMode(CORNER)
        // rect(this.x+10,this.y,5,this.normal_zombie_hp*6);
        // fill('green');
        // rect(this.x+10,this.y,5,this.zombie_hp*6);
        
        pop();
    }

    draw_fast_zombies()
    {
        //drawing fast zombies
        push();
        imageMode( CENTER );
        image( fast_zombie_img, this.x, this.y );
        // fill('red');
        // rectMode(CORNER)
        // rect(this.x+10,this.y,5,this.fast_zombie_hp*6);
        // fill('green');
        // rect(this.x+10,this.y,5,this.zombie_hp*6);
        pop();
    }

    draw_fat_zombies()
    {
        //drawing fat zombies
        push();
        imageMode( CENTER );
        image( fat_zombie_img, this.x, this.y );
        // fill('red');
        // rectMode(CORNER)
        // rect(this.x+10,this.y,5,this.fat_zombie_hp*3);
        // fill('green');
        // rect(this.x+10,this.y,5,this.zombie_hp*3);
        pop();
    }

    draw_boss_zombies()
    {
        push();
        imageMode( CENTER );
        image( boss_zombie_img, this.x, this.y );
        // fill('red');
        // rectMode(CORNER)
        // rect(this.x+10,this.y,5,30);
        // fill('green');
        // rect(this.x+10,this.y,5,this.zombie_hp*6);
        pop();
    }

    //This function is to decorate the effects for collision.
    //ex) blinking effect, bloods and sounds.
    collision_effects()
    {
        push();
        hit_sound.play();
        imageMode( CENTER );
        image( zombie_hit_img, this.x, this.y );
        image( blood_img, this.x + 40, this.y )
        this.x += 20; //Knock-back
        pop();
    }
}