let ai_4_survived = true;

class draw_ai_4
{
    constructor()
    {
        this.x = 50;
        this.y = ( ( 4 * line_size ) + line_size / 2 ) - 5;
    }

    draw()
    {
        push();
        imageMode( CENTER );

        if ( ai_bullet_fired === false )
        {
            image( ai4_arm_img, this.x + 10, ( ( 4 * line_size ) + line_size / 2 ) - 5 );
        }
        else if ( ai_bullet_fired === true )
        {
            image( ai4_gun_recoil_img, this.x + 10, ( ( 4 * line_size ) + line_size / 2 ) - 5 );
        }
        image( ai4_img, this.x, ( ( 4 * line_size ) + line_size / 2 ) );
        pop();
    }
}