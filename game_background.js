function drawing_lines()//drawing lines
{
    for(let i = 0; i < 5; i++)
    {
        push()
        stroke(0)
        line(0, i * line_size , width , i * line_size)
        pop()
            
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
}

function drawing_wall()
{
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
}