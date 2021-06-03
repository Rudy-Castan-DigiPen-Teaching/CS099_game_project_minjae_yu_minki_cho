let new_text_font;

function font_preload()
{
    new_text_font = loadFont('assets/font/Montserrat-Bold.ttf');
}

function main_menu()
{
    push();
    textFont(new_text_font);
    textSize( 21 );
    text( 'press enter to start!', 20, 40 );
    text( '\n\n\n\npress c to see credit!', 20, 40 );
    pop();
}