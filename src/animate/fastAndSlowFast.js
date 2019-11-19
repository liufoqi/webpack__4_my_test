var fastAndSlowFast =function (frameRate, animateTime, total, fastTimes, priorityFast) {
    let f = frameRate ? frameRate : 60
    let time = animateTime ? animateTime : 3000
    let t = total ? total : 100
    let fastT = fastTimes ? fastTimes : 1
    let frameRates = f * time / 1000
    let priority = priorityFast ? priorityFast : true
    var speedArray = []
    let totals =0
    for(var i = 10;i <= f * time / 1000/2;i++){
        totals += i;
    }
    let addData = total/(totals*2)
    let adds=0
    for (var i = Math.ceil(frameRates/2); i>0; i--) {
        adds+=i*addData
        speedArray.push(adds) 
    }
    for (var i=0;i<= Math.floor(frameRates/2); i++) {
       if(i=== Math.floor(frameRates/2)){
            adds=total
        }else{
            adds+=i*addData
        }
        speedArray.push(adds) 
    }
    console.log(speedArray[179])
    return speedArray
}
export default fastAndSlowFast