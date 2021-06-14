let img1, img2 

function credit_preload()
{
    img1 = loadImage("/assets/images/zombies/normal_zombie.png");
    img2 = loadImage("/assets/images/zombies/white_zombie.png");
}

function credit()
{
    clear();
    push();
    background( 110 );
    imageMode( CORNER );
    image( back_img, width - 80, height - 80 );

    scale(7.0);
    image(img1,20,0)
    image(img2,90,0);
    
    pop();
    text("Hello~ I am",200,250);
    text("Hello~ I am",670,250);
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