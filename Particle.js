class Particle {
    constructor(x, y) {
      var options = {
          'restitution':1,
          'friction':0.7,
          'density':0.01,
          'isStatic': false
      }
  
      this.body = Bodies.circle(x, y, 3, options);
      this.color = color(random(0, 255), random(0, 255), random(0, 255));

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(this.color);
      ellipseMode(RADIUS);
      ellipse(0, 0, 5);
      pop();
    }
  };