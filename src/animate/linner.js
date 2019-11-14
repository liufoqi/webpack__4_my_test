var linner = function (frameRate, animateTime, total) {
    let f = frameRate ? frameRate : 30
    let time = animateTime ? animateTime : 3000
    let total = total ? total : 100
    let speedArray=[]
    let totals=(1+frameRate)*frameRate/2
    let addData=total/totals
    for (var i=1;i<frameRate+1;i++){
        speedArray.push(i)
    }
}
export default linner