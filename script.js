
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

const btn = document.getElementById("btn-top")

btn.addEventListener("click", () => {
        window.scrollTo(0, 0)
    })

document.addEventListener('scroll',ocultar)

function ocultar(){
    if (window.scrollY > 10 ) {
        btn.style.display = "flex"
    }else{
        btn.style.display = "none"
    }
    }

    ocultar()
