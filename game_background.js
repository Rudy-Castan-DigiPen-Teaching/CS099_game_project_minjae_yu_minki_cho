function preload_characters()
{
    character_img = loadImage('assets/images/player(no arms).png')
    character_arm_img = loadImage('assets/images/arm_and_gun.png')
    gun_recoil = loadImage('assets/images/gun_recoil.gif')
}

function drawing_lines_characters()//drawing lines and characters
{
    for(let i = 0; i < 5; i++)
    {
        push();
        stroke(0);
        line(0, i * line_size , width , i * line_size);
        pop();
            
        if(i === 2)//player position
        {
            fill('orange');
            imageMode(CENTER);
            push();
            translate(56, ((i * line_size) + line_size / 2) - 3)
            if( mouseX >= line_size && mouseX <= width && mouseY >= line_size && mouseY <= height - line_size )
            {
                rotate(atan2( mouseY - ((i * line_size) + line_size / 2) , mouseX - 60 ));
            }
            else if( mouseX >= line_size && mouseX <= width && mouseY >= 0 && mouseY < line_size )
            {
                rotate(atan2( -100 , mouseX - 60 ));
            }
            else if( mouseX >= line_size && mouseX <= width && mouseY > height - line_size && mouseY <= height )
            {
                rotate(atan2( 100 , mouseX - 60 ));
            }
            
            if(bullet_fired === true)
            {
                image(gun_recoil, 0, 0);
            }
            else
            {
                image(character_arm_img, 0, 0); 
            }
            pop();
            image(character_img, 50, ((i * line_size) + line_size / 2));
        }
        else//AI position
        {
            fill('blue');
            circle(50, ((i * line_size) + line_size / 2), 25);;
        }
    }
}