//wall
let line_size = 100;
let game_wall;

//ai
let ai_1;

//game_mode
let game_mode;
const MAIN_MENU = 0;
const GAME_START = 1;
const CREDIT = 2;
const GAME_OVER = 4;

//day_count
let zombies_day1_1 = new Array;
let zombies_day1_2 = new Array;
let zombies_day1_3 = new Array;
let zombies_day1_4 = new Array;

//bullet_zombie_distance
let x_dis;
let y_dis;
let distance;

//score
let score = 0;

//damage
const gun_damage = 5;

//preload hit sound
let hit_sound;

//background
let bg;

//laser
let laser1 = [];
let laser2 = [];
let laser3 = [];
let laser4 = [];

function preload()
{
    bullet_preload();
    zombie_image_preload();
    font_preload();
    preload_wall();
    preload_characters()
    hit_sound = loadSound( 'assets/sounds/hit.wav' );
    bg = loadImage( 'assets/images/background.jpg' )
}

function setup()
{
    createCanvas( 800, 500 );

    //game's default is main_menu
    game_mode = MAIN_MENU;

    //Make wall
    game_wall = new Wall();

    //ai
    ai_1 = new Ai_1();

    zombie_day_1_setup();


}

function draw()
{
    background( 220 )

    if ( game_mode == MAIN_MENU )
    {
        main_menu();
    }

    if ( game_mode == GAME_START )
    {
        imageMode( CORNER );
        background( 220 )
        //draw alines and wall of game_background class
        drawing_lines_characters();
        //drawing_wall();
        game_wall.draw();
        //ball_fire
        bullet_setoff();
        //remove mouse_cursor
        noCursor();
        //crosshair
        crosshair();
        ai_1.draw();

        zombie_day_1_draw();

        //print the score in canvas.
        text( "your score is " + score + " !", width - 200, 10 );

        ai_bullet_setoff();

        
    }
    if ( game_mode == CREDIT )
    {
        credit();
    }
    if ( game_mode == GAME_OVER )
    {
        cursor();
        clear();
        push();
        textFont( new_text_font );
        textSize( 21 );
        text( 'press R to restart!', 20, 40 );
        pop();
    }
}

function zombie_day( day_count )
{
    for ( let count = 0; count < day_count.length; count++ )
    {
        day_count[ count ].update();
    }

    //bullet_zombie collision
    for ( let bullet_count = 0; bullet_count < bullet.length; bullet_count++ )
    {
        for ( let i = 0; i < day_count.length; i++ )
        {
            x_dis = day_count[ i ].x - bullet[ bullet_count ].x;
            y_dis = day_count[ i ].y - bullet[ bullet_count ].y;
            distance = sqrt( x_dis * x_dis + y_dis * y_dis );

            if ( distance < zombie_size )
            {
                //console.log( "hit" );
                day_count[ i ].collision_effects();
                day_count[ i ].zombie_hp -= gun_damage; //reduce zombie_hp
                bullet.splice( bullet_count, 1 );

                if ( day_count[ i ].zombie_hp <= 0 ) //remove zombie when zombie_hp is 0
                {
                    image( blood_img, day_count[ i ].x, day_count[ i ].y )
                    day_count.splice( i, 1 );
                    score++;
                }
                break;
            }
        }
    }
}