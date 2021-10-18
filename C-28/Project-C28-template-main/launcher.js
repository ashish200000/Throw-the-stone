class launcher{
   constructor(body,anchor){
       var  options = {
           bodyA:body,
           pointB:anchor,
           stiffness:0.01,
           length:1
       }
       this.bodyA = body
       this.pointB=anchor
       this.launcher = Constraint.create(options)
       World.add(world,this.launcher)
   }
   attach(body){ 
       this.launcher.bodyA=body;
     } 

    fly(){this.launcher.bodyA=null}
    
 /*Launch(bodyA){
        this.bodyA.launcher.bodyA = bodyA
    }
   */
        attach(body){ this.launcher.bodyA=body; } 
    

    display(){
     
         // var pos = this.body.position;
        
        if(this.launcher.bodyA) {
         var pointA=this.bodyA.position;
          var pointB=this.pointB;
          strokeWeight(2);
          line(pointA.x,pointA.y,pointB.x,pointB.y);

         }
        
    }
}