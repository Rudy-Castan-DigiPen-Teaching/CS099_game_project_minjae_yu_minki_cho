let ai_bullet_fired = false;

let ai_1_damage = 2;
let ai_2_damage = 1;
let ai_3_damage = 2;
let ai_4_damage = 4;

let ai_1_speed = 60;
let ai_2_speed = 70;
let ai_3_speed = 50;
let ai_4_speed = 30;

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

function ai_bullet_setoff()
{
    //To change the value of fameCount value, I divided into each if statement.
    // class ai_bullet's constructor(x, y, speed = 2, damage)
    if ( frameCount % ai_1_speed == 1 )
    {
        
        //ai_bullets = [] this is in sketch.js
        if(check_ai_1_picked)
        {
        ai_bullet_1.push(new Ai_bullet_1());
        ai_gun_recoil_img.reset();
        ai_bullet_fired = true;
        }
    }

    if (frameCount % ai_2_speed == 1 )
    {
        if(check_ai_2_picked)
        {
        ai_bullet_2.push(new Ai_bullet_2());
        ai2_gun_recoil_img.reset();
        ai_bullet_fired = true;
        }
    }

    if (frameCount % ai_3_speed == 1 )
    {
        if(check_ai_3_picked)
        {
        ai_bullet_3.push(new Ai_bullet_3());
        ai3_gun_recoil_img.reset();
        ai_bullet_fired = true;
        }
    }
    if (frameCount % ai_4_speed == 1 )
    {
        if(check_ai_4_picked)
        {
        ai_bullet_4.push(new Ai_bullet_4());
        ai4_gun_recoil_img.reset();
        ai_bullet_fired = true;
        }
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