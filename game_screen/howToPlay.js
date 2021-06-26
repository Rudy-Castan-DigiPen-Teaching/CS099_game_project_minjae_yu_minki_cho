// Name       : Minjae Yu, Minki Cho
// Assignment : Final Project - Make a Game
// Course     : CS099
// Spring 2021

let back_img;
let gray_back_img;
let mouse_img, keyboard_img;

function howToPlay_preload()
{
    back_img = loadImage( 'assets/images/game_background/back.png' );
    gray_back_img = loadImage( 'assets/images/game_background/back-focus.png' );
    mouse_img = loadImage('assets/images/game_background/mouse.png');
    keyboard_img = loadImage('assets/images/game_background/keyboard.png');
}

function howToPlay()
{
    clear();
    push();
    background( 220 );
    fill('black');
    textSize(30);
    text( "You have to stop rushing zombies.\n\n" +
        "Move the crosshair by moving the mouse.\n\n" +
        "Click the left mouse button to fire.\n\n" +
        "Press 'R' to reload.\n\n" +
        "Each day you choose one survivor to sacrifice.\n\n" +
        "The game ends when the wall's durability is zero.\n" +
        "I pray for your survival.\n", 50, 50 );
    imageMode( CORNER );
    image( back_img, width - 80, height - 80 );
    image(normal_zombie_img,540,5);
    image(fast_zombie_img,570,5);
    image(fat_zombie_img,600,5);

    image(mouse_img,630, 95);
    image(keyboard_img,350,240);

    image(ai_img, 680,310);
    image(ai2_img, 705,310);
    image(ai3_img, 730,310);
    image(ai4_img, 755,310);

    fill('red');
    rect(730,410,50,10);
    fill('green');
    rect(730,410,30,10);
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