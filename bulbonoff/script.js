var box=document.querySelector('#box')
var btn=document.querySelector('button')

var flag=0
btn.addEventListener('click',function(){

    if(flag==0){
    box.style.backgroundColor='yellow'
    btn.innerHTML='off'
    flag=1
}else{
     box.style.backgroundColor='transparent'
    btn.innerHTML='on'
    flag=0
}
})


// var menu=document.querySelector('h3')
// var card=document.querySelector('#card')
// var flag=0
// menu.addEventListener('click',function(){
// if(flag==0){
//     card.style.right='0%'
//     menu.innerHTML='<i class="ri-close-line"></i>'
//     flag=1
// }else{
//     card.style.right='-50%'
//     menu.innerHTML='<i class="ri-menu-2-line"></i>'
//     flag=0
// }
   
// })
