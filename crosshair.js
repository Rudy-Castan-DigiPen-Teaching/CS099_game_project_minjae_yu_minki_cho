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