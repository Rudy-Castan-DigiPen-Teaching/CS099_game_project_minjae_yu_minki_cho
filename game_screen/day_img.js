//this is for fadeout img.
let day1_transparency = 255,
    day2_transparency = 255,
    day3_transparency = 255,
    day4_transparency = 255,
    day5_transparency = 255

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
    if ( day1_transparency > 0 ) day1_transparency -= 1;
    tint( 255, day1_transparency );
    image( day1_img, width / 4, 80 );
    pop();
}

function day2_fadeout_img()
{
    push();
    scale( 3 );
    if ( day2_transparency > 0 ) day2_transparency -= 1;
    tint( 255, day2_transparency );
    image( day2_img, width / 4, 80 );
    pop();
}

function day3_fadeout_img()
{
    push();
    scale( 3 );
    if ( day3_transparency > 0 ) day3_transparency -= 1;
    tint( 255, day3_transparency );
    image( day3_img, width / 4, 80 );
    pop();
}

function day4_fadeout_img()
{
    push();
    scale( 3 );
    if ( day4_transparency > 0 ) day4_transparency -= 1;
    tint( 255, day4_transparency );
    image( day4_img, width / 4, 80 );
    pop();
}

function day5_fadeout_img()
{
    push();
    if ( day5_transparency > 0 ) day5_transparency -= 1;
    tint( 255, day5_transparency );
    image( day5_img, width / 4, 80 );
    pop();
}
