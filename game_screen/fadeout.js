// Name       : Minjae Yoo, Minki Cho
// Assignment : Final Project - Make a Game
// Course     : CS099
// Spring 2021

let black_screen_img;

let screen_transparency = 0;
let final_day_screen_transparency = 0;
let text_transparency = 250;

function fadeout_preload()
{
    black_screen_img = loadImage( 'assets/images/game_background/black_screen.png' );
}

function fadeout()
{
    push();
    if ( screen_transparency < 255 )
    {
        screen_transparency += 2.5;
        tint( 0, screen_transparency );
        imageMode( CORNER );
        image( black_screen_img, 0, 0 );
    }
    pop();
}

function final_day_fadeout()
{
    push();
    if ( final_day_screen_transparency < 255 )
    {
        fill( "white" );
        textSize( 30 );
        text( "Rescue team will come 30min later... I have to keep fighting!", width / 9 + 10, text_transparency );
        final_day_screen_transparency += 2.5;
        text_transparency++;
        tint( 0, final_day_screen_transparency );
        imageMode( CORNER );
        image( black_screen_img, 0, 0 );
    }
    pop();
}