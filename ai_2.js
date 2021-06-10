class draw_ai_2
{
    constructor()
    {
        this.x = 50;
        this.y = ( ( 1 * line_size ) + line_size / 2 ) - 5;
    }

    draw()
    {

        push();
        imageMode( CENTER )
        image( ai2_img, this.x, ( ( 1 * line_size ) + line_size / 2 ) )

        if ( ai_bullet_fired === false )
        {
            image( ai2_arm_img, this.x + 10, ( ( 1 * line_size ) + line_size / 2 ) - 5 )
        }
        else if ( ai_bullet_fired === true )
        {
            image( ai2_gun_recoil_img, this.x + 10, ( ( 1 * line_size ) + line_size / 2 ) - 5 );
        }
        pop();
    }
}