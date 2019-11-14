import '../css/main.css'
import cdiv from '../createTarget/index'
const nextPageId='nextPage'
var nextPage=function nextPage(){
    var main =document.getElementById('main')
    var main_indexTarget = { 
        id:nextPageId,
        name:'div',
        className:'main_index',
        innerHTML:''
     }
    var main_index=cdiv(main_indexTarget)
    // main_index.innerText='我是index页面'
    main.appendChild(main_index)
}
export default  {
    nextPageId:nextPageId,
    nextPage:nextPage
} 