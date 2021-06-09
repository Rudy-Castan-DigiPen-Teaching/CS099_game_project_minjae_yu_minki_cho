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
    else if ( keyCode === 82 )
    {
        //Press R to reset the game
        if ( game_mode === GAME_OVER )
        {
            clear();
            game_mode = GAME_START;
            score = 0;
            game_wall.wall_health = 300;

            //reset zombies
            for ( let day1_count = 0; day1_count < 10; day1_count++ )
            {
                zombies_day1_wave1[ day1_count ] = new zombies();
            }
            for ( let day2_count = 0; day2_count < 11; day2_count++ )
            {
                zombies_day1_wave2[ day2_count ] = new zombies();
            }
            for ( let day3_count = 0; day3_count < 12; day3_count++ )
            {
                zombies_day1_wave3[ day3_count ] = new zombies();
            }
            for ( let day4_count = 0; day4_count < 13; day4_count++ )
            {
                zombies_day1_wave4[ day4_count ] = new zombies();
            }
        }
    }
}