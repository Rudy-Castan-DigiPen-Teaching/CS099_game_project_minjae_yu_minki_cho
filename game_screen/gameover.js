// Name       : Minjae Yoo, Minki Cho
// Assignment : Final Project - Make a Game
// Course     : CS099
// Spring 2021

let game_over_img;
let text_y_pos2 = 500;

let tint_value = 0;

function game_over_preload()
{
    game_over_img = loadImage( 'assets/images/game_background/gameover.png' );
}

function game_over()
{
    push();
    clear();
    background( 50 );
    cursor();

    textSize( 25 );
    text( 'press R to restart!', 20, 40 );
    text( 'your score is      ', 20, 440 );
    textSize( 40 );
    fill( 'black' );
    text( score, 200, 440 );
    imageMode( CORNER )
    
    if ( tint_value < 255 ) tint_value += 1;
    tint( 255, tint_value );
    image( game_over_img, 100, 100 );
    pop();
}

function game_ending()
{
    clear();
    background( 50 );
    cursor();
    fadeout();
    if ( screen_transparency == 255 )
    {
        push();
        textSize( 20 );
        fill( 'black' );
        text( "Suddenly a lot of zombies appeared before the rescue team arrived.\n\n" +
            "I fought the zombies hard, but there are too many...\n\n" +
            "Even ammo is almost empty...\n\n" +
            "No... NO!!! \n\n" +
            "In the end, all the survivors died.\n\n", 70, text_y_pos2 );
        text_y_pos2--;
        pop();
        if ( text_y_pos2 < 150 )
        {
            push();
            textSize( 25 );
            textFont( new_text_font );
            text( 'Press R to restart!', 20, 40 );
            text( ' Your score is      ', 20, 440 );
            textSize( 40 );
            fill( 'black' );
            text( score, 200, 440 );
            imageMode( CORNER );
            if ( tint_value < 255 ) tint_value += 1;
            tint( 255, tint_value );
            image( game_over_img, 100, 100 );
            pop();
        }
    }
}