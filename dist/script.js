const menuHeader = document.getElementById('menuMobileHeader')
const buttonHeader = document.getElementById('buttonMobileHeader')
const buttonHeader1 = document.getElementById('buttonMobileHeader1')

buttonHeader.addEventListener('click',function(){
    menuHeader.classList.toggle('hidden')
    menuHeader.classList.toggle('flex')
    buttonHeader1.classList.toggle('fa-xmark')
    buttonHeader1.classList.toggle('fa-bars')
    buttonHeader1.classList.toggle('text-2xl')
    buttonHeader1.classList.toggle('pl-[0.5px]')
    menuHeader.getElementsByTagName('i'.classList.toggle('fa-solid fa-caret-down text-xs'))
})