class PaperObject
 {

    constructor (x,y,r) {

        var paperOptions =  {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density :1.2
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.paper = Bodies.circle(x,y,r,paperOptions);
        
        this.image = loadImage("paper.png");
        World.add(world, this.paper);

       

    }

    display() {

        var pos = this.paper.position;
        push();
		translate(pos.x,pos.y);
        fill("white");
        imageMode(CENTER);
        image(this.image, 0,0,this.r,this.r);
        pop();
    }

}