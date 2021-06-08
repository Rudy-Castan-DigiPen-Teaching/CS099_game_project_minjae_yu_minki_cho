function mousePressed()
{
    if ( game_mode == GAME_START )
    {
        //fire bullets when the mouse position is within the shooting range except player lines
        if ( mouseX >= 100 && mouseX <= width && mouseY >= 0 && mouseY <= height )
        {
            bullet_fired = true;
            gun_recoil.reset();
            bullet.push( new Bullet( 50, height / 2, atan2( mouseY - height / 2, mouseX - 50 ) ) );
            image(fire_img,150, height / 2);
            bullet_sound.play();
        }
    }
}