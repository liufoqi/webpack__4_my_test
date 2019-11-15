// const index = () => import('../main/index.js')
import index  from '../main/index.js'
import nextPage from '../nextPage/index.js'
import threePage from '../threePage/index.js'
const page = [
    index.index,
    nextPage.nextPage,
    threePage.threePage
]
const pageId=[
    index.indexId, 
    nextPage.nextPageId,
    threePage.threePageId
]
var pageIndex = 0
//路由
// changePage(0)
var router=function changePage(e) {
    if (typeof e === 'number' && !pageIndex) {
        page[e]()
        pageIndex=e
    } else {
        var child=e.path[0]
        var i = 0;
        removePage()
        while((child = child.previousSibling) != null) i++;
        page[i]()
        pageIndex=i
       
    }
}
function removePage() {
    var parent=document.getElementById("main");  //找到父元素
    var child=document.getElementById(pageId[pageIndex]);    //找到子元素  
    parent.removeChild(child);  
}
export default router
