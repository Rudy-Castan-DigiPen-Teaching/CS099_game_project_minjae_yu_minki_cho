//wall
let line_size = 100;
let game_wall;

//ai
let ai;

//game_mode
let game_mode;
const MAIN_MENU = 0;
const GAME_START = 1;
const CREDIT = 2;
const INTERMISSION = 3;
const GAME_OVER = 4;

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

//left bullet
let left_bullet_img;

//ai_bullet
let ai_bullets = [];

//check for it is okay for next day.
let ready_for_day2 = false;
let ready_for_day3 = false;
let ready_for_day4 = false;

//frameCount works when game_mode is GAME_START from 0
let count_start = false;

//player gun magazine
let player_gun_bullet = 7;
//day1,2,3,4 img
let day1_img, day2_img, day3_img, day4_img;
//this is for fadeout img.
let life = 255,
    life1 = 255,
    life2 = 255,
    life3 = 255;

function preload()
{
    bullet_preload();
    zombie_image_preload();
    font_preload();
    preload_wall();
    preload_characters();
    ai_image_preload();
    hit_sound = loadSound( 'assets/sounds/hit.wav' );
    bg = loadImage( 'assets/images/game_background/background.jpg' );
    left_bullet_img = loadImage( 'assets/images/left_bullet.png' );
    day1_img = loadImage( 'assets/images/day1.png' );
    day2_img = loadImage( 'assets/images/day2.png' );
    day3_img = loadImage( 'assets/images/day3.png' );
    day4_img = loadImage( 'assets/images/day4.png' );

}

function setup()
{
    createCanvas( 800, 500 );
    frameRate( 60 );

    //game's default is main_menu
    game_mode = MAIN_MENU;

    //Make wall
    game_wall = new Wall();

    //ai
    ai = new draw_ai();

    zombie_day1_setup();
    zombie_day2_setup();
    zombie_day3_setup();
    zombie_day4_setup();
}

function draw()
{
    background( 220 )
    //console.log(frameCount)

    if ( game_mode == MAIN_MENU )
    {
        main_menu();
    }

    if ( game_mode == GAME_START )
    {
        count_start = true; //start frameCount

        imageMode( CORNER );
        background( 220 );
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
        ai.draw();


        zombie_day1_draw();
        ai_bullet_setoff();
        bullet_check();

        //print the score in canvas.
        text( "your score is " + score + " !", width - 200, 10 );


    }
    else
    {
        count_start = false;
    }

    //frameCount works only at the GAME_START screen
    if ( count_start === false )
    {
        frameCount = 0;
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

    if ( zombies_day1_wave1 != 0 && game_mode != MAIN_MENU )
    {
        day1_fadeout_img();
    }
    //if there are no zombie on day1 then day2 start! 
    if ( zombies_day1_wave1.length + zombies_day1_wave2.length +
        zombies_day1_wave3.length + zombies_day1_wave4 == 0 )
    {
        if ( !ready_for_day2 )
        {
            clear();
            game_mode = INTERMISSION;
            text( "press any key to move next day2", width / 2, height / 2 );


        }
        if ( keyIsPressed )
        {
            ready_for_day2 = true;
            player_gun_bullet = 7;
        }
        if ( ready_for_day2 )
        {
            game_mode = GAME_START;
            day2_fadeout_img();
            zombie_day2_draw();
        }
    }

    if ( zombies_day2_wave1.length + zombies_day2_wave2.length +
        zombies_day2_wave3.length + zombies_day2_wave4 == 0 )
    {
        if ( !ready_for_day3 )
        {
            clear();
            game_mode = INTERMISSION;
            text( "press any key to move next day3", width / 2, height / 2 );
        }
        if ( keyIsPressed )
        {
            ready_for_day3 = true;
            player_gun_bullet = 7;
        }
        if ( ready_for_day3 )
        {
            game_mode = GAME_START;
            day3_fadeout_img();
            zombie_day3_draw();
        }
    }

    if ( zombies_day3_wave1.length + zombies_day3_wave2.length +
        zombies_day3_wave3.length + zombies_day3_wave4 == 0 )
    {
        if ( !ready_for_day4 )
        {
            clear();
            game_mode = INTERMISSION;
            text( "press any key to move next day4", width / 2, height / 2 );
        }
        if ( keyIsPressed )
        {
            ready_for_day4 = true;
            player_gun_bullet = 7;
        }
        if ( ready_for_day4 )
        {
            game_mode = GAME_START;
            day4_fadeout_img();
            zombie_day4_draw();
        }
    }
}

//zombie array and collision update
function zombie_day_update( day_count )
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

    //ai_bullet collision
    for ( let ai_bullet_count = 0; ai_bullet_count < ai_bullets.length; ai_bullet_count++ )
    {
        for ( let i = 0; i < day_count.length; i++ )
        {
            x_dis = day_count[ i ].x - ai_bullets[ ai_bullet_count ].x;
            y_dis = day_count[ i ].y - ai_bullets[ ai_bullet_count ].y;
            distance = sqrt( x_dis * x_dis + y_dis * y_dis );

            if ( distance < zombie_size )
            {
                day_count[ i ].collision_effects();
                day_count[ i ].zombie_hp -= gun_damage; //reduce zombie_hp
                ai_bullets.splice( ai_bullet_count, 1 );

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

function bullet_check()
{
    for ( let i = 0; i < player_gun_bullet; i++ )
    {
        image( left_bullet_img, 30, height / 2 + i * 3 );
        //circle(40,height/2+i*3,5);
    }
    if ( player_gun_bullet == 0 )
    {
        text( "press r to reload!", 40, height / 2 + 30 )
    }
}

function day1_fadeout_img()
{
    push();
    scale( 3 );
    if ( life > 0 ) life -= 1;
    tint( 255, life );
    image( day1_img, width / 4, 80 );
    pop();
}

function day2_fadeout_img()
{
    push();
    scale( 3 );
    if ( life1 > 0 ) life1 -= 1;
    tint( 255, life1 );
    image( day2_img, width / 4, 80 );
    pop();
}

function day3_fadeout_img()
{
    push();
    scale( 3 );
    if ( life2 > 0 ) life2 -= 1;
    tint( 255, life2 );
    image( day3_img, width / 4, 80 );
    pop();
}

function day4_fadeout_img()
{
    push();
    scale( 3 );
    if ( life3 > 0 ) life3 -= 1;
    tint( 255, life3 );
    image( day4_img, width / 4, 80 );
    pop();
}