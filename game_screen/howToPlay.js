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
    background( 50 );
    fill('black');
    textSize(30);
    text( "You have to stop the zombies.\n" +
        "Move the crosshair by moving the mouse.\n" +
        "If you click the right mouse button, a bullet goes out.\n" +
        "You can reload by pressing 'R' button.\n" +
        "Each day you choose one survivor to sacrifice.:\n" +
        "The game ends when the wall's durability is zero.\n" +
        "I pray for your survival.\n", 50, 50 );
    imageMode( CORNER );
    image( back_img, width - 80, height - 80 );
    pop();
    push();
    if ( mouseX < width - 30 && mouseX > width - 80 )
    {
        if ( mouseY < height - 30 && mouseY > height - 80 )
        {
            imageMode( CORNER );
            image( gray_back_img, width - 80, height - 80 );
        }
    }
    pop();
}