let new_text_font;
let tombstone_img;
let menu_img, menu_focus_img;

function font_preload()
{
    new_text_font  = loadFont('assets/font/Montserrat-Bold.ttf');
    tombstone_img  = loadImage('assets/images/game_background/tombstone.png');
    menu_img       = loadImage('assets/images/game_background/menu.png');
    menu_focus_img = loadImage('assets/images/game_background/menu_focus.png')
}

function main_menu()
{
    background(110);
    image(tombstone_img,300,180);
    image(tombstone_img,410,120);
    image(tombstone_img,110,300);
    image(tombstone_img,340,60);
    image(tombstone_img,410,450);
    image(tombstone_img,50,400);
    image(tombstone_img,80,220);
    image(tombstone_img,380,320);
    image(normal_zombie_img,110,310);
    image(normal_zombie_img,80,230);
    image(fast_zombie_img,170,440);
    image(fast_zombie_img,370,110);
    image(fat_zombie_img,430,10);
    image(fat_zombie_img,330,290);

    image(menu_img,600,80);
    image(menu_img,600,210);
    image(menu_img,600,340);

    

    if(mouseX<950&&mouseX>600)
    {
        if(mouseY<230&&mouseY>80)
        {
            image( menu_focus_img ,600,80);
            if(mouseIsPressed)
            {
                game_mode = GAME_START;
            }
        }
    }
    if(mouseX<950&&mouseX>600)
    {
        if(mouseY<360&&mouseY>210)
        {
            image( menu_focus_img ,600,210);
            if(mouseIsPressed)
            {
                game_mode = GAME_START;
            }
        }
    }
    if(mouseX<950&&mouseX>600)
    {
        if(mouseY<490&&mouseY>340)
        {
            image( menu_focus_img ,600,340);
            if(mouseIsPressed)
            {
                game_mode = CREDIT;
            }
        }
    }
    push();
    textFont(new_text_font);
    textSize( 21 );
    text( 'press enter to start!', 20, 40 );
    text( '\n\n\n\npress c to see credit!', 20, 40 );
    text('PLAY',650,130);
    text('HOW TO PLAY',650,260);
    text('CREDIT',650,390);
    pop();
}