const buttonHeader = document.getElementById('buttonMobileHeader')

const navLinks = document.getElementsByClassName('nav-links')
const navButtons = document.getElementsByClassName('nav-buttons')


const addEventClick = function(link, buttons){
    for(let j = 0; j < 7; ++j){
        buttons[j].addEventListener('click', function(){
            let choosen = buttons[j]

            for(let i = 0; i < navButtons.length; ++i){
                navButtons[i].classList.remove('button-click')
            }
            choosen.classList.add('button-click')
        })

        if(j > 3){
            console.log('b')
            continue
        }else{
            link[j].addEventListener('click', function(){
                let choosen = link[j]
    
                for(let i = 0; i < navLinks.length; ++i){
                    navLinks[i].classList.remove('text-blue-link')
                }
                choosen.classList.add('text-blue-link')
            })
        }
        
    }
}

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

addEventClick(navLinks, navButtons)