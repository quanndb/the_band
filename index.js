var buy_btns=document.querySelectorAll('.place-body .buy')
var modal=document.querySelector('div.modal')
var modal_close=document.querySelector('.modal-close')
var modal_container=document.querySelector('.modal-container')
for(const buy_btn of buy_btns){
    buy_btn.onclick=function(){
        modal.classList.add('modal-open')
    }
}
modal_close.onclick=function(){
    modal.classList.remove('modal-open')
}

modal.onclick=function(){
    modal.classList.remove('modal-open')
}

modal_container.onclick=function(event){
    event.stopPropagation()
}
document.onkeydown=function(e){
        if(e.which==27){
            modal.classList.remove('modal-open')
        }
}
 

var mobile_menu=document.querySelector('.mobile-menu')
var header=document.querySelector('#header')

mobile_menu.onclick=function(){
    var headerHeight=this.clientHeight;
    if(header.clientHeight===headerHeight){
        header.style.height='auto';
    }
    else{
        header.style.height=null
    }
}

var menuItems=document.querySelectorAll('#nav li a[href*="#"]')
for(const menuItem of menuItems){
    menuItem.onclick=function(event){
        var parentMenu=menuItem.nextElementSibling&&menuItem.nextElementSibling.classList.contains('subnav')
        if(parentMenu){
            event.preventDefault();
        }
        else{
            header.style.height=null
        }
    }
}

// var a='quan dep trai';

var slider=document.querySelector('#slider')
var i=1;
slider.style.backgroundImage=`url('../css/img/${i}.jpg'),no-repeat`;

// setInterval(()=>{
//     console.log(i);
//     i++;
//     if(i>=4){
//         i=1;
//     }
// }, 3000);
