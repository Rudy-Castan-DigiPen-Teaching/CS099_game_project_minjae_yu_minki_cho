function credit()
{
    clear();
    push();
    background( 110 );
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