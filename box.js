class Box {
    constructor(x,y,w,h){
       var  Option = {
           restitution:0.4
       }
       this.body = Bodies.rectangle(x,y,w,h,Option);
       this.w=w
       this.h=h
      World . add (world,this.body) 

    }
    display(){
        var angle = this.body. angle
        push ()
        translate (this.body.position.x,this.body.position.y)
        rotate (angle)
       // fill ("green");
        rectMode(CENTER)
        rect (0,0,this.w, this.h)
        pop ()
    }
}