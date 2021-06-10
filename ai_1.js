let ai_1_survived = true;

class draw_ai_1
{
    constructor()
    {
        this.x = 50;
        this.y = ( ( 0 * line_size ) + line_size / 2 ) - 5;
    }

    draw()
    {
        push();
        imageMode( CENTER )

        if ( ai_bullet_fired === false )
        {
            image( ai_arm_img, this.x + 10, ( ( 0 * line_size ) + line_size / 2 ) - 5 );
        }
        else if ( ai_bullet_fired === true )
        {
            image( ai_gun_recoil_img, this.x + 10, ( ( 0 * line_size ) + line_size / 2 ) - 5 );
        }
        image( ai_img, this.x, ( ( 0 * line_size ) + line_size / 2 ) );
        pop();
    }
}