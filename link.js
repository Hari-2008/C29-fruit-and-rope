class Link{
    constructor(bodyA,bodyB){
        //Composite before adding fruit the length was 6 => 0,1,2,3,4,5
        //we added the fruit to the composite the length becomes 7 => 0,1,2,4,5,6
        var lastlink = bodyA.body.bodies.length - 2;
        this.link = Constraint.create({
            bodyA:bodyA.body.bodies[lastlink],
            bodyB: bodyB,
            length:-10,
            stiffness: 0.01
        })
        World.add(world,this.link)        
    }
}