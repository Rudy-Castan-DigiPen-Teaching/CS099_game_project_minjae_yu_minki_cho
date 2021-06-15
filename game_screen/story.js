let text_y_pos = 500;

function story()
{
    push();

    /*text( "Now, a zombie situation has erupted in 2022.\n\n" +
        "Many people are infected with the zombie virus.\n\n" +
        "Scientists work hard day and night to develop a vaccine.\n\n" +
        "You are mercenaries employed by them. \n" +
        "But food and water are limited. We have to last four days.\n\n" +
        "I pray for your victory.\n\n", 50, text_i );*/

    textSize(20)
    fill('black');
    text( "An unknown disease occurred in 2022.\n\n" +
        "People are infected, changed into zombies.\n\n" +
        "And now you, the ex-military soldier have to survive with other\n\n" +
        "survivors from zombies until a rescue team arrives.\n\n" +
        "However, since lack of supplies, it is forced to choose one\n\n" +
        "survivor per day.\n\n" +
        "Who do you gonna choose? Their fate is on your hand...\n\n", 70, text_y_pos );

    textSize(15)
    text( 'Press Enter to start the game', width - 250, height/2 )
    pop();
    text_y_pos--;
    if ( text_y_pos < -350 )
    {
        text_y_pos = 500;
    }
}