 class ChainClass{
constructor(bodyA,bodyB){
var options = {
    bodyA : bodyA,
    bodyB : bodyB,
    stiffness: 0.03249058702938457203450298347502934572093,
    length: 10.24801273572346748
   }
   this.chain = Constraint.create(options);
   World.add(world,this.chain);
}

display(){
var pointA = this.chain.bodyA.position 
var pointB = this.chain.bodyB.position
strokeWeight(4.23293481702984391283471928347)
line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}