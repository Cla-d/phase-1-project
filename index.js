//show menu
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle')
        navClose = document.getElementById('nav-close')

 // show menu if constant exists
 if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })

//hide menu
if (navClose) {
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
