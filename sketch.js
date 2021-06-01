let line_size = 100;
let wall_health = 300;
let game_mode;
const MAIN_MENU = 0;
const GAME_START = 1;

function preload()
{

}

function setup()
{
    createCanvas( 800, 500 )
    game_mode = 0;

    //zombies
    zombies_day1 = [];
    for ( let day1_count = 0; day1_count < 10; day1_count++ )
    {
        zombies_day1[ day1_count ] = new zombies()
    }

    //call background
    day1_background = new game_background();
}

function draw()
{
    background( 220 )

    clear();
    if ( game_mode == MAIN_MENU )
    {
        push();
        textSize( 21 );
        text( 'press enter to start', 20, 40 )
        pop();
    }
    if ( game_mode == GAME_START )
    {
        //draw alines and wall of game_background class
    day1_background.drawing_lines();
    day1_background.drawing_wall();
    activateballgun();
	print(bullet.length);
    //call zombies
    for ( let day1_count = 0; day1_count < 10; day1_count++ )
    {
        zombies_day1[ day1_count ].update();
        zombies_day1[ day1_count ].draw();
    }

    crosshair()
    }
    

    
}

//mouse crosshair
function crosshair()
{
    line( mouseX, mouseY, mouseX + 10, mouseY );
    line( mouseX, mouseY, mouseX - 10, mouseY );
    line( mouseX, mouseY, mouseX, mouseY + 10 );
    line( mouseX, mouseY, mouseX, mouseY - 10 );
}




function keyPressed()
{
    if ( keyCode == ENTER )
    {
        game_mode = GAME_START;
    }
}