var bullet = [];

class Bullet
{
    constructor( x, y, angle )
    {
        this.x = x;
        this.y = y;
        this.angle = angle
        this.speed = 5;


        //maps mouse location to angle
    }

    drawball()
    {

        stroke( 255 );
        fill( 200, 0, 0 );
        circle( this.x, this.y, 5 );
        this.x += this.speed * cos( this.angle );
        this.y += this.speed * sin( this.angle );
    }

}

function mousePressed()
{
    bullet.push( new Bullet( 50, height / 2, atan2( mouseY - height / 2, mouseX - width / 2 ) ) );
}

function activateballgun()
{
    for ( var i = 0; i < bullet.length; i++ )
    {
        bullet[ i ].drawball();

        if ( bullet[ i ].x <= 0 || bullet[ i ].y <= 0 || bullet[ i ].x >= width || bullet[ i ].y >= height )
        {
            bullet.splice( i, 1 );
        } //if ball goes out of frame, delete the ball from the array. 
    }
}