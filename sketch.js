//map_background
let line_size = 100;
let wall_health = 300;

//game_mode
let game_mode;
const MAIN_MENU = 0;
const GAME_START = 1;
const CREDIT = 2;

//day_count
let zombies_day1 = [];

//bullet_zombie_distance
let x_dis;
let y_dis;
let distance;

//score
let score = 0;

function preload()
{
    bullet_image_preload();
    zombie_image_preload();
}

function setup()
{
    createCanvas( 800, 500 );

    //game's default is main_menu
    game_mode = MAIN_MENU;

    //zombies
    for ( let day1_count = 0; day1_count < 10; day1_count++ )
    {
        zombies_day1[ day1_count ] = new zombies();
    }

    //call background
    day1_background = new game_background();
}

function draw()
{
    background( 220 )

    if ( game_mode == MAIN_MENU )
    {
        main_menu();
    }

    if ( game_mode == GAME_START )
    {
        background( 220 )
        //draw alines and wall of game_background class
        day1_background.drawing_lines();
        day1_background.drawing_wall();

        //ball_fire
        bullet_setoff();

        //call zombies
        for ( let day1_count = 0; day1_count < zombies_day1.length; day1_count++ )
        {
            zombies_day1[ day1_count ].update();
        }
        crosshair()

        //bullet_zombie collision
        for ( let bullet_count = 0; bullet_count < bullet.length; bullet_count++ )
        {
            for ( let day1_count = 0; day1_count < zombies_day1.length; day1_count++ )
            {
                x_dis = zombies_day1[ day1_count ].x - bullet[ bullet_count ].x;
                y_dis = zombies_day1[ day1_count ].y - bullet[ bullet_count ].y;
                distance = sqrt( x_dis * x_dis + y_dis * y_dis );

                if ( distance < zombie_size )
                {
                    console.log( "hit" );
                    bullet.splice( bullet_count, 1 );
                    zombies_day1.splice( day1_count, 1 );
                    score++;
                    break;
                }
            }
        }

        //print the score in canvas.
        text( "your score is " + score + " !", width - 200, 10 );
    }
    if ( game_mode == CREDIT )
    {
        credit();
    }
}


//mouse crosshair
function crosshair()
{
    line( mouseX, mouseY, mouseX + 10, mouseY );
    line( mouseX, mouseY, mouseX - 10, mouseY );
    line( mouseX, mouseY, mouseX, mouseY + 10 );
    line( mouseX, mouseY, mouseX, mouseY - 10 );
    push();
    noFill();
    circle( mouseX, mouseY, 10);
    pop();
}

//This function is for main_menu game start, how to play and credit.
function keyPressed()
{
    if ( keyCode == ENTER )
    {
        clear();
        game_mode = GAME_START;
    }

    if ( keyCode == 'c' )
    {
        clear();
        game_mode = CREDIT;
    }
}