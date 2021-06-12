let zombies_day5 = new Array;

function zombie_day5_setup()
{ 
    for ( let count1 = 0; count1 <= 2; count1++ )
    {
        zombies_day5[ count1 ] = new zombies(true);
    }
}

function zombie_day5_draw()
{
    zombie_day_update( zombies_day5 );
}