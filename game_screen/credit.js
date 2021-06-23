function credit()
{
    clear();
    push();
    background( 60 );
    imageMode( CORNER );
    image( back_img, width - 80, height - 80 );
    
    image(menu_img,0,0);

    rect(30,120,300,360);
    rect(660,120,300,100);
    fill(0);
    textSize(40);
    textFont(new_text_font);
    text("CREDIT",30,60);
    //fill(9, 218, 25);
    textSize(20);
    text("THE TEAM",40,150);
    text("Thanks To",670,150);
    textSize(15);
    text("Corders",40, 190);
    text("Artist",40, 240);
    text("Game design",40, 300);
    text("Sound design",40, 350);
    textSize(11);
    text("Minjae Yoo \nMinki Cho",130,210);
    text("Minjae Yoo \nMinki Cho",130,260);
    text("Minjae Yoo \nMinki Cho",130,320);
    text("Minjae Yoo \nMinki Cho",130,370);
    text("BlinkFarm. www.youtube.com/blinkfarm",670,180);

    


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