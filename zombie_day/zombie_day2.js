//day_count
let zombies_day2_wave1 = new Array;
let zombies_day2_wave2 = new Array;
let zombies_day2_wave3 = new Array;
let zombies_day2_wave4 = new Array;

function zombie_day2_setup()
{ 
    //zombies
    for ( let count1 = 0; count1 < 1; count1++ )
    {
        zombies_day2_wave1[ count1 ] = new zombies();
    }
    for ( let count2 = 0; count2 < 1; count2++ )
    {
        zombies_day2_wave2[ count2 ] = new zombies();
    }
    for ( let count3 = 0; count3 < 1; count3++ )
    {
        zombies_day2_wave3[ count3 ] = new zombies();
    }
    for ( let count4 = 0; count4 < 1; count4++ )
    {
        zombies_day2_wave4[ count4 ] = new zombies();
    }
}

function zombie_day2_draw()
{
    //call zombies
    zombie_day_update( zombies_day2_wave1 );
    //if stage1's zombie left 3 then next stage is starting
    if ( zombies_day2_wave1.length <= 12 )
    {
        zombie_day_update( zombies_day2_wave2 );
    }
    //if stage2's zombies and stage1's zombies left 4 then next stage is starting
    if ( zombies_day2_wave1.length + zombies_day2_wave2.length <= 13 )
    {
        zombie_day_update( zombies_day2_wave3 );
    }
    if ( zombies_day2_wave1.length + zombies_day2_wave2.length + zombies_day2_wave3.length <= 14 )
    {
        zombie_day_update( zombies_day2_wave4 );
    }
}

function zombie_day2_splice()
{
    for ( let i = 0; i < zombies_day2_wave1.length; i++ )
    {
        zombies_day2_wave1.splice(i,1);
    }
    for ( let i = 0; i < zombies_day2_wave2.length; i++ )
    {
        zombies_day2_wave2.splice(i,1);
    }
    for ( let i = 0; i < zombies_day2_wave3.length; i++ )
    {
        zombies_day2_wave3.splice(i,1);
    }
    for ( let i = 0; i < zombies_day2_wave4.length; i++ )
    {
        zombies_day2_wave4.splice(i,1);
    }
}