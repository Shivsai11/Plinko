class Plinko {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':0.01,
          'isStatic': true
      }
  
      this.body = Bodies.circle(x, y, 15, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      fill("white");
      ellipse(pos.x, pos.y, 15);
      pop();
    }
  };