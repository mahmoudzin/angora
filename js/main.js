let nav = document.querySelector('#navbar')    
let img = document.querySelector('#logo')
let icons = document.querySelectorAll('#nav-icons a')
window.onscroll = function () {
    if(this.scrollY > 20){
        nav.classList.add('bg-white')
        nav.classList.add('shadow-lg')
        nav.classList.add('navbar-light')
        nav.classList.remove('navbar-dark')
        logo.src = 'images/logo-red.png'
        icons.forEach( icon => {
            icon.classList.add('text-black')
        })
    }else{
        nav.classList.remove('bg-white')
        nav.classList.remove('shadow-lg')
        nav.classList.add('navbar-dark')
        nav.classList.remove('navbar-light')
        logo.src = 'images/logo-white.png'
        icons.forEach( icon => {
            icon.classList.remove('text-black')
        })
    }
}