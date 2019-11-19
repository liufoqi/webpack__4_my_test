import cdiv from '../createTarget/index'
import startAnimate from './startAnimate'
const animateId = 'animate_move'
const animateElement = function () {
    var main = document.getElementById('nextPage')
    var main_indexTarget = {
        id: animateId,
        name: 'div',
        className:'main_index',
        innerHTML: ''
    }
    var main_index = cdiv(main_indexTarget)
    main.appendChild(main_index)
    var animate_start_btnTarget_fastAndSlow = {
        id: 'animate_start_btn',
        name: 'div',
        className:'animate_start_btn',
        innerHTML:'linner动画',
       
    }
    var animate_start_btn= cdiv(animate_start_btnTarget_fastAndSlow)
    main_index.appendChild(animate_start_btn)
    animate_start_btn.onclick=startLinnerAnimates
    var animate_start_btnTarget_linner = {
        id: 'animate_start_btn1',
        name: 'div',
        className:'animate_start_btn',
        innerHTML:'fastAndSlow动画',
       
    }
    var animate_start_btn1= cdiv(animate_start_btnTarget_linner)
    main_index.appendChild(animate_start_btn1)
    animate_start_btn1.onclick=startFastAnFdSlowAnimates
    var animate_start_btnTarget_moreRanslow = {
        id: 'animate_start_btn2',
        name: 'div',
        className:'animate_start_btn',
        innerHTML:'moreRanslow动画',    
    }
    var animate_start_btn2= cdiv(animate_start_btnTarget_moreRanslow)
    main_index.appendChild(animate_start_btn2)
    animate_start_btn2.onclick=startMoreRanslowAnimates
    var animate_start_btnTarget_moreRanFast = {
        id: 'animate_start_btn3',
        name: 'div',
        className:'animate_start_btn',
        innerHTML:'moreRanFast动画',    
    }
    var animate_start_btn3= cdiv(animate_start_btnTarget_moreRanFast)
    main_index.appendChild(animate_start_btn3)
    animate_start_btn3.onclick=startMoreRanFastAnimates
    var animate_start_btnTarget_fastAndSlowFast = {
        id: 'animate_start_btn4',
        name: 'div',
        className:'animate_start_btn',
        innerHTML:'fastAndSlowFast动画',    
    }
    var animate_start_btn4= cdiv(animate_start_btnTarget_fastAndSlowFast)
    main_index.appendChild(animate_start_btn4)
    animate_start_btn4.onclick=startFastAndSlowFastAnimates
    var animate_start_btnTarget_slowAndFastSlow = {
        id: 'animate_start_btn5',
        name: 'div',
        className:'animate_start_btn',
        innerHTML:'slowAndFastSlow动画',    
    }
    var animate_start_btn5= cdiv(animate_start_btnTarget_slowAndFastSlow)
    main_index.appendChild(animate_start_btn5)
    animate_start_btn5.onclick=startSlowAndFastSlowAnimates
}
//linner动画
function startLinnerAnimates(){
    startAnimate('linner','animate_start_btn')
    // startAnimate('fastAndSlow','animate_start_btn1')
    // startAnimate('moreRanslow','animate_start_btn2')
    // startAnimate('moreRanFast','animate_start_btn3')
 
}
//fastAndSlow
function startFastAnFdSlowAnimates(){
    // startAnimate('linner','animate_start_btn')
    startAnimate('fastAndSlow','animate_start_btn1')
    // startAnimate('moreRanslow','animate_start_btn2')
    // startAnimate('moreRanFast','animate_start_btn3')
}
//moreRanslow
function startMoreRanslowAnimates(){
    // startAnimate('linner','animate_start_btn')
    // startAnimate('fastAndSlow','animate_start_btn1')
    startAnimate('moreRanslow','animate_start_btn2')
    // startAnimate('moreRanFast','animate_start_btn3')
}
//moreRanFast
function startMoreRanFastAnimates(){
    // startAnimate('linner','animate_start_btn')
    // startAnimate('fastAndSlow','animate_start_btn1')
    // startAnimate('moreRanslow','animate_start_btn2')
    startAnimate('moreRanFast','animate_start_btn3')
} 
//fastAndSlowFast
function startFastAndSlowFastAnimates(){
    // startAnimate('linner','animate_start_btn')
    // startAnimate('fastAndSlow','animate_start_btn1')
    // startAnimate('moreRanslow','animate_start_btn2')
    // startAnimate('moreRanFast','animate_start_btn3')
    startAnimate('fastAndSlowFast','animate_start_btn4')
} 
//slowAndFastSlow
function startSlowAndFastSlowAnimates(){
    // startAnimate('linner','animate_start_btn')
    // startAnimate('fastAndSlow','animate_start_btn1')
    // startAnimate('moreRanslow','animate_start_btn2')
    // startAnimate('moreRanFast','animate_start_btn3')
    startAnimate('fastAndSlowFast','animate_start_btn4')
    startAnimate('slowAndFastSlow','animate_start_btn5')
} 
export default {
    animateId:animateId,
    animateElement:animateElement
}