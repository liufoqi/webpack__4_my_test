// const index = () => import('../main/index.js')
import page from './page.js'
var pageIndex = 0
//路由
// changePage(0)
var router=function changePage(e) {
    if (typeof e === 'number' && !pageIndex) {
        page.page[e]()
        pageIndex=e
    } else {
        // console.log()
        var child=e.path[0]
        var i = 0;
        removePage()
        while((child = child.previousSibling) != null) i++;
        page.page[i]()
        pageIndex=i
       
    }
}
function removePage() {
    var parent=document.getElementById("main");  //找到父元素
    var child=document.getElementById(page.pageId[pageIndex]);    //找到子元素  
    parent.removeChild(child);  
}
export default router
