const fixed_reload_time = 30;
let reload_time = fixed_reload_time;
let reload_check = false;

//This function is for main_menu game start, how to play and credit.
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

    // //move to next day when AI is picked
    // if ( game_mode == INTERMISSION )
    // {
    //     if ( ai_picked == true && !ready_for_day2 )
    //     {
    //         ready_for_day2 = true;
    //         ai_picked = false;
    //         player_gun_bullet = 7;
    //     }

    //     if ( ai_picked == true && !ready_for_day3 )
    //     {
    //         ready_for_day3 = true;
    //         ai_picked = false;
    //         player_gun_bullet = 7;
    //     }

    //     if ( ai_picked == true && !ready_for_day4 )
    //     {
    //         ready_for_day4 = true;
    //         ai_picked = false;
    //         player_gun_bullet = 7;
    //     }

    //     if ( ai_picked == true && !ready_for_day5 )
    //     {
    //         ready_for_day5 = true;
    //         ai_picked = false;
    //         player_gun_bullet = 7;
    //     }

    //     if ( ai_picked == true && !ready_for_day_final )
    //     {
    //         ready_for_day_final = true;
    //         ai_picked = false;
    //         player_gun_bullet = 7;
    //     }
    //}
}