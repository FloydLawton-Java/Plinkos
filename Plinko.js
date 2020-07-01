class Plinko {
    constructor(x,y) {
      var options = {
        isStatic: true,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.radius= 10;
      this.body = Bodies.circle(x,y, this.radius, options);
     // this.image = loadImage("Images/paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("pink");
      ellipseMode(RADIUS);
      ellipse(0, 0, this.radius, this.radius);
      //imageMode(CENTER);
      //image(this.image, 0, 0, this.radius, this.radius);
      pop();
     //circle(pos.x, pos.y, this.radius);
    }
  };