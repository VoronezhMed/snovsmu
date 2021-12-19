function CIGS() {
    console.log(`ok`)
    stage = acgraph.create('sno-cigs-canvas');
console.log(`ok`)

// draw the square
stage.rect(25, 50, 350, 300);

// draw the circle
stage.circle(200, 250, 100);

// draw the triangle
stage.path()
    .moveTo(25, 350)
    .lineTo(200, 50)
    .lineTo(375, 350)
    .close();

// draw the wand in the middle
stage.path()
    .moveTo(200, 50)
    .lineTo(200, 350);

}// create a stage for the Deathly Hallows symbol
