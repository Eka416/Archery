class Playert {
    constructor(x,y,w,h) {
        var options = {
            isStatic: true
        }
    
    this.bob = Bodies.rectangle(x,y,w,h,options)
    this.w = w
    this.h = h
    this.image = loadImage("./assets/player.png")
    World.add(world,this.bob)
    }
    display() {
        var pos = this.bob.position
        var angle = this.bob.angle

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image, 0, 0, this.width, this.height)
        pop()
    }
}