//mouse crosshair
function crosshair()
{
    push();
    stroke(255);
    line( mouseX, mouseY, mouseX + 10, mouseY );
    line( mouseX, mouseY, mouseX - 10, mouseY );
    line( mouseX, mouseY, mouseX, mouseY + 10 );
    line( mouseX, mouseY, mouseX, mouseY - 10 );
    noFill();
    circle( mouseX, mouseY, 10);
    pop();
}