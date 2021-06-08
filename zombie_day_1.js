function zombie_day_1_setup()
{ 
    //zombies
    for ( let day1_1count = 0; day1_1count < 10; day1_1count++ )
    {
        zombies_day1_1[ day1_1count ] = new zombies();
    }
    for ( let day1_2count = 0; day1_2count < 11; day1_2count++ )
    {
        zombies_day1_2[ day1_2count ] = new zombies();
    }
    for ( let day1_3count = 0; day1_3count < 12; day1_3count++ )
    {
        zombies_day1_3[ day1_3count ] = new zombies();
    }
    for ( let day1_4count = 0; day1_4count < 13; day1_4count++ )
    {
        zombies_day1_4[ day1_4count ] = new zombies();
    }
}

function zombie_day_1_draw()
{
            //call zombies
            zombie_day( zombies_day1_1 );
            //if stage1's zombie left 3 then next stage is starting
            if ( zombies_day1_1.length <= 2 )
            {
                zombie_day( zombies_day1_2 );
            }
            //if stage2's zombie left 4 then next stage is starting
            if ( zombies_day1_1.length + zombies_day1_2.length <= 3 )
            {
                zombie_day( zombies_day1_3 );
            }
            if ( zombies_day1_1.length + zombies_day1_2.length + zombies_day1_3.length <= 4 )
            {
                zombie_day( zombies_day1_4 );
            }
}