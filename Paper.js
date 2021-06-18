class paper
{
    constructor()
    {
        var options =
        {
            'restitution':0.6,
            'frction':0.4,
            'density':0.6
        }

        this.image=loadImage("paper.png");
        this.body = Bodies.circle(100, 10, 36, options);
        this.r = 5;
        World.add(world, this.body);
    }

    display()
    {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 100 , 100);
        pop();
    }
}