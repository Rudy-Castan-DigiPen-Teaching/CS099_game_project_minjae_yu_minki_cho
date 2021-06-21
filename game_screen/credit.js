function credit()
{
    clear();
    push();
    background( 50 );
    imageMode( CORNER );
    image( back_img, width - 80, height - 80 );
    
    fill('black');
    text("Hello~ I am",200,250);
    text("Hello~ I am",670,250);

    push();
    if ( mouseX < width - 30 && mouseX > width - 80 )
    {
        if ( mouseY < height - 30 && mouseY > height - 80 )
        {
            imageMode(CORNER );
            image( gray_back_img, width - 80, height - 80 );
        }
    }
    pop();
} 