import item_name from './item_name/index'
import './css/index.css';
import cdiv from './createTarget/index'
import index from './main/index.js'
import router from './router/index'
function component() {
    var mainTarget = {
        id: 'main',
        name: 'div',
        className: 'main'
    }
    var main = cdiv(mainTarget)
    var titleTarget = {
        id: 'title',
        name: 'div',
        className: 'title',
        // innerText:'',  
    }
    var title = cdiv(titleTarget);
    main.appendChild(title)
    item_name.title_menu.map(function (item, index) {
        var btnTarget = {
            id: 'index' + index,
            name: 'button',
            className: 'title_menu',
            innerText: item,
            onclick:router,
        }
        var btn = cdiv(btnTarget);
        title.appendChild(btn)
    })
    document.body.appendChild(main)
}
component()
//默认首页
router(1)

