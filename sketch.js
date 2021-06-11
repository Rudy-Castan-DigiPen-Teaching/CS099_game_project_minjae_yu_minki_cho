//wall
let line_size = 100;
let game_wall;

//ai
let ai;
let ai_1, ai_2, ai_3, ai_4;

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
let ai_bullet_1 = new Array;
let ai_bullet_2 = new Array;
let ai_bullet_3 = new Array;
let ai_bullet_4 = new Array;

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

//check AI is picked or not once
let ai_picked = false;

let check_keyIsPressed = false;

let check_ai_1_picked = true;
let check_ai_2_picked = true;
let check_ai_3_picked = true;
let check_ai_4_picked = true;


function preload()
{
    bullet_preload();
    zombie_image_preload();
    font_preload();
    preload_wall();
    preload_characters();
    ai_image_preload();
    day_fadeout_img_preload();
    hit_sound = loadSound( 'assets/sounds/hit.wav' );
    bg = loadImage( 'assets/images/game_background/background.jpg' );
    left_bullet_img = loadImage( 'assets/images/left_bullet.png' );
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
    //ai = new draw_ai();
    ai_1 = new draw_ai_1();
    ai_2 = new draw_ai_2();
    ai_3 = new draw_ai_3();
    ai_4 = new draw_ai_4();

    zombie_day1_setup();
    zombie_day2_setup();
    zombie_day3_setup();
    zombie_day4_setup();
}

function draw()
{
    background( 220 );
    //console.log(frameCount)
    //console.log(ready_for_day3)

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
        //ai.draw();
        ai_1.draw();
        ai_2.draw();
        ai_3.draw();
        ai_4.draw();

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
        clear();
        cursor();
        push();
        textFont( new_text_font );
        textSize( 21 );
        text( 'press R to restart!', 20, 40 );
        pop();
    }

    if ( zombies_day1_wave1 != 0 && game_mode == GAME_START )
    {
        day1_fadeout_img();
    }

    //if there are no zombie on day1 then day2 start!
    if ( zombies_day1_wave1.length + zombies_day1_wave2.length +
        zombies_day1_wave3.length + zombies_day1_wave4 <= 0 && game_mode==GAME_START)
    {
        if ( !ready_for_day2 )
        {
            game_mode = INTERMISSION;
            cursor();
            if ( ai_picked == false )
            {
                text( "Sacrifice one for the next stage.", width / 2, height / 2 );
                pick_ai();
                pick_and_ban();
            }
            else
            {
                text( "Press any key to start your next day survival.", width / 2, height / 2 );
            }
        }
        if ( keyIsPressed && ai_picked )
        {
            ready_for_day2 = true;
            ai_picked = false;
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
        zombies_day2_wave3.length + zombies_day2_wave4 <= 0 && game_mode==GAME_START )
    {
        if ( !ready_for_day3 )
        {
            game_mode = INTERMISSION;
            cursor();
            if ( ai_picked == false )
            {
                text( "Sacrifice one for the next stage.", width / 2, height / 2 );
                pick_ai();
                pick_and_ban();
            }
            else
            {
                text( "Press any key to start your next day survival.", width / 2, height / 2 );
            }
        }
        if ( ai_picked )
        {
            ready_for_day3 = true;
            //player_gun_bullet = 7;
        }
        // if ( keyIsPressed )
        // {
        //     ai_picked = false;
        //     player_gun_bullet = 7;
        // }
        if ( ready_for_day3 )
        {
            game_mode = GAME_START;
            
            day3_fadeout_img();
            zombie_day3_draw();
        }
    }

    if ( zombies_day3_wave1.length + zombies_day3_wave2.length +
        zombies_day3_wave3.length + zombies_day3_wave4 <= 0 && game_mode==GAME_START)
    {
        if ( !ready_for_day4 )
        {
            game_mode = INTERMISSION;
            cursor();
            if ( ai_picked == false )
            {
                text( "Sacrifice one for the next stage.", width / 2, height / 2 );
                pick_ai();
                pick_and_ban();
            }
            else
            {
                text( "Press any key to start your next day survival.", width / 2, height / 2 );
            }
        }
        if ( ai_picked )
        {
            ready_for_day4 = true;
            //player_gun_bullet = 7;
        }
        // if ( keyIsPressed )
        // {
        //     ai_picked = false;
        //     player_gun_bullet = 7;
        // }
        if ( ready_for_day4 )
        {
            game_mode = GAME_START;
            
            day4_fadeout_img();
            zombie_day4_draw();
        }
    }
}

//draw ai to pick when the game_mode is INTERMISSION
function pick_ai()
{
    if ( ai_1_survived ) ai_1.draw();
    if ( ai_2_survived ) ai_2.draw();
    if ( ai_3_survived ) ai_3.draw();
    if ( ai_4_survived ) ai_4.draw();
}