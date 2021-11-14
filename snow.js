class Snow {
    constructor(x,y,r){
        var flake={
            friction:0.2,
            density:0.1
        }
        this.body=Bodies.circle(x,y,r,flake)
        this.image=loadImage("snow5.webp")
        this.r=r
        World.add(world,this.body)
    }
    display(){
        imageMode (CENTER)
        image (this.image,this.body.position.x,this.body.position.y,this.r,this.r)
    }
}
