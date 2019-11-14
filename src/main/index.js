import './index.css'
import './'
import cdiv from '../createTarget/index'
const indexId='indexPage'
var index=function index(){
    // console.log('我是index页面')
    var main =document.getElementById('main')
    var iframe='<iframe id="idFrame" name="idFrame" src="https://www.baidu.com/s?wd=js" height = "100%" width = "100%" frameborder="0" scrolling="auto" style = "" ></iframe>'
    var main_indexTarget = { 
        id:indexId,
        name:'div',
        className:'main_index',
        innerHTML:iframe
     }
    var main_index=cdiv(main_indexTarget)
    // main_index.innerText='我是index页面'
    main.appendChild(main_index)
    var main_indexTarget = { 
        id:indexId,
        name:'div',
        className:'main_index',
        innerText:''
     }
}
export default  {
    indexId:indexId,
    index:index
} 
