let ai_bullet_fired = false;

function ai_image_preload()
{
    //ai_1
    ai_img = loadImage('assets/images/player_and_ai/ai_1.png');
    ai_arm_img = loadImage('assets/images/player_and_ai/ai_1_arm_and_gun.png')
    ai_gun_recoil_img = loadImage('assets/images/player_and_ai/ai_1_gun_recoil.gif');
    //ai_2
    ai2_img = loadImage('assets/images/player_and_ai/ai_2.png');
    ai2_arm_img = loadImage('assets/images/player_and_ai/ai_2_arm_and_gun.png')
    ai2_gun_recoil_img = loadImage('assets/images/player_and_ai/ai_2_gun_recoil.gif');
    //ai_3
    ai3_img = loadImage('assets/images/player_and_ai/ai_3.png');
    ai3_arm_img = loadImage('assets/images/player_and_ai/ai_3_arm_and_gun.png')
    ai3_gun_recoil_img = loadImage('assets/images/player_and_ai/ai_3_gun_recoil.gif');
    //ai_4
    ai4_img = loadImage('assets/images/player_and_ai/ai_4.png');
    ai4_arm_img = loadImage('assets/images/player_and_ai/ai_4_arm_and_gun.png')
    ai4_gun_recoil_img = loadImage('assets/images/player_and_ai/ai_4_gun_recoil.gif');
}

class draw_ai
{
    constructor()
    {
        this.x = 50;
        this.y = line_size / 2; 
    }

    draw()
    {
        //draw_ai per line
        for ( let i = 0; i < 5; i++)
        {
            if ( i == 0 )
            {
                push();
                imageMode( CENTER )
                image( ai_img, this.x, ((i * line_size) + line_size / 2) )

                if ( ai_bullet_fired === false )
                {
                    image( ai_arm_img, this.x + 10, ((i * line_size) + line_size / 2) - 5 )
                }
                else if ( ai_bullet_fired === true )
                {
                    image( ai_gun_recoil_img, this.x + 10, ((i * line_size) + line_size / 2) - 5 );
                }
                pop();
            }
            else if ( i == 1 )
            {
                push();
                imageMode( CENTER )
                image( ai2_img, this.x, ((i * line_size) + line_size / 2) )

                if ( ai_bullet_fired === false )
                {
                    image( ai2_arm_img, this.x + 10, ((i * line_size) + line_size / 2) - 5 )
                }
                else if ( ai_bullet_fired === true )
                {
                    image( ai2_gun_recoil_img, this.x + 10, ((i * line_size) + line_size / 2) - 5 );
                }
                pop();
            }
            else if ( i == 3 )
            {
                push();
                imageMode( CENTER )
                image( ai3_img, this.x, ((i * line_size) + line_size / 2) )

                if ( ai_bullet_fired === false )
                {
                    image( ai3_arm_img, this.x + 10, ((i * line_size) + line_size / 2) - 5 )
                }
                else if ( ai_bullet_fired === true )
                {
                    image( ai3_gun_recoil_img, this.x + 10, ((i * line_size) + line_size / 2) - 5 );
                }
                pop();
            }
            else if ( i == 4 )
            {
                push();
                imageMode( CENTER )
                image( ai4_img, this.x, ((i * line_size) + line_size / 2) )

                if ( ai_bullet_fired === false )
                {
                    image( ai4_arm_img, this.x + 10, ((i * line_size) + line_size / 2) - 5 )
                }
                else if ( ai_bullet_fired === true )
                {
                    image( ai4_gun_recoil_img, this.x + 10, ((i * line_size) + line_size / 2) - 5 );
                }
                pop();
            }
        }
    }
}

class ai_bullet
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.distance = 0;
        this.speed = 2 * ( deltaTime / 1000 );
    }

    move()
    {
        this.distance = this.distance + this.speed;
    }

    show()
    {
        push(); // remember the fill and stroke before
        fill( 0, 0, 0);
        //stroke( 255, 0, 0, 155);
        this.x += this.distance;
        if ( this.x < width )
        {
            ellipse( this.x, this.y, 40, 5 );
        }
        pop();  //restore fill and stroke
    }

    run()
    {
        this.show();
        this.move();
    }
}

function ai_bullet_setoff()
{
    if( game_mode == GAME_START )
    {
        ai_bullets.push( new ai_bullet( 90, line_size / 2 - 10 ) );
        ai_bullets.push( new ai_bullet( 90, 1 * line_size + line_size / 2 - 10 ) );
        ai_bullets.push( new ai_bullet( 90, 3 * line_size + line_size / 2 - 10 ) );
        ai_bullets.push( new ai_bullet( 90, 4 * line_size + line_size / 2 - 10 ) );
        ai_bullet_fired = true;
        ai_gun_recoil_img.reset();
        ai2_gun_recoil_img.reset();
        ai3_gun_recoil_img.reset();
        ai4_gun_recoil_img.reset();
    }
     
    for ( var i = 0; i < ai_bullets.length; i++ )
    {
        ai_bullets[ i ].run();
  
        if ( ai_bullets[ i ].x >= width )
        {
            ai_bullets.splice( i, 1 );
        } 
    }
}