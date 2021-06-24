

# <span style="color:brown"> CS99 – final game project Programming Concepts </span>

- - -


TEAM NAME:

GAME NAME: 

NAME: MINKI CHO, MINJAE YU

PROGRAMING LANGUAGE: Java Script(p5.js)


GAME DESCRIPTION:  It is Zombie Defense Game

    The game requires players and AI survivors to survive until rescue teams come, destroying the approaching zombies. Since there is not much food and supplies left, you, the main character, and a military-turned-leader, must choose one victim every day when you survive, so everything depends on your choice.

URL: <https://github.com/Rudy-Castan-DigiPen-Teaching/CS099_game_project_minjae_yu_minki_cho>


- - -

## <span style="color:skyblue"> Shapes </span>

When the mouse cursor is on the ai, it is used as a decoration of expressions to see the value of the AI.

    if ( ai_1.x - 30 < mouseX && mouseX < ai_1.x + 30 && ai_1.y - 30 < mouseY && mouseY < ai_1.y + 30 )
            {
                fill("white");
                rect(ai_1.x + 50, ai_1.y-10,250,50);
	. . .

In credit there are two rectangles for the decoration box.

    rect(30,120,300,360);
    rect(660,120,300,100)

This rectangle is for gauge for reload.

    rect( mouseX, mouseY + 20, reload_time, 5);

To notice the wall hp in screen.

    fill( 'red' );
    rect( line_size / 3, line_size * 3 - 15, 30, 5 );
    fill( 'green' );
    rect( line_size / 3, line_size * 3 - 15, this.wall_health_bar, 5 );

## <span style="color:skyblue"> Colors </span>

It was mainly used to change the color of text. I used it for more noticeable.

    textSize( 20 );
    fill( "black" );
    text( "Choose one survivor to sacrifice to survive your next day.", width / 3, height / 2 );
 
## <span style="color:skyblue"> Variables </span>

These variables are for Sketch.js.

This line_size is to set line’s size value which zombie came out it is useful for set the gap between the gap.

    //wall
    let line_size = 100 

This variable is for wall class. It is for draw wall on canvas.

    let game_wall;

This variable is for wall class.

    //ai
    let ai_1, ai_2, ai_3, ai_4;

These variables are for game mode. I used if statement and printout the canvas for these values.

    //game_mode
    let game_mode;
    const MAIN_MENU = 0;
    const GAME_START = 1;
    const CREDIT = 2;
    const INTERMISSION = 3;
    const GAME_OVER = 4;
    const HOW_TO_PLAY = 5;
    const STORY = 6;

I have to know the distance for collision with zombie and bullets.

    //bullet_zombie_distance
    let x_dis;
    let y_dis;
    let distance;

This variable is for score.

    //score
    let score = 0;

This variable is for gun damage. If there are a collisions zombie’s health will decrease with this value.

    //damage
    const gun_damage = 1;

This variable is for preload sound.

    //preload hit sound
    let hit_sound;
    //background

This variables are for preload background images.

    let bg;
    let bg1;
    let bg2;

    //left bullet
    let left_bullet_img;

    //ai_bullet
    let ai_bullets = [];
    let ai_bullet_1 = new Array;
    let ai_bullet_2 = new Array;
    let ai_bullet_3 = new Array;
    let ai_bullet_4 = new Array;

    //check for it is okay for next day.
    let ready_for_day1 = false;
    let ready_for_day2 = false;
    let ready_for_day3 = false;
    let ready_for_day4 = false;
    let ready_for_day5 = false;
    let ready_for_day_final = false;

If gamemode is GAME_START then count_start is false. It is to know game start.

    //frameCount works when game_mode is GAME_START from 0
    let count_start = false;

It's a variable to determine the number of bullets. It used for maximum of player's bullet

//player gun magazine
let player_gun_bullet = 7;

These variables are for preload day1~5 images.

    //day1,2,3,4,5 img
    let day1_img, day2_img, day3_img, day4_img, day5_img;

This variable is for know ai is picked or not this is used at sacrifice screen.

    let ai_picked = false;

If ai is picked I have to turn off the ai shooting these are use for it.

    //This is for ai_bullet 
    let ai_1_isShoot = true;
    let ai_2_isShoot = true;
    let ai_3_isShoot = true;
    let ai_4_isShoot = true;

This variable is for preload score box image.

    let scoreBox_img;

This variable is for ai picked image. If mouseX and Y is focus on ai than this image draws. 
    let ai_picked_img;

This variable is for ai wall image.

    let will_img;

This variables are the value of the image transparency for the day1~5 images. I used tint function to make transparency.

    let day1_transparency = 255,
    day2_transparency = 255,
    day3_transparency = 255,
    day4_transparency = 255,
    day5_transparency = 255

This variable is for preload black screen image it is for screen effects when a day and another day pass by.

    let black_screen_img;

This variables are the value of the image transparency for the screen effects. I used tint function to make transparency.

    let screen_transparency = 0;
    let final_day_screen_transparency = 0;
    let text_transparency = 250;

This variables are the value of the image game over image. I used tint function to make transparency.
text_y_pos2 is a value for text moving effects and tint_value is for tint function. 

    let game_over_img;
    let text_y_pos2 = 500;

    let tint_value = 0;

This variables are for preload in how to play it is decorating images.

    let back_img;
    let gray_back_img;
    let mouse_img, keyboard_img;

This variables are for preload in main menu it is decorating images.
Font is using in several places in game.

    let new_text_font;
    let tombstone_img;
    let menu_img, menu_focus_img;   

This variable is for text effect.

    let text_y_pos = 500;

These variables are for the spawn zombie for day1 ~ final. When day start zombie will spawn.

    let zombies_final_wave1 = new Array;
    let zombies_final_wave2 = new Array;
    let zombies_final_wave3 = new Array;
    let zombies_final_wave4 = new Array;
    let zombies_final_wave5 = new Array;
    let zombies_final_wave6 = new Array;
    let zombies_final_wave7 = new Array;
    let zombies_final_wave8 = new Array;
    let zombies_final_wave9 = new Array;
    let zombies_final_wave10 = new Array;
    let zombies_day1_wave1 = new Array;
    let zombies_day1_wave2 = new Array;
    let zombies_day1_wave3 = new Array;
    let zombies_day1_wave4 = new Array;
    let zombies_day1_wave5 = new Array;
    let zombies_day1_wave6 = new Array;
    let zombies_day1_wave7 = new Array;
    let zombies_day1_wave8 = new Array;
    let zombies_day1_wave9 = new Array;
    let zombies_day1_wave10 = new Array;
    . . .

This is for make player's bullet and preload fire image, sound and to check fired or not.

    var bullet = [];
    let bullet_img, fire_img;
    let bullet_sound;
    let bullet_fired = false;//check mouse_pressed and bullet is fired

This is for image for arrow which

    let arrow, arrow_focus;

This variables is for reload. Check time and if player have to reload(reload_time will be 0) it return true.

    const fixed_reload_time = 3;
    let reload_time = fixed_reload_time;
    let reload_check = false;

Add delay time when mouse clicked. To prevent fast click.

    const delay_time = 20;
    let delay = delay_time;

This variables are for preload walls. It is important for game system. When wall's hp get 0 game over.

    let wall_img, braking_wall_img, braking_wall2_img;

This variables are for preload zombies and collision effects. There are three kinds of zombies if there are collision with zombie than collision effect will come out.

    let normal_zombie_img;
    let fast_zombie_img, fat_zombie_img, zombie_hit_img;
    let zombie_hit_wall_img, blood_img;

This is zombie size and zombie line. It provide size of zombie and it will be helpful for collision with bullets.
Line is for the place where zombie spawn.

    const zombie_size = 30;
    const zombie_line = 20;

## <span style="color:skyblue"> Conditional Statements  Colors </span>

In ai_1.js ~ ai_4.js if ai 1,2,3,4 are alive then arm image will draw by fire or not.

    if ( ai_1_survived == true )
            {
                push();
                imageMode( CENTER )

                if ( ai_bullet_fired === false )
                {
                    image( ai_arm_img, this.x + 10, ( ( 0 * line_size ) + line_size / 2 ) - 5 );
                }
                else if ( ai_bullet_fired === true )
                {
                    image( ai_gun_recoil_img, this.x + 10, ( ( 0 * line_size ) + line_size / 2 ) - 5 );
                }
                image( ai_img, this.x, ( ( 0 * line_size ) + line_size / 2 ) );
                pop();
            }

In credit if mouse is on these value than image will draw.

    if ( mouseX < width - 30 && mouseX > width - 80 )
        {
            if ( mouseY < height - 30 && mouseY > height - 80 )
            {
                imageMode(CORNER );
                image( gray_back_img, width - 80, height - 80 );
            }
        }
All of these conditional statement is for transparency for image when new day start this statements will work.

    if ( day1_transparency > 0 ) day1_transparency -= 1;
    tint( 255, day1_transparency );
    image( day1_img, width / 4, 80 );

    if ( screen_transparency < 255 )
    {
        screen_transparency += 2.5;
        tint( 0, screen_transparency );
        imageMode( CORNER );
        image( black_screen_img, 0, 0 );
    }

     if ( final_day_screen_transparency < 255 )
    {
        fill( "white" );
        textSize( 30 );
        text( "Rescue team will come 30min later... I have to keep fighting!", width / 9 + 10, text_transparency );
        final_day_screen_transparency += 2.5;
        text_transparency++;
        tint( 0, final_day_screen_transparency );
        imageMode( CORNER );
        image( black_screen_img, 0, 0 );
    }

    if ( tint_value < 255 ) tint_value += 1;
    tint( 255, tint_value );
    image( game_over_img, 100, 100 );


## <span style="color:skyblue">  Loops Colors </span>
## <span style="color:skyblue"> Functions Loops Colors </span>
## <span style="color:skyblue"> Classes Colors </span>
## <span style="color:skyblue"> Arrays Colors </span>

Notes
