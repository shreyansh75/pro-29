class Ground {
    constructor(){
       var  Option = {
           isStatic:true
       }
       this.body = Bodies.rectangle(450,390,900,20,Option);
      World . add (world,this.body) 

    }
    display(){
        fill ("green");
        rectMode(CENTER)
        rect (this.body.position.x,this.body.position.y,900,20)
    }
}