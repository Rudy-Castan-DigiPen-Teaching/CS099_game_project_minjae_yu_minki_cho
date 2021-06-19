let new_text_font;
let tombstone_img;
let menu_img, menu_focus_img;

let x = 230;
let x2 = 100

function font_preload()
{
    new_text_font = loadFont( 'assets/font/Montserrat-Bold.ttf' );
    tombstone_img = loadImage( 'assets/images/game_background/tombstone.png' );
    menu_img = loadImage( 'assets/images/game_background/menu.png' );
    menu_focus_img = loadImage( 'assets/images/game_background/menu_focus.png' );
    main_menu_bg = loadImage( 'assets/images/game_background/main_menu_background.png')
    button_sound = loadSound( 'assets/sounds/button_sound.mp3' );
}

function main_menu()
{
    push();
    imageMode( CORNER )
    background( main_menu_bg );
    image( tombstone_img, 300, 180 );
    image( tombstone_img, 410, 120 );
    image( fast_zombie_img, 10, 40 );
    image( tombstone_img, 80, 90 );
    image( tombstone_img, 50, 400 );
    image( tombstone_img, 80, 220 );
    image( tombstone_img, 380, 320 );
    image( tombstone_img, 160, 120 );
    image( normal_zombie_img, 110, 310 );
    image( normal_zombie_img, 80, 230 );
    image( fast_zombie_img, x2, 440 );
    image( fast_zombie_img, 370, 110 );
    image( fat_zombie_img, 430, 10 );
    image( fat_zombie_img, x, 60 );

    x -= 1;
    x2 -= 2;
    if ( x < -10 || x2 < 1 - 10 )
    {
        x = width + 10;
        x2 = width + 10;
    }

    image( menu_img, 600, 80 );
    image( menu_img, 600, 210 );
    image( menu_img, 600, 340 );


    if ( mouseX < 950 && mouseX > 600 )
    {
        if ( mouseY < 180 && mouseY > 80 )
        {
            image( menu_focus_img, 600, 80 );
            if ( mouseIsPressed )
            {
                game_mode = STORY;
            }
        }
    }
    if ( mouseX < 950 && mouseX > 600 )
    {
        if ( mouseY < 310 && mouseY > 210 )
        {
            image( menu_focus_img, 600, 210 );
            if ( mouseIsPressed )
            {
                game_mode = HOW_TO_PLAY;
            }
        }
    }
    if ( mouseX < 950 && mouseX > 600 )
    {
        if ( mouseY < 440 && mouseY > 340 )
        {
            image( menu_focus_img, 600, 340 );
            if ( mouseIsPressed )
            {
                game_mode = CREDIT;
            }
        }
    }

    if ( game_mode == STORY )
    {
        button_sound.play();
    }
    else if ( game_mode == HOW_TO_PLAY )
    {
        button_sound.play();
    }
    else if ( game_mode == CREDIT )
    {
        button_sound.play();
    }

    pop();
    push();
    textFont( new_text_font );
    fill('black');
    textSize( 21 );
    //text( 'press enter to start!', 20, 40 );
    //text( '\n\n\n\npress c to see credit!', 20, 40 );
    text( 'PLAY', 650, 130 );
    text( 'HOW TO PLAY', 650, 260 );
    text( 'CREDIT', 650, 390 );
    pop();
}