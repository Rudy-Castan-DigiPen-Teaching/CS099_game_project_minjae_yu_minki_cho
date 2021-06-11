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

/* old draw_ai class
class draw_ai
{
    constructor()
    {
        this.x = 50;
        this.y = line_size / 2;
    }

    draw()
    {
        draw_ai per line
        for ( let i = 0; i < 5; i++ )
        {
            if ( i == 0 )
            {
                push();
                imageMode( CENTER )
                image( ai_img, this.x, ( ( i * line_size ) + line_size / 2 ) )

                if ( ai_bullet_fired === false )
                {
                    image( ai_arm_img, this.x + 10, ( ( i * line_size ) + line_size / 2 ) - 5 )
                }
                else if ( ai_bullet_fired === true )
                {
                    image( ai_gun_recoil_img, this.x + 10, ( ( i * line_size ) + line_size / 2 ) - 5 );
                }
                pop();
            }
            else if ( i == 1 )
            {
                push();
                imageMode( CENTER )
                image( ai2_img, this.x, ( ( i * line_size ) + line_size / 2 ) )

                if ( ai_bullet_fired === false )
                {
                    image( ai2_arm_img, this.x + 10, ( ( i * line_size ) + line_size / 2 ) - 5 )
                }
                else if ( ai_bullet_fired === true )
                {
                    image( ai2_gun_recoil_img, this.x + 10, ( ( i * line_size ) + line_size / 2 ) - 5 );
                }
                pop();
            }
            else if ( i == 3 )
            {
                push();
                imageMode( CENTER )
                image( ai3_img, this.x, ( ( i * line_size ) + line_size / 2 ) )

                if ( ai_bullet_fired === false )
                {
                    image( ai3_arm_img, this.x + 10, ( ( i * line_size ) + line_size / 2 ) - 5 )
                }
                else if ( ai_bullet_fired === true )
                {
                    image( ai3_gun_recoil_img, this.x + 10, ( ( i * line_size ) + line_size / 2 ) - 5 );
                }
                pop();
            }
            else if ( i == 4 )
            {
                push();
                imageMode( CENTER )
                image( ai4_img, this.x, ( ( i * line_size ) + line_size / 2 ) )

                if ( ai_bullet_fired === false )
                {
                    image( ai4_arm_img, this.x + 10, ( ( i * line_size ) + line_size / 2 ) - 5 )
                }
                else if ( ai_bullet_fired === true )
                {
                    image( ai4_gun_recoil_img, this.x + 10, ( ( i * line_size ) + line_size / 2 ) - 5 );
                }
                pop();
            }
        }
    }
}
*/


// ★TODO) damage is  not implement yet.
class ai_bullet
{
    constructor(x, y, speed, damage)
    {
        this.x = x;
        this.y = y;
        this.distance = 0;
        this.speed = speed * ( deltaTime / 1000 );
        this.damage = damage;
    }

    move()
    {
        this.distance = this.distance + this.speed;
    }

    show()
    {
        push(); // remember the fill and stroke before
        fill( 50, 50, 50);
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
    //To change the value of fameCount value, I divided into each if statement.
    // class ai_bullet's constructor(x, y, speed = 2, damage)
    if ( frameCount % 60 == 1 )
    {
        //ai_bullets = [] this is in sketch.js
        ai_bullet_1.push(new Ai_bullet_1());
        ai_gun_recoil_img.reset();
        ai_bullet_fired = true;
    }

    if (frameCount % 70 == 1 )
    {
        ai_bullet_2.push(new Ai_bullet_2());
        ai2_gun_recoil_img.reset();
        ai_bullet_fired = true;
    }

    if (frameCount % 50 == 1 )
    {
        ai_bullet_3.push(new Ai_bullet_3());
        ai3_gun_recoil_img.reset();
        ai_bullet_fired = true;
    }
    if (frameCount % 30 == 1 )
    {
        ai_bullet_4.push(new Ai_bullet_4());
        ai4_gun_recoil_img.reset();
        ai_bullet_fired = true;
    }
     
    for ( var i = 0; i < ai_bullet_1.length; i++ )
    {
        ai_bullet_1[ i ].run();
  
        if ( ai_bullet_1[ i ].x >= width )
        {
            ai_bullet_1.splice( i, 1 );
        } 
    }


    for ( var i = 0; i < ai_bullet_2.length; i++ )
    {
        ai_bullet_2[ i ].run();
  
        if ( ai_bullet_2[ i ].x >= width )
        {
            ai_bullet_2.splice( i, 1 );
        } 
    }

    for ( var i = 0; i < ai_bullet_3.length; i++ )
    {
        ai_bullet_3[ i ].run();
  
        if ( ai_bullet_3[ i ].x >= width )
        {
            ai_bullet_3.splice( i, 1 );
        } 
    }

    for ( var i = 0; i < ai_bullet_4.length; i++ )
    {
        ai_bullet_4[ i ].run();
  
        if ( ai_bullet_4[ i ].x >= width )
        {
            ai_bullet_4.splice( i, 1 );
        } 
    }
}