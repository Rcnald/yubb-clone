const buttonHeader = document.getElementById('buttonMobileHeader')
const navHeaderLinks = document.getElementsByClassName('nav-links')

const navButtons = document.getElementsByClassName('nav-buttons')

const toogleMobileMenu = function() {
    for(let i = 0; i <= arguments.length; ++i){
        arguments[0].classList.toggle(arguments[i + 1]);
    }
}

buttonHeader.addEventListener('click',function(){
    const menuHeader = document.getElementById('menuMobileHeader')
    const buttonHeaderIcon = document.getElementById('buttonMobileHeaderIcon')

    toogleMobileMenu(menuHeader,'hidden','flex')
    toogleMobileMenu(buttonHeaderIcon,'fa-xmark','fa-bars','text-2xl','pl-.5px')
})
