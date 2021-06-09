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

//ai_bullet
let ai_bullets = [];

//check for it is okay for next day.
let ready_for_day2 = false;
let ready_for_day3 = false;
let ready_for_day4 = false;



function preload()
{
    bullet_preload();
    zombie_image_preload();
    font_preload();
    preload_wall();
    preload_characters();
    ai_image_preload();
    hit_sound = loadSound( 'assets/sounds/hit.wav' );
    bg = loadImage( 'assets/images/game_background/background.jpg' )
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
        ai.draw();

        zombie_day1_draw();
        ai_bullet_setoff();

        //print the score in canvas.
        text( "your score is " + score + " !", width - 200, 10 );
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

    //if there are no zombie on day1 then day2 start! 
    if(zombies_day1_wave1.length + zombies_day1_wave2.length 
        + zombies_day1_wave3.length + zombies_day1_wave4 == 0 )
        {
            if(!ready_for_day2)
            {
                clear();
                game_mode = INTERMISSION;
                text("press any key to move next day2",width/2,height/2);
            }
            if(keyIsPressed)
            {
                ready_for_day2 = true;
            }
            if(ready_for_day2)
            {
                game_mode = GAME_START;
                zombie_day2_draw();
            }
        }
    
        if(zombies_day2_wave1.length + zombies_day2_wave2.length 
            + zombies_day2_wave3.length + zombies_day2_wave4 == 0 )
            {
                if(!ready_for_day3)
                {
                    clear();
                    game_mode = GAME_START;
                    text("press any key to move next day3",width/2,height/2);
                }
                if(keyIsPressed)
                {
                    ready_for_day3 = true;
                }
                if(ready_for_day3)
                {
                    zombie_day3_draw();
                }
            }
    
            if(zombies_day3_wave1.length + zombies_day3_wave2.length 
                + zombies_day3_wave3.length + zombies_day3_wave4 == 0 )
                {
                    if(!ready_for_day4)
                    {
                        clear();
                        game_mode = GAME_START;
                        text("press any key to move next day4",width/2,height/2);
                    }
                    if(keyIsPressed)
                    {
                        ready_for_day4 = true;
                    }
                    if(ready_for_day4)
                    {
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
