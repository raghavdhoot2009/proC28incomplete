class mango {
constructor(x, y,width,height) {
var options = {
isStatic:true,
restitution:0,
friction:1,
}

this.body = Bodies.circle(x, y, width, height, options);
this.width = width;
this.height = height;
this.image = loadImage("Plucking mangoes/mango.png");
World.add(world, this.body);

}

display(){
var angle = this.body.position;
push();
translate(this.body.position.x, this.body.position.y);
imageMode(CENTER);
image(this.image, 0, 0, this.width, this.height);
pop();

}
}