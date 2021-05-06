class Slingshot{
    constructor(bodyA, coordinate){
        var options = {
            bodyA: bodyA,
            pointB: coordinate,
            stiffness: 0.004,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
        var start = this.sling.bodyA.position;
        var end = this.sling.pointB;
        strokeWeight(4);
        line(start.x, start.y, end.x, end.y);
        }
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body
    }
    
}