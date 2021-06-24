// Name       : Minjae Yoo, Minki Cho
// Assignment : Final Project - Make a Game
// Course     : CS099
// Spring 2021

const delay_time = 20;
let delay = delay_time;

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