const buttonHeader = document.getElementById('buttonMobileHeader')
const navLinks = Array.from(document.getElementsByClassName('nav-links'))
const navButtons = Array.from(document.getElementsByClassName('nav-buttons'))

const addEventClick = function(element, style){
    element.forEach(function(el){
        el.addEventListener('click', function(){
            element.forEach(function(el){
                el.classList.remove(style)
            })
            el.classList.add(style)
        })
    })
}

const toogleMobileMenu = function() {
    for(let i = 0; i <= arguments.length; i++){
        arguments[0].classList.toggle(arguments[i + 1]);
    }
}

buttonHeader.addEventListener('click',function(){
    const menuHeader = document.getElementById('menuMobileHeader')
    const buttonHeaderIcon = document.getElementById('buttonMobileHeaderIcon')

    toogleMobileMenu(menuHeader,'hidden','flex')
    toogleMobileMenu(buttonHeaderIcon,'fa-xmark','fa-bars','text-2xl','pl-.5px')
})

addEventClick(navLinks, 'text-blue-link')
addEventClick(navButtons, 'button-click')