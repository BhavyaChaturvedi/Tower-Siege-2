class Polygon {
    constructor(x, y, r, angle) {
      var options ={
          'restitution':0.8,
          'friction':0.3,
          'density':2
      }
      
      this.body = Bodies.circle(x, y, r/2, options);
      this.r=r/2;
      this.image = loadImage("polygon.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle)
      imageMode(RADIUS);
    image(this.image, 0, 0, 40, 40);
      pop();
    }
  };