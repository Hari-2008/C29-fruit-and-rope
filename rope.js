class Rope
  {
    //nlink=> number of rectangles to make the rope
    //pointA => point where you want to hang the rope
    constructor(nlink, pointA)
    {
      this.nlink = nlink
      const group = Body.nextGroup(true);
      /* Matter.Composites.stack(xx, yy, columns, rows, columnGap, rowGap, callback) */
      const rects = Composites.stack(100, 100, this.nlink, 1, 5, 5, function(x, y) {
        return Bodies.rectangle(x, y, 30, 5, { collisionFilter: { group: group } });
        //return Bodies.rectangle(x, y, 30, 5);
      });
      
  this.pointA = pointA;
  //Matter.Composites.chain(composite, xOffsetA, yOffsetA, xOffsetB, yOffsetB, options)
  this.body = Composites.chain(rects, 0.1, 0, -0.6, 0, {stiffness: 0.1, length: 0.1, render: {type: 'line'}});
      
  World.add(engine.world, this.body);
  
      
    Composite.add(rects, Constraint.create({
    pointA: this.pointA,
    bodyB: rects.bodies[0],
    pointB: {x: -25, y: 0},
    length:10,
    stiffness: 0.1
  }));
      
    }
    
    break()
    { //Matter.Composite.clear(this.rope,true);
      this.body = null;
    }
    
    show()
    {
      if(this.body!=null)
        {
          for (let i = 0; i < this.body.bodies.length; i++)
          {
              this.drawVertices(this.body.bodies[i].vertices);
              console.log(this.body.bodies[i].vertices)
             }
        }
    }
    
    drawVertices(vertices) 
    {
      beginShape();
      fill('#FFF717')
      noStroke();
      
      console.log("vertices length: "+vertices.length)
      for (let i = 0; i < vertices.length; i++) 
      {
       vertex(vertices[i].x, vertices[i].y);
       }
      endShape(CLOSE);
   }

  /* showConstraints(constraints) 
   {
     if(constraints!=null)
     {
    for (let i = 0; i < constraints.length; i++) {
      this.drawConstraint(constraints[i]);
    }
  }
  }
  
  drawConstraint(constraint) {
    if(constraint!=null)
      {
    const offsetA = constraint.pointA;
    let posA = {x:0, y:0};
    if (constraint.bodyA) {
      posA = constraint.bodyA.position;
    }
    const offsetB = constraint.pointB;
    let posB = {x:0, y:0};
    if (constraint.bodyB) {
      posB = constraint.bodyB.position;
    }
    push()
    strokeWeight(4);
    stroke(255);
    line(
      posA.x + offsetA.x,
      posA.y + offsetA.y,
      posB.x + offsetB.x,
      posB.y + offsetB.y
    );
    pop();
      }
  }*/
  
    
  }