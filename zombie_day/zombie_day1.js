//day_count
let zombies_day1_wave1 = new Array;
let zombies_day1_wave2 = new Array;
let zombies_day1_wave3 = new Array;
let zombies_day1_wave4 = new Array;
let zombies_day1_wave5 = new Array;
let zombies_day1_wave6 = new Array;
let zombies_day1_wave7 = new Array;
let zombies_day1_wave8 = new Array;
let zombies_day1_wave9 = new Array;
let zombies_day1_wave10 = new Array;

function zombie_day1_setup()
{
    //zombies 10 10 10 10 5
    for ( let count1 = 0; count1 < 10; count1++ )
    {
        zombies_day1_wave1[ count1 ] = new zombies( 0 );
    }
    // for ( let count2 = 0; count2 < 10; count2++ )
    // {
    //     zombies_day1_wave2[ count2 ] = new zombies( 0 );
    // }
    // for ( let count3 = 0; count3 < 10; count3++ )
    // {
    //     zombies_day1_wave3[ count3 ] = new zombies( 0 );
    // }
    // for ( let count4 = 0; count4 < 10; count4++ )
    // {
    //     zombies_day1_wave4[ count4 ] = new zombies( 0 );
    // }
    // for ( let count5 = 0; count5 < 5; count5++ )
    // {
    //     zombies_day1_wave5[ count5 ] = new zombies( 0 );
    // }
    // for ( let count6 = 0; count6 < 20; count6++ )
    // {
    //     zombies_day1_wave6[ count6 ] = new zombies();
    // }
    // for ( let count7 = 0; count7 < 20; count7++ )
    // {
    //     zombies_day1_wave7[ count7 ] = new zombies();
    // }
    // for ( let count8 = 0; count8 < 20; count8++ )
    // {
    //     zombies_day1_wave8[ count8 ] = new zombies();
    // }
    // for ( let count9 = 0; count9 < 20; count9++ )
    // {
    //     zombies_day1_wave9[ count9 ] = new zombies();
    // }
    // for ( let count10 = 0; count10 < 20; count10++ )
    // {
    //     zombies_day1_wave10[ count10 ] = new zombies();
    // }
}

function zombie_day1_draw()
{
    //call zombies
    zombie_day_update( zombies_day1_wave1 );
    //if stage1's zombie left 3 then next stage is starting
    if ( zombies_day1_wave1.length <= 3 )
    {
        zombie_day_update( zombies_day1_wave2 );
    }
    //if stage2's zombies and stage1's zombies left 4 then next stage is starting
    if ( zombies_day1_wave1.length + zombies_day1_wave2.length <= 3 )
    {
        zombie_day_update( zombies_day1_wave3 );
    }
    if ( zombies_day1_wave1.length + zombies_day1_wave2.length + zombies_day1_wave3.length <= 3 )
    {
        zombie_day_update( zombies_day1_wave4 );
    }
    if ( zombies_day1_wave1.length + zombies_day1_wave2.length + zombies_day1_wave3.length + zombies_day1_wave4 <= 3 )
    {
        zombie_day_update( zombies_day1_wave5 );
    }
    if ( zombies_day1_wave1.length + zombies_day1_wave2.length + zombies_day1_wave3.length + zombies_day1_wave4 +
        zombies_day1_wave5 <= 15 )
    {
        zombie_day_update( zombies_day1_wave6 );
    }
    if ( zombies_day1_wave1.length + zombies_day1_wave2.length + zombies_day1_wave3.length + zombies_day1_wave4 +
        zombies_day1_wave5 + zombies_day1_wave6 <= 15 )
    {
        zombie_day_update( zombies_day1_wave7 );
    }
    if ( zombies_day1_wave1.length + zombies_day1_wave2.length + zombies_day1_wave3.length + zombies_day1_wave4 +
        zombies_day1_wave5 + zombies_day1_wave6 + zombies_day1_wave7 <= 15 )
    {
        zombie_day_update( zombies_day1_wave8 );
    }
    if ( zombies_day1_wave1.length + zombies_day1_wave2.length + zombies_day1_wave3.length + zombies_day1_wave4 +
        zombies_day1_wave5 + zombies_day1_wave6 + zombies_day1_wave7 + zombies_day1_wave8 <= 15 )
    {
        zombie_day_update( zombies_day1_wave9 );
    }
    if ( zombies_day1_wave1.length + zombies_day1_wave2.length + zombies_day1_wave3.length + zombies_day1_wave4 +
        zombies_day1_wave5 + zombies_day1_wave6 + zombies_day1_wave7 + zombies_day1_wave8 + zombies_day1_wave9 <= 15 )
    {
        zombie_day_update( zombies_day1_wave10 );
    }
}