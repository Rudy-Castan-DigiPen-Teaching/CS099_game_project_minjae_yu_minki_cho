let back_img;
let gray_back_img;

function howToPlay_preload()
{
    back_img = loadImage( 'assets/images/game_background/back.png' );
    gray_back_img = loadImage( 'assets/images/game_background/back-focus.png' );
}


function howToPlay()
{
    clear();
    push();
    background( 110 );
    text( "You have to stop the zombies.\n" +
        "Move the crosshair by moving the mouse.\n" +
        "If you right click, the bullet goes out.\n" +
        "You can reload it with the r button.\n" +
        "Each day you choose your allies to sacrifice.:\n" +
        "The game ends when the wall's stamina is zero.\n" +
        "I pray for your victory.\n", 50, 50 );
    imageMode( CORNER );
    image( back_img, width - 80, height - 80 );
    pop();

    if ( mouseX < width - 30 && mouseX > width - 80 )
    {
        if ( mouseY < height - 30 && mouseY > height - 80 )
        {
            image( gray_back_img, width - 80, height - 80 );
            if ( mouseIsPressed )
            {
                game_mode = MAIN_MENU;
            }
        }
    }
}