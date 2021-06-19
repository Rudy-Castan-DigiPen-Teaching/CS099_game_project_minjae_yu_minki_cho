let game_over_img;
let text_y_pos2 = 500;

let tint_value = 0;

function game_over_preload()
{
    game_over_img = loadImage( 'assets/images/game_background/gameover.png' );
}

function game_over()
{
    ready_for_day1 = false;
    ready_for_day2 = false;
    ready_for_day3 = false;
    ready_for_day4 = false;
    ready_for_day5 = false;

    clear();
    background( 50 );
    cursor();
    push();
    textFont( new_text_font );
    textSize( 21 );

    fill( 'black' );
    text( "An unknown disease occurred in 2022.\n\n" +
        "People are infected, changed into zombies.\n\n" +
        "And now you, the ex-military soldier have to survive with other\n\n" +
        "survivors from zombies until a rescue team arrives.\n\n" +
        "However, since lack of supplies, it is forced to choose one\n\n" +
        "survivor per day.\n\n" +
        "Who do you gonna choose? Their fate is on your hand...\n\n", 70, text_y_pos2 );

    textSize( 15 )
    if ( text_y_pos2 > -350 )
    {
        text( 'Press Enter to skip', width - 250, height / 2 )
    }
    pop();
    text_y_pos2--;
    if ( text_y_pos2 < -350 )
    {
        textSize(25);
        text( 'press R to restart!', 20, 40 );
        text( 'your score is      ', 20, 440 );
        push();
        textSize( 40 );
        fill( 'black' );
        text( score, 200, 440 );
        pop();
        imageMode( CORNER )
        if ( tint_value < 255 ) tint_value += 1;
        tint( 255, tint_value );
        image( game_over_img, 100, 100 );
    }
    pop();
}