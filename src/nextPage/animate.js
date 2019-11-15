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
        className:'',
        innerHTML:'linner动画',
       
    }
    var animate_start_btn= cdiv(animate_start_btnTarget_fastAndSlow)
    main_index.appendChild(animate_start_btn)
    animate_start_btn.onclick=startLinnerAnimates
    var animate_start_btnTarget_linner = {
        id: 'animate_start_btn1',
        name: 'div',
        className:'',
        innerHTML:'fastAndSlow动画',
       
    }
    var animate_start_btn1= cdiv(animate_start_btnTarget_linner)
    main_index.appendChild(animate_start_btn1)
    animate_start_btn1.onclick=startFastAnFdSlowAnimates
}
//linner动画
function startLinnerAnimates(){
    startAnimate('linner','animate_start_btn')
}
//linner
function startFastAnFdSlowAnimates(){
    startAnimate('fastAndSlow','animate_start_btn1')
}
export default {
    animateId:animateId,
    animateElement:animateElement
}