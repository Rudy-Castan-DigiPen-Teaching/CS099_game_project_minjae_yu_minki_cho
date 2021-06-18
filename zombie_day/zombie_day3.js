//day_count
let zombies_day3_wave1 = new Array;
let zombies_day3_wave2 = new Array;
let zombies_day3_wave3 = new Array;
let zombies_day3_wave4 = new Array;
let zombies_day3_wave5 = new Array;
let zombies_day3_wave6 = new Array;
let zombies_day3_wave7 = new Array;
let zombies_day3_wave8 = new Array;
let zombies_day3_wave9 = new Array;
let zombies_day3_wave10 = new Array;

function zombie_day3_setup()
{
    //zombies 5 5 5 10 15
    for ( let count1 = 0; count1 < 1; count1++ )
    {
        zombies_day3_wave1[ count1 ] = new zombies( 1 );
    }
    for ( let count2 = 0; count2 < 1; count2++ )
    {
        zombies_day3_wave2[ count2 ] = new zombies( 1 );
    }
    for ( let count3 = 0; count3 < 1; count3++ )
    {
        zombies_day3_wave3[ count3 ] = new zombies( 1 );
    }
    for ( let count4 = 0; count4 < 1; count4++ )
    {
        zombies_day3_wave4[ count4 ] = new zombies( 1 );
    }
    for ( let count5 = 0; count5 < 1; count5++ )
    {
        zombies_day3_wave5[ count5 ] = new zombies( 1 );
    }
    // for ( let count6 = 0; count6 < 20; count6++ )
    // {
    //     zombies_day3_wave6[ count6 ] = new zombies();
    // }
    // for ( let count7 = 0; count7 < 20; count7++ )
    // {
    //     zombies_day3_wave7[ count7 ] = new zombies();
    // }
    // for ( let count8 = 0; count8 < 20; count8++ )
    // {
    //     zombies_day3_wave8[ count8 ] = new zombies();
    // }
    // for ( let count9 = 0; count9 < 20; count9++ )
    // {
    //     zombies_day3_wave9[ count9 ] = new zombies();
    // }
    // for ( let count10 = 0; count10 < 20; count10++ )
    // {
    //     zombies_day3_wave10[ count10 ] = new zombies();
    // }
}

function zombie_day3_draw()
{
    //call zombies
    zombie_day_update( zombies_day3_wave1 );
    //if stage1's zombie left 3 then next stage is starting
    if ( zombies_day3_wave1.length <= 3 )
    {
        zombie_day_update( zombies_day3_wave2 );
    }
    //if stage2's zombies and stage1's zombies left 4 then next stage is starting
    if ( zombies_day3_wave1.length + zombies_day3_wave2.length <= 3 )
    {
        zombie_day_update( zombies_day3_wave3 );
    }
    if ( zombies_day3_wave1.length + zombies_day3_wave2.length + zombies_day3_wave3.length <= 3 )
    {
        zombie_day_update( zombies_day3_wave4 );
    }
    if ( zombies_day3_wave1.length + zombies_day3_wave2.length + zombies_day3_wave3.length + zombies_day3_wave4
        .length <= 3 )
    {
        zombie_day_update( zombies_day3_wave5 );
    }
    if ( zombies_day3_wave1.length + zombies_day3_wave2.length + zombies_day3_wave3.length + zombies_day3_wave4.length +
        zombies_day3_wave5.length <= 15 )
    {
        zombie_day_update( zombies_day3_wave6 );
    }
    if ( zombies_day3_wave1.length + zombies_day3_wave2.length + zombies_day3_wave3.length + zombies_day3_wave4.length +
        zombies_day3_wave5.length + zombies_day3_wave6.length <= 15 )
    {
        zombie_day_update( zombies_day3_wave7 );
    }
    if ( zombies_day3_wave1.length + zombies_day3_wave2.length + zombies_day3_wave3.length + zombies_day3_wave4.length +
        zombies_day3_wave5.length + zombies_day3_wave6.length + zombies_day3_wave7.length <= 15 )
    {
        zombie_day_update( zombies_day3_wave8 );
    }
    if ( zombies_day3_wave1.length + zombies_day3_wave2.length + zombies_day3_wave3.length + zombies_day3_wave4.length +
        zombies_day3_wave5.length + zombies_day3_wave6.length + zombies_day3_wave7.length + zombies_day3_wave8.length <=
        15 )
    {
        zombie_day_update( zombies_day3_wave9 );
    }
    if ( zombies_day3_wave1.length + zombies_day3_wave2.length + zombies_day3_wave3.length + zombies_day3_wave4.length +
        zombies_day3_wave5.length + zombies_day3_wave6.length + zombies_day3_wave7.length + zombies_day3_wave8.length +
        zombies_day3_wave9.length <= 15 )
    {
        zombie_day_update( zombies_day3_wave10 );
    }

}