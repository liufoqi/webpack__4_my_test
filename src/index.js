import _ from 'lodash';
import './style.css';
import Icon from './img/icon.png';
import Data from './xml/data.xml'
import printMe from './print.js'
if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
   }
function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = _.join(['Hello', 'webpack'], '');
    element.classList.add('hello');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    console.log(Data)
    return element;
}
  
document.body.appendChild(component());
if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
    printMe();
    })
    }