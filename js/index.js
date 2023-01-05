let my_btn_but = document.querySelector('.my-btn')
let bot__nav = document.querySelector('.bot__nav')
let UL__nav = document.querySelector('.ul__nav')
let top__nav = document.querySelector('.top__nav')
let my__menu = document.querySelector('.my__menu')
let body = document.querySelector('body')
my__menu.onclick = function(){
    bot__nav.classList.toggle('botNav')
    top__nav.classList.toggle('topNav')
    body.classList.toggle('BodY')
}
my_btn_but.onclick = function(){
	document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {scrollFunction()};
function scrollFunction(){
	if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550 ) {
        my_btn_but.style.display = "block";
        if (UL__nav.offsetWidth > 968) {
            UL__nav.style = `background-color: rgba(0, 0, 0, 0.7)`
        }
        else {
            UL__nav.style = `background-color: none`
        }
        if (bot__nav.offsetWidth > 968 || bot__nav.offsetWidth < 968) {
            bot__nav.style = `position: fixed; top: 0px;`
        }
    } 
    else{
    	my_btn_but.style.display = "none";
        bot__nav.style = `position: absolute;
            bottom: 60px;`
        UL__nav.style = `background-color: none`
    }
}

$(document).ready(function(){
    $('.main-carousel').flickity({
      // options
      cellAlign: 'left',
      contain: true
    });
    $('.custom1').flickity({
      // options
      cellAlign: 'left',
      contain: true
    });
});