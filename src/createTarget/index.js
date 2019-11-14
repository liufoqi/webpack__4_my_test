const cdiv=function (target){
   if(typeof target =='object'){
      var d_i_v= document.createElement(target.name)
      if(target.id) d_i_v.id=target.id
      if(target.className) d_i_v.className=target.className
      if(target.innerHTML) d_i_v.innerHTML=target.innerHTML
      if(target.innerText) d_i_v.innerHTML=target.innerText
      if(target.onclick) d_i_v.onclick=target.onclick
      return d_i_v
   }else if(typeof target =='string'){
      var d_i_v= document.createElement(target)
      return d_i_v
   }else{
      console.error('type error')
   }
  
}
export default cdiv