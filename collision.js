//zombie array and collision update
function zombie_day_update( day_count )
{
    for ( let count = 0; count < day_count.length; count++ )
    {
        day_count[ count ].update();
    }

    //bullet_zombie collision
    for ( let bullet_count = 0; bullet_count < bullet.length; bullet_count++ )
    {
        for ( let i = 0; i < day_count.length; i++ )
        {
            x_dis = day_count[ i ].x - bullet[ bullet_count ].x;
            y_dis = day_count[ i ].y - bullet[ bullet_count ].y;
            distance = sqrt( x_dis * x_dis + y_dis * y_dis );

            if ( distance < zombie_size )
            {
                //console.log( "hit" );
                day_count[ i ].collision_effects();
                day_count[ i ].zombie_hp -= gun_damage; //reduce zombie_hp
                bullet.splice( bullet_count, 1 );

                if ( day_count[ i ].zombie_hp <= 0 ) //remove zombie when zombie_hp is 0
                {
                    image( blood_img, day_count[ i ].x, day_count[ i ].y )
                    day_count.splice( i, 1 );
                    score++;
                }
                break;
            }
        }
    }

    //ai_bullet collision
    for ( let ai_bullet_count = 0; ai_bullet_count < ai_bullet_1.length; ai_bullet_count++ )
    {
        for ( let i = 0; i < day_count.length; i++ )
        {
            x_dis = day_count[ i ].x - ai_bullet_1[ ai_bullet_count ].x;
            y_dis = day_count[ i ].y - ai_bullet_1[ ai_bullet_count ].y;
            distance = sqrt( x_dis * x_dis + y_dis * y_dis );

            if ( distance < zombie_size )
            {
                day_count[ i ].collision_effects();
                day_count[ i ].zombie_hp -= gun_damage; //reduce zombie_hp
                ai_bullet_1.splice( ai_bullet_count, 1 );

                if ( day_count[ i ].zombie_hp <= 0 ) //remove zombie when zombie_hp is 0
                {
                    image( blood_img, day_count[ i ].x, day_count[ i ].y )
                    day_count.splice( i, 1 );
                    score++;
                }
                break;
            }
        }
    }

    for ( let ai_bullet_count = 0; ai_bullet_count < ai_bullet_2.length; ai_bullet_count++ )
    {
        for ( let i = 0; i < day_count.length; i++ )
        {
            x_dis = day_count[ i ].x - ai_bullet_2[ ai_bullet_count ].x;
            y_dis = day_count[ i ].y - ai_bullet_2[ ai_bullet_count ].y;
            distance = sqrt( x_dis * x_dis + y_dis * y_dis );

            if ( distance < zombie_size )
            {
                day_count[ i ].collision_effects();
                day_count[ i ].zombie_hp -= gun_damage; //reduce zombie_hp
                ai_bullet_2.splice( ai_bullet_count, 1 );

                if ( day_count[ i ].zombie_hp <= 0 ) //remove zombie when zombie_hp is 0
                {
                    image( blood_img, day_count[ i ].x, day_count[ i ].y )
                    day_count.splice( i, 1 );
                    score++;
                }
                break;
            }
        }
    }

    for ( let ai_bullet_count = 0; ai_bullet_count < ai_bullet_3.length; ai_bullet_count++ )
    {
        for ( let i = 0; i < day_count.length; i++ )
        {
            x_dis = day_count[ i ].x - ai_bullet_3[ ai_bullet_count ].x;
            y_dis = day_count[ i ].y - ai_bullet_3[ ai_bullet_count ].y;
            distance = sqrt( x_dis * x_dis + y_dis * y_dis );

            if ( distance < zombie_size )
            {
                day_count[ i ].collision_effects();
                day_count[ i ].zombie_hp -= gun_damage; //reduce zombie_hp
                ai_bullet_3.splice( ai_bullet_count, 1 );

                if ( day_count[ i ].zombie_hp <= 0 ) //remove zombie when zombie_hp is 0
                {
                    image( blood_img, day_count[ i ].x, day_count[ i ].y )
                    day_count.splice( i, 1 );
                    score++;
                }
                break;
            }
        }
    }

    for ( let ai_bullet_count = 0; ai_bullet_count < ai_bullet_4.length; ai_bullet_count++ )
    {
        for ( let i = 0; i < day_count.length; i++ )
        {
            x_dis = day_count[ i ].x - ai_bullet_4[ ai_bullet_count ].x;
            y_dis = day_count[ i ].y - ai_bullet_4[ ai_bullet_count ].y;
            distance = sqrt( x_dis * x_dis + y_dis * y_dis );

            if ( distance < zombie_size )
            {
                day_count[ i ].collision_effects();
                day_count[ i ].zombie_hp -= gun_damage; //reduce zombie_hp
                ai_bullet_4.splice( ai_bullet_count, 1 );

                if ( day_count[ i ].zombie_hp <= 0 ) //remove zombie when zombie_hp is 0
                {
                    image( blood_img, day_count[ i ].x, day_count[ i ].y )
                    day_count.splice( i, 1 );
                    score++;
                }
                break;
            }
        }
    }

}