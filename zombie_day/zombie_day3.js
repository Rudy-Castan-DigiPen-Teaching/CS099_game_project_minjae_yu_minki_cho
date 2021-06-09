//day_count
let zombies_day3_wave1 = new Array;
let zombies_day3_wave2 = new Array;
let zombies_day3_wave3 = new Array;
let zombies_day3_wave4 = new Array;

function zombie_day3_setup()
{ 
    //zombies
    for ( let count1 = 0; count1 < 10; count1++ )
    {
        zombies_day3_wave1[ count1 ] = new zombies();
    }
    for ( let count2 = 0; count2 < 10; count2++ )
    {
        zombies_day3_wave2[ count2 ] = new zombies();
    }
    for ( let count3 = 0; count3 < 10; count3++ )
    {
        zombies_day3_wave3[ count3 ] = new zombies();
    }
    for ( let count4 = 0; count4 < 10; count4++ )
    {
        zombies_day3_wave4[ count4 ] = new zombies();
    }
}

function zombie_day3_draw()
{
    //call zombies
    zombie_day_update( zombies_day3_wave1 );
    //if stage1's zombie left 3 then next stage is starting
    if ( zombies_day3_wave1.length <= 2 )
    {
        zombie_day_update( zombies_day2_wave2 );
    }
    //if stage2's zombies and stage1's zombies left 4 then next stage is starting
    if ( zombies_day3_wave1.length + zombies_day3_wave2.length <= 3 )
    {
        zombie_day_update( zombies_day3_wave3 );
    }
    if ( zombies_day3_wave1.length + zombies_day3_wave2.length + zombies_day3_wave3.length <= 4 )
    {
        zombie_day_update( zombies_day4_wave4 );
    }
}