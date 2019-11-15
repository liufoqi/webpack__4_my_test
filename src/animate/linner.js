var linner = function (frameRate, animateTime, total) {
    let f = frameRate ? frameRate : 30
    let time = animateTime ? animateTime : 3000
    let t = total ? total : 100
    var speedArray=[]
    let totals=f*time/1000
    let addData=Math.ceil(time/totals)
    for (var i=1;i<totals+1;i++){
        speedArray.push(t/totals*i)
    }
    return speedArray
}
export default linner