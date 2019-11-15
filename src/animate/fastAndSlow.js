var fastAndSlow = function (frameRate, animateTime, total, fastTimes, priorityFast) {
    let f = frameRate ? frameRate : 30
    let time = animateTime ? animateTime : 3000
    let t = total ? total : 100
    let fastT = fastTimes ? fastTimes : 1
    let priority = priorityFast ? priorityFast : true
    var speedArray = []
    let totals = f * time / 1000 * (1 + fastT / 2)
    let frameRates = f * time / 1000
    let addData = Math.ceil(time / totals)
    let position = 0
    for (var i = 1; i <= frameRates; i++) {
        if (priority && i % 2 == 1) {
            if (position) {
                let newPosition = position + t / totals * (fastT + 1)
                speedArray.push(newPosition)
                position = newPosition
            } else {
                speedArray.push(t / totals * (fastT + 1))
                position = t / totals * (fastT + 1)
            }
        } else if (priority && i % 2 === 0) {
            if (position) {
                let newPosition = position + t / totals
                speedArray.push(newPosition)
                position = newPosition
            } else {
                position = t / totals
                speedArray.push(t / totals)
            }
        } else if (!priority && i % 2 === 1) {
            if (position) {
                let newPosition = position + t / totals
                speedArray.push(newPosition)
            } else {
                position = t / totals
                speedArray.push(t / totals)
            }
        } else {
            if (position) {
                let newPosition = position + t / totals * (fastT + 1)
                speedArray.push(newPosition)
            } else {
                speedArray.push(t / totals * (fastT + 1))
                position = t / totals * (fastT + 1)
            }
        }

    }
    return speedArray
}
export default fastAndSlow