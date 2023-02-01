const menuHeader = document.getElementById('menuMobileHeader')
const buttonHeader = document.getElementById('buttonMobileHeader')
const buttonHeaderIcon = document.getElementById('buttonMobileHeaderIcon')

const toogleMobileMenu = function() {
    for(let i = 0; i <= arguments.length; ++i){
        arguments[0].classList.toggle(arguments[i + 1]);
    }
}

buttonHeader.addEventListener('click',function(){
    toogleMobileMenu(menuHeader,'hidden','flex')
    toogleMobileMenu(buttonHeaderIcon,'fa-xmark','fa-bars','text-2xl','pl-.5px')
})
