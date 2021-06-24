// Name       : Minjae Yoo, Minki Cho
// Assignment : Final Project - Make a Game
// Course     : CS099
// Spring 2021

let arrow, arrow_focus;

function arrow_preload()
{
    arrow = loadImage( 'assets/images/game_background/arrow.png' );
    arrow_focus = loadImage( 'assets/images/game_background/arrow_focus.png' );
}

function intermission_arrow()
{

    push();
    image( arrow, 900, 400 );

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
    }
    pop();
}
