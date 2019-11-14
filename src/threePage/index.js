import '../css/main.css'
import cdiv from '../createTarget/index'
const threePageId='threePage'
var threePage=function threePage(){
    var main =document.getElementById('main')
    var main_indexTarget = { 
        id:threePageId,
        name:'div',
        className:'main_index',
        innerText:'我是第三页'
     }
    var main_index=cdiv(main_indexTarget)
    // main_index.innerText='我是index页面'
    main.appendChild(main_index)
}
export default  {
    threePageId:threePageId,
    threePage:threePage
} 