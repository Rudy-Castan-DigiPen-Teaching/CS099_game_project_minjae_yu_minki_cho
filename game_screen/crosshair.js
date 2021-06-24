// Name       : Minjae Yoo, Minki Cho
// Assignment : Final Project - Make a Game
// Course     : CS099
// Spring 2021

//mouse crosshair
function crosshair()
{
    push();
    stroke(255);
    line( mouseX, mouseY, mouseX + 10, mouseY );
    line( mouseX, mouseY, mouseX - 10, mouseY );
    line( mouseX, mouseY, mouseX, mouseY + 10 );
    line( mouseX, mouseY, mouseX, mouseY - 10 );
    noFill();
    circle( mouseX, mouseY, 10);
    pop();

    if ( reload_check == true && player_gun_bullet != 7 )
    {
        push();
        rectMode( CENTER );
        fill( 'white' );
        rect( mouseX, mouseY + 20, reload_time, 5);
        pop();
    }

    if ( reload_check == false && player_gun_bullet == 0 )
    {
        push();
        textAlign( CENTER );
        fill ( 'red' );
        textSize( 15 );
        text( 'NO AMMO', mouseX, mouseY + 20 );
        pop();
    }
}