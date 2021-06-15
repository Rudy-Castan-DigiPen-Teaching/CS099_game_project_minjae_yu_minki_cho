let text_i = 500;

function story()
{
    push();
    text( "Now, a zombie situation has erupted in 2022.\n\n" +
        "Many people are infected with the zombie virus.\n\n" +
        "Scientists work hard day and night to develop a vaccine.\n\n" +
        "You are mercenaries employed by them. \n" +
        "But food and water are limited. We have to last four days.\n\n" +
        "I pray for your victory.\n\n", 50, text_i );

    if ( text_i <= 300 )
    {
        text( "press enter to start...", width / 2, height / 2 );
    }
    pop();
    text_i--;
    if ( text_i < -200 )
    {
        text_i = 500;
    }
}