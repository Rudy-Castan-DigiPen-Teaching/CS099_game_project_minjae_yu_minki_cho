let normal_zombie_img;
let fast_zombie_img, fat_zombie_img, zombie_hit_img;
let zombie_hit_wall_img, blood_img;

const zombie_size = 30;
const zombie_line = 20;


function zombie_image_preload()
{

    normal_zombie_img   = loadImage( 'assets/images/zombies/zombie_normal.gif' );
    fast_zombie_img     = loadImage( 'assets/images/zombies/zombie_fast.gif' );
    fat_zombie_img      = loadImage( 'assets/images/zombies/zombie_fat.gif' );
    zombie_hit_img      = loadImage( 'assets/images/zombies/zombie_hit.png' );
    zombie_hit_wall_img = loadImage( 'assets/images/game_background/wall_hit.jpg' );
    blood_img           = loadImage( 'assets/images/blood.png' );
}

class zombies
{
    constructor( zombie_type )
    {
        this.x = width - 20;
        //this.y = round( random( 4 ) ) * line_size + line_size / 2;
        this.random_moving_x = random(-0.5,1.5);
        this.speed = 1; //normal zombie_speed
        this.line_size = 100; //wall x_position
        this.zombie_type = round( random( zombie_type ) ) //0 = normal, 1 = fast, 2 = fat
        this.normal_zombie_hp = 4;
        this.fat_zombie_hp = 8;
        this.fast_zombie_hp = 1;

        this.line1 = line_size / 2 - 5 - zombie_line;
        this.line2 = line_size / 2 - 5 + zombie_line;

        this.line3 = ( ( 1 * line_size ) + line_size / 2 ) - 5 - zombie_line;
        this.line4 = ( ( 1 * line_size ) + line_size / 2 ) - 5 + zombie_line;

        this.line5 = ( ( 2 * line_size ) + line_size / 2 ) - 5 - zombie_line;
        this.line6 = ( ( 2 * line_size ) + line_size / 2 ) - 5 + zombie_line;

        this.line7 = ( ( 3 * line_size ) + line_size / 2 ) - 5 - zombie_line;
        this.line8 = ( ( 3 * line_size ) + line_size / 2 ) - 5 + zombie_line;

        this.line9 = ( ( 4 * line_size ) + line_size / 2 ) - 5 + zombie_line;
        this.line10= ( ( 4 * line_size ) + line_size / 2 ) - 5 - zombie_line;
        
        this.y = 
         random( [ this.line1, this.line2, this.line3, this.line4, this.line5, this.line6, this.line7, this.line8, this.line9, this.line10 ] ) ;


        this.value = random();


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

    update()
    {
        if ( this.zombie_type === 0 ) //normal_zombie
        {
            this.speed = 70 * ( deltaTime / 1000 ) + this.random_moving_x; //original 70
            this.draw_normal_zombies();
        }
        else if ( this.zombie_type === 1 ) //fast_zombie
        {
            this.speed = 250 * ( deltaTime / 1000 ) + this.random_moving_x;    //original 250
            this.draw_fast_zombies();
        }
        else if ( this.zombie_type === 2 ) //fat_zombie
        {
            this.speed = 30 * ( deltaTime / 1000 ) + this.random_moving_x; //original 30
            this.draw_fat_zombies();
        }
    else
    {
        this.speed = 50 * ( deltaTime / 1000 );
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
                game_wall.wall_health -= 0.5; //originally -= 1
                fill( 'black' );
                text( "-1", this.x - 20, this.y );
                image( zombie_hit_wall_img, game_wall.x, game_wall.y );
            }
        }
    }

    draw_normal_zombies()
    {
        //drawing normal zombies
        push();
        imageMode( CENTER );
        image( normal_zombie_img, this.x, this.y);
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
        image( fast_zombie_img, this.x, this.y);
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
        image( fat_zombie_img, this.x, this.y);
        // fill('red');
        // rectMode(CORNER)
        // rect(this.x+10,this.y,5,this.fat_zombie_hp*3);
        // fill('green');
        // rect(this.x+10,this.y,5,this.zombie_hp*3);
        pop();
    }

    //This function is to decorate the effects for collision.
    //ex) blinking effect, bloods and sounds.
    collision_effects()
    {
        push();
        hit_sound.play();
        imageMode( CENTER );
        image( zombie_hit_img, this.x, this.y);
        image( blood_img, this.x + 40, this.y);
        this.x += 20; //Knock-back
        pop();
    }
}