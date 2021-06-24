// Name       : Minjae Yu, Minki Cho
// Assignment : Final Project - Make a Game
// Course     : CS099
// Spring 2021

//day_count
let zombies_final_wave1 = new Array;
let zombies_final_wave2 = new Array;
let zombies_final_wave3 = new Array;
let zombies_final_wave4 = new Array;
let zombies_final_wave5 = new Array;
let zombies_final_wave6 = new Array;
let zombies_final_wave7 = new Array;
let zombies_final_wave8 = new Array;
let zombies_final_wave9 = new Array;
let zombies_final_wave10 = new Array;

function zombie_final_setup()
{
    //zombies
    for ( let count1 = 0; count1 < 30; count1++ )
    {
        zombies_final_wave1[ count1 ] = new zombies();
    }
    for ( let count2 = 0; count2 < 30; count2++ )
    {
        zombies_final_wave2[ count2 ] = new zombies();
    }
    for ( let count3 = 0; count3 < 30; count3++ )
    {
        zombies_final_wave3[ count3 ] = new zombies();
    }
        // for ( let count4 = 0; count4 < 100; count4++ )
        // {
        //     zombies_final_wave4[ count4 ] = new zombies();
        // }
        // for ( let count5 = 0; count5 < 100; count5++ )
        // {
        //     zombies_final_wave5[ count5 ] = new zombies();
        // }
}

    function zombie_final_draw()
    {
        //call zombies
        zombie_day_update( zombies_final_wave1 );
        //if stage1's zombie left 3 then next stage is starting
        if ( zombies_final_wave1.length <= 29 )
        {
            zombie_day_update( zombies_final_wave2 );
        }
        //if stage2's zombies and stage1's zombies left 4 then next stage is starting
        if ( zombies_final_wave1.length + zombies_final_wave2.length <= 59 )
        {
            zombie_day_update( zombies_final_wave3 );
        }
        if ( zombies_final_wave1.length + zombies_final_wave2.length + zombies_final_wave3.length <= 89 )
        {
            zombie_day_update( zombies_final_wave4 );
        }
        if ( zombies_final_wave1.length + zombies_final_wave2.length + zombies_final_wave3.length +
            zombies_final_wave4 <= 80 )
        {
            zombie_day_update( zombies_final_wave5 );
        }
    }
