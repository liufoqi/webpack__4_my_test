var moreRanFast =function (frameRate, animateTime, total, fastTimes, priorityFast) {
    let f = frameRate ? frameRate : 60
    let time = animateTime ? animateTime : 3000
    let t = total ? total : 100
    let fastT = fastTimes ? fastTimes : 1
    let frameRates = f * time / 1000
    let priority = priorityFast ? priorityFast : true
    var speedArray = []
    let totals =0
    for(var i = 1;i <= f * time / 1000;i++){
        totals += i;
    }
    
    let addData = total/totals
    let adds=0
    for (var i = 1; i<=frameRates; i++) {
        adds+=i*addData
        speedArray.push(adds) 
    }
    console.log(speedArray[179])
    return speedArray
}
export default moreRanFast