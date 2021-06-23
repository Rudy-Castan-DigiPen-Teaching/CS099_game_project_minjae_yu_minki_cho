

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


let black_screen_img;
let screen_transparency = 0;
let final_day_screen_transparency = 0;
let text_transparency = 250;

## Conditional Statements
## Loops
## Functions
## Classes
## Arrays

Notes
