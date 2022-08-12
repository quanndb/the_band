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

var $=document.querySelector.bind(document)
    $$=document.querySelectorAll.bind(document)
    const sliderimg=$$('.sliderimg')
        ,sliderctn=$$('.text-content')
    var i=0
    console.log(sliderimg.length)

    setInterval(function(){
        $('.sliderimg.active').classList.remove('active')
        $('.text-content.active').classList.remove('active')
            sliderimg[i].classList.add('active')
            sliderctn[i].classList.add('active')
        i++
        if(i>=sliderimg.length){
            i=0
        }
    },3000)