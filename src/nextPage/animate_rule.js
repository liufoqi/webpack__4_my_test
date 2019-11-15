import animateType from '../animate/index'
var moveAnimate=function(options){
    if(typeof options!='object' ){
        console.error('type error')
        return false
        }
    var e=typeof(options.exerciseType)=='string'?options.exerciseType:'linner'
    if(!options.element){
    console.error('not element')
    return false
    }
    if(!options.cssProperty){
    console.error('not cssStyle')
    return false
    }
    var reverse=options.reverse?options.reverse:false
    var animateTime=options.animateTime?options.animateTime:2000
    var frameRate=options.frameRate?options.frameRate:60
    var f=frameRate*animateTime/1000
    var data=animateType[e](frameRate,animateTime,options.total)
    // console.log(data)
    var timeInterval=1000/frameRate
    moveAnimates(timeInterval,options.element,options.cssProperty,data,f,reverse)

}
   function moveAnimates(timeInterval,element,cssProperty,data,f,reverse){
     if(!reverse){
        var index=0
        var timer=setInterval(function(){
            element.style.cssText=cssProperty+':'+data[index]+'px'
            index+=1
            if(index>f-1)[
                clearInterval(timer)
            ]
          },timeInterval)
     }else{
        var index=f-1
        var timer=setInterval(function(){
            element.style.cssText=cssProperty+':'+data[index]+'px'
            index+=-1
            if(index<0)[
                clearInterval(timer)
            ]
          },timeInterval) 
     }  
   }
export default moveAnimate