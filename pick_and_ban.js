function pick_and_ban()
{
    if ( ai_1_survived )
    {
        if ( ai_1.x - 30 < mouseX && mouseX < ai_1.x + 30 && ai_1.y - 30 < mouseY && mouseY < ai_1.y + 30 )
        {
            circle( ai_1.x, ai_1.y, 10 );
            text("My family is waiting. Please save me! ",ai_1.x+50, ai_1.y);

            if ( mouseIsPressed )
            {
                check_ai_1_picked = false;
                ai_1_survived = false;
                ai_picked = true;

            }
        }
    }

    if ( ai_2_survived )
    {
        if ( ai_2.x - 30 < mouseX && mouseX < ai_2.x + 30 && ai_2.y - 30 < mouseY && mouseY < ai_2.y + 30 )
        {
            circle( ai_2.x, ai_2.y, 10 );
            text("I am ready to die. I want to save others",ai_2.x+50, ai_2.y);
            if ( mouseIsPressed )
            {
                check_ai_2_picked = false;
                ai_2_survived = false;
                ai_picked = true;
            }
        }
    }

    if ( ai_3_survived )
    {
        if ( ai_3.x - 30 < mouseX && mouseX < ai_3.x + 30 && ai_3.y - 30 < mouseY && mouseY < ai_3.y + 30 )
        {
            circle( ai_3.x, ai_3.y, 10 );
            text("I can kill zombie well.",ai_3.x+50, ai_3.y);

            if ( mouseIsPressed )
            {
                check_ai_3_picked = false;
                ai_3_survived = false;
                ai_picked = true;
            }
        }
    }

    if ( ai_4_survived )
    {
        if ( ai_4.x - 30 < mouseX && mouseX < ai_4.x + 30 && ai_4.y - 30 < mouseY && mouseY < ai_4.y + 30 )
        {
            circle( ai_4.x, ai_4.y, 10 );
            text("PLEASE DON'T KILL ME. I am good in programing",ai_4.x+50, ai_4.y);

            if ( mouseIsPressed )
            {
                check_ai_4_picked = false;
                ai_4_survived = false;
                ai_picked = true;
            }
        }
    }
}