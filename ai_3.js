class draw_ai_3
{
    constructor()
    {
        this.x = 50;
        this.y = ( ( 3 * line_size ) + line_size / 2 ) - 5;
    }

    draw()
    {
        push();
        imageMode( CENTER );
        image( ai3_img, this.x, ( (3 * line_size ) + line_size / 2 ) );

        if ( ai_bullet_fired === false )
        {
            image( ai3_arm_img, this.x + 10, ( ( 3 * line_size ) + line_size / 2 ) - 5 );
        }
        else if ( ai_bullet_fired === true )
        {
            image( ai3_gun_recoil_img, this.x + 10, ( ( 3 * line_size ) + line_size / 2 ) - 5 );
        }
        pop();
    }
}