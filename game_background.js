function drawing_lines()//drawing lines
{
    for(let i = 0; i < 5; i++)
    {
        push();
        stroke(0);
        line(0, i * line_size , width , i * line_size);
        pop();
            
        if(i === 2)//player position
        {
            fill('orange')
            circle(50, ((i * line_size) + line_size / 2), 25);
        }
        else//AI position
        {
            fill('blue')
            circle(50, ((i * line_size) + line_size / 2), 25);
        }
    }
}

