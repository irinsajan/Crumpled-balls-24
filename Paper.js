class Paper {
    constructor(x,y,radius) {
        var options = {
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.radius = radius;
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }

}