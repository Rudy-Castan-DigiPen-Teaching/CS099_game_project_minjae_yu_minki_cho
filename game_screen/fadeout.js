let black_screen_img;

let alpha = 0;
let alpha1 = 0

function fadeout_preload()
{
    black_screen_img = loadImage( 'assets/images/game_background/black_screen.png' );

}

function fadeout()
{
    push();
    if ( alpha < 255 ) 
    {
        alpha += 2.5;
        tint( 0, alpha );
        imageMode( CORNER );
        image( black_screen_img, 0, 0 );
    }
    pop();
}

function fadeout1()
{
    push();
    if ( alpha1 < 255 ) 
    {
        fill("white");
        textSize(30);
        text("rescue team will come 30min later... I have to keep fighting!",width/9,height/2);
        alpha1 += 1;
        tint( 0, alpha1 );
        imageMode( CORNER );
        image( black_screen_img, 0, 0 );
    }
    pop();
}