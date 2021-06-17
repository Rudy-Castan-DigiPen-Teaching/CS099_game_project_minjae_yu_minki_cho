//this is for fadeout img.
let life = 255,
    life1 = 255,
    life2 = 255,
    life3 = 255,
    life4 = 255,
    life5 = 255;

function day_fadeout_img_preload()
{
    day1_img = loadImage( 'assets/images/day1.png' );
    day2_img = loadImage( 'assets/images/day2.png' );
    day3_img = loadImage( 'assets/images/day3.png' );
    day4_img = loadImage( 'assets/images/day4.png' );
    day5_img = loadImage( 'assets/images/day5.png')
}

function day1_fadeout_img()
{
    push();
    scale( 3 );
    if ( life > 0 ) life -= 1;
    tint( 255, life );
    image( day1_img, width / 4, 80 );
    pop();
}

function day2_fadeout_img()
{
    push();
    scale( 3 );
    if ( life1 > 0 ) life1 -= 1;
    tint( 255, life1 );
    image( day2_img, width / 4, 80 );
    pop();
}

function day3_fadeout_img()
{
    push();
    scale( 3 );
    if ( life2 > 0 ) life2 -= 1;
    tint( 255, life2 );
    image( day3_img, width / 4, 80 );
    pop();
}

function day4_fadeout_img()
{
    push();
    scale( 3 );
    if ( life3 > 0 ) life3 -= 1;
    tint( 255, life3 );
    image( day4_img, width / 4, 80 );
    pop();
}

function day5_fadeout_img()
{
    push();
    scale( 3 );
    if ( life4 > 0 ) life4 -= 1;
    tint( 255, life4 );
    image( day5_img, width / 4, 80 );
    pop();
}
