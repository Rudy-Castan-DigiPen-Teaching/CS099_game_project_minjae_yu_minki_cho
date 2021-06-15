let game_over_img;

let tint_value = 0;
function game_over_preload()
{
    game_over_img = loadImage( 'assets/images/game_background/gameover.png');
}

function game_over()
{
    ready_for_day1 = false;
    ready_for_day2 = false;
    ready_for_day3 = false;
    ready_for_day4 = false;
    ready_for_day5 = false;
    
    clear();
    background(50);
    cursor();
    push();
    textFont( new_text_font );
    textSize( 21 );
    text( 'press R to restart!', 20, 40 );
    text( 'your score is      ', 20, 440 );
    push();
    textSize(40);
    fill('black')
    text( score, 200, 440 );
    pop();
    imageMode(CORNER)
    if ( tint_value < 255 ) tint_value += 1;
    tint( 255, tint_value );
    image(game_over_img, 100,100);
    pop();
}