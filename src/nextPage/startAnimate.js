import animate from './animate_rule'
import { totalmem } from 'os'
const isAnimate ={}
var startAnimate = function startAnimate(exerciseType,elementId) {
   if (!isAnimate[elementId]) {
        var options = {
            element: document.getElementById(elementId),
            cssProperty: 'left',
            total: 200,
            frameRate:60,
            animateTime:3000,
            exerciseType:exerciseType,
            reverse:false,
        }
        animate(options)
        isAnimate[elementId]= true
    } else {
        var options = {
            element: document.getElementById(elementId),
            cssProperty: 'left',
            total:200,
            frameRate:60,
            animateTime:3000,
            reverse:true,
            exerciseType:exerciseType
        }
        animate(options)
        isAnimate[elementId] = false
    }

}

export default startAnimate
