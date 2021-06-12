//This function is for main_menu game start, how to play and credit.
function keyPressed()
{
    if ( keyCode == ENTER )
    {
        //game start at MAIN_MENU
        if( game_mode === MAIN_MENU )
        {
            clear();
            game_mode = GAME_START;
        }
        //game start at CREDIT
        else if ( game_mode === CREDIT )
        {
            clear();
            game_mode = GAME_START;
        }
    }
    else if ( keyCode === 67 )
    {
        //Press C to see credit at MAIN_MENU
        if ( game_mode === MAIN_MENU )
        {
            clear();
            game_mode = CREDIT;
        }
    }
    
        //Press R to reload
        if ( game_mode === GAME_START )
        {
            if(keyCode === 82)
            {
                if ( player_gun_bullet >= 0 )
                {
                    player_gun_bullet = 7;
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
        }
    }

    //move to next day when AI is picked
    if (game_mode == INTERMISSION)
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
    }
}