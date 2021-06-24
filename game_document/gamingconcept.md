

# <span style="color:brown"> CS99 – final game project Programming Concepts </span>

- - -


TEAM NAME: Zombie

GAME NAME: Zombie defense

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

This variable is for know how many zombie is in each days. Add whole length of waves.

    let zombie_day1_length = zombies_day1_wave1.length + zombies_day1_wave2.length + zombies_day1_wave3.length +
        zombies_day1_wave4.length + zombies_day1_wave5.length + zombies_day1_wave6.length + zombies_day1_wave7.length +
        zombies_day1_wave8.length + zombies_day1_wave9.length + zombies_day1_wave10;
    let zombie_day2_length = zombies_day2_wave1.length + zombies_day2_wave2.length + zombies_day2_wave3.length +
        zombies_day2_wave4.length + zombies_day2_wave5.length + zombies_day2_wave6.length + zombies_day2_wave7.length +
        zombies_day2_wave8.length + zombies_day2_wave9.length + zombies_day2_wave10.length;
    let zombie_day3_length = zombies_day3_wave1.length + zombies_day3_wave2.length + zombies_day3_wave3.length +
        zombies_day3_wave4 + zombies_day3_wave5.length + zombies_day3_wave6.length + zombies_day3_wave7.length +
        zombies_day3_wave8.length + zombies_day3_wave9.length + zombies_day3_wave10.length;
    let zombie_day4_length = zombies_day4_wave1.length + zombies_day4_wave2.length + zombies_day4_wave3.length +
        zombies_day4_wave4 + zombies_day4_wave5.length + zombies_day4_wave6.length + zombies_day4_wave7.length +
        zombies_day4_wave8.length + zombies_day4_wave9.length + zombies_day4_wave10.length;
    let zombie_day5_length = zombies_day5_wave1.length + zombies_day5_wave2.length + zombies_day5_wave3.length +
        zombies_day5_wave4 + zombies_day5_wave5.length + zombies_day5_wave6.length + zombies_day5_wave7.length +
        zombies_day5_wave8.length + zombies_day5_wave9.length + zombies_day5_wave10.length;
    let zombie_day_final_length = zombies_final_wave1 + zombies_final_wave2 + zombies_final_wave3 +
        zombies_final_wave4 +
        zombies_final_wave5 + zombies_final_wave6 + zombies_final_wave7 + zombies_final_wave8 + zombies_final_wave9 +
        zombies_final_wave10;

## <span style="color:skyblue"> Conditional Statements </span>

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
All of these conditional statement is for transparency for image when new day start this statements will work. (day_img.js, fadeout.js)

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


This statement is for game ending. when screen_transparency is 255 than text will draw. This text will move down and if it goes to 150 than new text will come out. and game over image will be transparent if tint value is less than 255 (gameover.js)

            if ( screen_transparency == 255 )
        {
            push();
            textSize( 20 );
            fill( 'black' );
            text( "Suddenly a lot of zombies appeared before the rescue team arrived.\n\n" +
                "I fought the zombies hard, but there are too many...\n\n" +
                "Even ammo is almost empty...\n\n" +
                "No... NO!!! \n\n" +
                "In the end, all the survivors died.\n\n", 70, text_y_pos2 );
            text_y_pos2--;
            pop();
            if ( text_y_pos2 < 150 )
            {
                push();
                textSize( 25 );
                textFont( new_text_font );
                text( 'Press R to restart!', 20, 40 );
                text( ' Your score is      ', 20, 440 );
                textSize( 40 );
                fill( 'black' );
                text( score, 200, 440 );
                imageMode( CORNER );
                if ( tint_value < 255 ) tint_value += 1;
                tint( 255, tint_value );
                image( game_over_img, 100, 100 );
                pop();
            }
        }

If mouse is inside these value a new image will come out. (main_menu.js)

    //play_button
    if ( mouseX < 950 && mouseX > 600 )
    {
        if ( mouseY < 180 && mouseY > 80 )
        {
            image( menu_focus_img, 600, 80 );
        }
    }
    //how_to_play_button
    if ( mouseX < 950 && mouseX > 600 )
    {
        if ( mouseY < 310 && mouseY > 210 )
        {
            image( menu_focus_img, 600, 210 );
        }
    }
    //credit_button
    if ( mouseX < 950 && mouseX > 600 )
    {
        if ( mouseY < 440 && mouseY > 340 )
        {
            image( menu_focus_img, 600, 340 );
        }
    }

If text y position is less than -350 than y is 500 and if y pos is less than -100 fadeout effect will came out if this transparency is 255 than game will start.  It is for text effect. (story.js)

    if ( text_y_pos < -350 )
        {
            text_y_pos = 500;
        }
        if(text_y_pos < -100)
        {
            fadeout();
            if ( screen_transparency == 255 )
            {
                game_mode = GAME_START;
            }
        }

If bullet is out of canvas than it will delete from the array.

         if ( bullet[ i ].x <= 0 || bullet[ i ].y <= 0 || bullet[ i ].x >= width+20 || bullet[ i ].y >= height )
        {
            bullet.splice( i, 1 );
        } //if ball goes out of frame, delete the ball from the array

If there are collision with zombie and bullet the zombie's hp will decrease and when it become 0 or less than zombie will delete. (collision.js)

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

I divided line into 5 and if i==2 is player position and it will draw player. (game_background.js)

        function drawing_lines_characters()//drawing lines and characters
    {
        for(let i = 0; i < 5; i++)
        {
    
            if(i === 2)//player position
            {
                . . .

When bullet fired is true image will draw. When bullet come out bullet_fired variable will be true. (game_background.js)

    if(bullet_fired === true)
                {
                    image(gun_recoil, 0, 0);
                }
                else
                {
                    image(character_arm_img, 0, 0); 
                }

If gamemode is intermission if the mouse is on arrow which is image in right bottom than it will draw another color arrow to know mouse is focus in there. (intermission_arrow.js)

    if ( mouseX < 950 && mouseX > 900 )
    {
        if ( mouseY < 450 && mouseY > 400 )
        {
            image( arrow_focus, 900, 400 );
            if ( mouseIsPressed )
            {
                if ( ai_picked == true && !ready_for_day2 )
                {
                    ready_for_day2 = true;
                    ai_picked = false;
                    player_gun_bullet = 7;
                }

                if ( ai_picked == true && !ready_for_day3 )
                {
                    ready_for_day3 = true;
                    ai_picked = false;
                    player_gun_bullet = 7;
                }

                if ( ai_picked == true && !ready_for_day4 )
                {
                    ready_for_day4 = true;
                    ai_picked = false;
                    player_gun_bullet = 7;
                }

                if ( ai_picked == true && !ready_for_day5 )
                {
                    ready_for_day5 = true;
                    ai_picked = false;
                    player_gun_bullet = 7;
                }

                if ( ai_picked == true && !ready_for_day_final )
                {
                    ready_for_day_final = true;
                    ai_picked = false;
                    player_gun_bullet = 7;
                }
            }
        }
In each game mode player can press key board and continue game. In stroy mode if player press enter than game will start. In game over if player press r than game will restart. If game mode is game start you can press r to reload bullet. (keyPressed.js)

    function keyPressed()
    {
        if ( game_mode === STORY )
        {
            if ( keyCode == ENTER )
            {
                game_mode = GAME_START;
                
            }
        }

        if ( game_mode === GAME_OVER)
        {
            if ( keyCode == ENTER )
            {
                text_y_pos2 -= 100;
            }
        }

        //Press R to reload
        if ( game_mode === GAME_START )
        {
            if ( keyCode === 82 )
            {
                reload_check = true;
                if ( player_gun_bullet >= 0 && player_gun_bullet != 7 && reload_check == true )
                {
                    reload_sound.play();
                    /*if ( reload_time <= 0 )
                    {
                        player_gun_bullet = 7;
                    }*/
                }
            }
        }
        else if ( keyCode === 82 )
        {
            //Press R to reset the game
            if ( game_mode === GAME_OVER )
            {
                clear();
                score = 0;
                game_wall.wall_health = 300;
                setup();
                game_mode = MAIN_MENU;
                screen_transparency = 0;
                text_y_pos = 500;
            }

        }

If player press in each game mode and range of value than sound will play and move on to other game mode.
If player mouse clicked on game start mode the bullet will came out. (mousePressed.js)

    function mousePressed()
    {
        //button_sound
        if ( game_mode == MAIN_MENU )
        {
            if ( mouseX < 950 && mouseX > 600 )
            {
                if ( mouseY < 180 && mouseY > 80 )
                {
                    button_sound.play();
                    game_mode = STORY;
                }
            }

            if ( mouseX < 950 && mouseX > 600 )
            {
                if ( mouseY < 310 && mouseY > 210 )
                {
                    button_sound.play();
                    game_mode = HOW_TO_PLAY;
                }
            }

            if ( mouseX < 950 && mouseX > 600 )
            {
                if ( mouseY < 440 && mouseY > 340 )
                {
                    button_sound.play();
                    game_mode = CREDIT;
                }
            }
        }

        if ( game_mode == HOW_TO_PLAY || game_mode == CREDIT )
        {
            if ( mouseX < width - 30 && mouseX > width - 80 )
            {
                if ( mouseY < height - 30 && mouseY > height - 80 )
                {
                    button_sound.play();
                    game_mode = MAIN_MENU;
                }
            }
        }

        if ( game_mode == GAME_START )
        {
            //fire bullets when the mouse position is within the shooting range except player lines
            if ( mouseX >= 100 && mouseX <= width && mouseY >= 0 && mouseY <= height )
            {
                if ( player_gun_bullet > 0 &&  delay % delay_time == 0 && reload_check == false )
                {
                    bullet_fired = true;
                    gun_recoil.reset();
                    bullet.push( new Bullet( 50, height / 2, atan2( mouseY - height / 2, mouseX - 50 ) ) );
                    //gun magazine
                    player_gun_bullet--;
                    image(fire_img,150, height / 2);
                    bullet_sound.play();

                    //bullet_fire_delay
                    delay = 0;
                }
                else if ( player_gun_bullet == 0 )
                {
                    empty_mag_sound.play();
                }
            }
        }
    }

In sketch.js in each game mode a function will start. 

        if ( game_mode == MAIN_MENU )
        {
            main_menu();
        }

        if ( game_mode == HOW_TO_PLAY )
        {
            howToPlay();
        }

        if ( game_mode == CREDIT )
        {
            credit();
        }

        if ( game_mode == STORY )
        {
            story();
        }

        if ( game_mode == GAME_START )
        {
            . . .

When zombie's length is 0 in each days than background will change.

    if ( zombie_day1_length != 0 )
            {
                background( bg );
            }
            else if ( zombie_day2_length != 0 )
            {
                background( bg1 );
            }
            else if ( zombie_day3_length != 0 )
            {
                background( bg2 );
            }
            else if ( zombie_day4_length != 0 )
            {
                background( bg2 );
            }
            else if ( zombie_day5_length != 0 )
            {
                background( bg3 );
            }
            else if ( zombie_day_final_length != 0 )
            {
                background( bg4 );
            }

This statement can compute the delay_time for bullet delay.

    if ( delay < delay_time )
        {
            delay++;
        }

If day1 zombie is 0 than image will draw.

    if ( zombies_day1_wave1 != 0 )
        {
            day1_fadeout_img();
        }


To count frameCount this will use for time.

        else
    {
        count_start = false;
    }

    //frameCount works only at the GAME_START screen
    if ( count_start === false )
    {
        frameCount = 0;
    }

If reload_check is true than reload_ time will decrease. When player's bullet is 0 than reload_check will be true.

    //reload_check
    if ( reload_check == true )
    {
        reload_time--;
    }
    if ( reload_time == 0 )
    {
        reload_time = fixed_reload_time;
        reload_check = false;
        player_gun_bullet = 7;
    }

When game mode is game over than function will start. else than tint_value(it is for image) will reset 0.

    if ( game_mode == GAME_OVER )
    {
        if ( !ready_for_day_final )
        {
            game_over();
        }
        else
        {
            game_ending();
        }
    }
    else
    {
        tint_value = 0;
    }

This is for intermission game mode in each day player has to pick ai to sacrifice.

    if ( zombie_day1_length <= 0 && game_mode != GAME_OVER )
        {
            game_mode = INTERMISSION;
            if ( !ready_for_day2 && game_mode == INTERMISSION )
            {
                . . .


This is for text when player's bullet become 0.

    if ( player_gun_bullet == 0 )
    {
        push();
        textSize( 10 );
        textAlign( CENTER );
        text( "press r to reload!", 40, height / 2 + 30 );
        pop();
    }

This statement is for ai's dieing message when ai picked.

    if ( ai_1_survived == false )
    {
        image( ai_img, 100,430 );
        fill("red");
        text("dead",100, 430);
        fill("black");
        text( "Lyon: Please tell my family my death.", width / 2, 90 );
    }
    if ( ai_2_survived == false )
    {
        image( ai2_img, 200, 430 )
        fill("red");
        text("dead",200, 430);
        fill("black");;
        text( "Elon: Do not make my death wasted...", width / 2, 120 );
    }
    if ( ai_3_survived == false )
    {
        image( ai3_img, 300, 430 );
        fill("red");
        text("dead",300, 430);
        fill("black");
        text( "Alexander: I respect your decision.", width / 2, 150 );
    }
    if ( ai_4_survived == false )
    {
        image( ai4_img, 400, 430 );
        fill("red");
        text("dead",400, 430);
        fill("black");
        text( "Hudson: NO!! Why me? Go to hell you all", width / 2, 180 );
    }

If ai is picked and tombstone will draw.

    if ( ai_1_survived ) ai_1.draw();
    else image( tombstone_img, ai_1.x, ai_1.y );
    if ( ai_2_survived ) ai_2.draw();
    else image( tombstone_img, ai_2.x, ai_2.y );
    if ( ai_3_survived ) ai_3.draw();
    else image( tombstone_img, ai_3.x, ai_3.y );
    if ( ai_4_survived ) ai_4.draw();
    else image( tombstone_img, ai_4.x, ai_4.y );

If mouse is on ai than the message and some image will come out
    if ( ai_1.x - 30 < mouseX && mouseX < ai_1.x + 30 && ai_1.y - 30 < mouseY && mouseY < ai_1.y + 30 )
    {
        fill("white");
            rect(ai_1.x + 50, ai_1.y-10,250,50);
            fill( 'black' );
            //image( textBox_img, ai_1.x, ai_1.y - 35 );
            text( " Lyon : My family is waiting for me. Please save me! \n", ai_1.x + 50, ai_1.y );
            . . .

If mouse is pressed than ai, ai's bullet and ai_picked value will be change.

    if ( mouseIsPressed )
    {
        ai_1_isShoot = false;
        ai_1_survived = false;
        ai_picked = true;
    }

When wall's hp is decrease the new image about wall is drawing.

    if(this.wall_health>250)
        {
            image( wall_img, this.x, this.y );
        }
        else if(this.wall_health>150&& this.wall_health<250)
        {
            image(braking_wall_img, this.x, this.y);
        }
        else{
            image(braking_wall2_img, this.x, this.y);
        }

It is for game over. If wall become 0 or less then game over.

        //If wall become 0 or less then game over.
        if ( this.wall_health <= 0 )
        {
            game_mode = GAME_OVER;
        }

When zombie type is 0, 1, 2 the zombie will draw and update. It is important for make a distinction zombie.

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
            this.speed = 30 * ( deltaTime / 1000 ) + this.random_fat_moving_x; //original 30
            this.draw_fat_zombies();
        }
    else
    {
        this.speed = 50 * ( deltaTime / 1000 );
        this.draw_fat_zombies();
    }

When zombie is reach to wall it will stop this statement do that.

    //zombie stops at wall
    if ( this.x > game_wall.x + zombie_size )
    {
        this.x -= this.speed;
    }


## <span style="color:skyblue">  Loops </span>


## <span style="color:skyblue"> Functions Loops  </span>
## <span style="color:skyblue"> Classes  </span>
## <span style="color:skyblue"> Arrays  </span>

Notes
