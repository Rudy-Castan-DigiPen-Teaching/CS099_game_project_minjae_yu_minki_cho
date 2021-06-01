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
}

function draw()
{
    background(220)

    //drawing lines
    for(let i = 0; i < 5; i++)
    {
        line(0, i * line_size , width , i * line_size)
        
        if(i === 2)//player position
        {
            fill('orange')
            circle(50, ((i * line_size) + line_size / 2), 25)
        }
        else//AI position
        {
            fill('blue')
            circle(50, ((i * line_size) + line_size / 2), 25)
        }
    }

    //wall
    rectMode(CENTER)
    fill('brown')
    rect(line_size,height/2,10,height)

    //wall health bar test
    /*rect(width/2,height/2,wall_health,20)
    if(wall_health >= 0)
    {
        wall_health--;
    }*/

    //call zombies
    for(let day1_count = 0; day1_count < 10; day1_count++)
    {
        zombies_day1[day1_count].update();
        zombies_day1[day1_count].draw();
    }
}