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
// let ai_bullet_1 = new Array;
// let ai_bullet_2 = new Array;
// let ai_bullet_3 = new Array;
// let ai_bullet_4 = new Array;

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

//count ais
let ai_is_pressed = false;


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
        cursor();
        clear();
        push();
        textFont( new_text_font );
        textSize( 21 );
        text( 'press R to restart!', 20, 40 );
        pop();
    }

    if(game_mode == INTERMISSION)
    {

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
            text( "Sacrifice one for the next stage.", width / 2, height / 2 );
            cursor();
            pick_ai();
            who_will_sacrifice();
        }
        if ( keyIsPressed)
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
            text( "Sacrifice one for the next stage.", width / 2, height / 2 );
            cursor();
            pick_ai();
            who_will_sacrifice();
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
            who_will_sacrifice();
        }
    }

    if ( zombies_day3_wave1.length + zombies_day3_wave2.length +
        zombies_day3_wave3.length + zombies_day3_wave4 == 0 )
    {
        if ( !ready_for_day4 )
        {
            clear();
            game_mode = INTERMISSION;
            text( "Sacrifice one for the next stage.", width / 2, height / 2 );
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
            cursor();
            pick_ai();
            who_will_sacrifice();
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

//if ai`1~4 is true than draw().
function pick_ai()
{
    if (ai_1) ai_1.draw();
    if (ai_2) ai_2.draw();
    if (ai_3) ai_3.draw();
    if (ai_4) ai_4.draw();
}
function who_will_sacrifice()
{
    if(ai_1)
    { 
        if(ai_1.x-30<mouseX && mouseX<ai_1.x+30 && ai_1.y-30<mouseY && mouseY<ai_1.y+30)
        {
            circle(ai_1.x,ai_1.y,10);
            if(mouseIsPressed)
            {
                //이 removeClass가 진짜 class를 지우는건 아닌거 같네 다른방법으로 없애야겠다
                ai_1.removeClass;
               // ai_bullet_1.removeClass;
               
            }
            
        }
        
    }
    if(ai_2)
    { 
        if(ai_2.x-30<mouseX && mouseX<ai_2.x+30 && ai_2.y-30<mouseY && mouseY<ai_2.y+30)
        {
            circle(ai_2.x,ai_2.y,10);
            if(mouseIsPressed)
            {
                ai_2.removeClass;
                //ai_bullet_2.removeClass;
                
            }
        }
        
    }
    if(ai_3)
    { 
        if(ai_3.x-30<mouseX && mouseX<ai_3.x+30 && ai_3.y-30<mouseY && mouseY<ai_3.y+30)
        {
            circle(ai_3.x,ai_3.y,10);
            if(mouseIsPressed)
            {
                ai_3.removeClass;
                //ai_bullet_3.removeClass;
                
            }
        }
        
    }
    if(ai_4)
    { 
        if(ai_4.x-30<mouseX && mouseX<ai_4.x+30 && ai_4.y-30<mouseY && mouseY<ai_4.y+30)
        {
            circle(ai_4.x,ai_4.y,10);
            if(mouseIsPressed)
            {
                ai_4.removeClass;
                //ai_bullet_4.removeClass;
                
            }
        }
        
    }

    
}

