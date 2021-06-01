let line_size = 100;
let wall_health = 300;

function preload()
{

}

function setup()
{
    createCanvas(800,500)

    //zombies
    zombies_day1 = [];
    for(let day1_count = 0; day1_count < 10; day1_count++)
    {
        zombies_day1[day1_count] = new zombies()
    }

    //call background
    day1_background = new game_background();
}

function draw()
{
    background(220)

    //draw alines and wall of game_background class
    day1_background.drawing_lines();
    day1_background.drawing_wall();

    //call zombies
    for(let day1_count = 0; day1_count < 10; day1_count++)
    {
        zombies_day1[day1_count].update();
        zombies_day1[day1_count].draw();
    }

    crosshair()
}

//mouse crosshair
function crosshair()
{
    line(mouseX,mouseY,mouseX+10,mouseY);
    line(mouseX,mouseY,mouseX-10,mouseY);
    line(mouseX,mouseY,mouseX,mouseY+10);
    line(mouseX,mouseY,mouseX,mouseY-10);
}