const timerChange=function timerChange(initialVelocity,acceleratedSpeed,executeCount){
    if(initialVelocity){
       var  a=initialVelocity
    }else{
        var a=200
    }
    if(acceleratedSpeed){
        var  b=acceleratedSpeed
     }else{
        var b=20
     }
     if(executeCount){
        var c=executeCount
     }else{
        var c=10
     }
    var timer=setTimeout(function(){
      a+=b
    },a)

}
function setTime(){
   
}
export default timerChange
