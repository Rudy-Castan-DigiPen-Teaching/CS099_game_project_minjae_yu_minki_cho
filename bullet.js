var bullet = [];
let bullet_img;

function bullet_image_preload()
{
    bullet_img = loadImage('assets/images/bullet.png');
}

class Bullet
{
    constructor( x, y, angle )
    {
        this.x = x;
        this.y = y;
        this.angle = angle
        this.speed = 15;  //can change value to set bullet speed.
    }

    //This function is to draw bullet
    draw_bullet()
    {
        push()
        imageMode(CENTER)
        image(bullet_img,this.x,this.y)
        pop()
        this.x += this.speed * cos( this.angle );
        this.y += this.speed * sin( this.angle );
    }

}

//Later we could change value in to meaningful name.
function mousePressed()
{
    if ( game_mode == GAME_START )
    {
        if(mouseX >= 100 && mouseX <= width && mouseY >= 0 && mouseY <= height)
        {
            bullet.push( new Bullet( 50, height / 2, atan2( mouseY - height / 2, mouseX - 50 ) ) );
        }
    }
}

//To draw bullets for the loop and erase if bullets are outside of canvas.
function bullet_setoff()
{
    for ( var i = 0; i < bullet.length; i++ )
    {
        bullet[ i ].draw_bullet();

        if ( bullet[ i ].x <= 0 || bullet[ i ].y <= 0 || bullet[ i ].x >= width || bullet[ i ].y >= height )
        {
            bullet.splice( i, 1 );
        } //if ball goes out of frame, delete the ball from the array.
    }
}