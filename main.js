let navbar = document.querySelector('#navbar');
let navLinks = document.querySelectorAll('.nav-link');
let logoNavbar = document.querySelector('#logoNavbar');
let navbarToggler = document.querySelector('#navbarToggler');
let navContainer = document.querySelector('#navContainer');

console.dir(navbarToggler);

// WINDOW 
// è l'oggetto che rappresenta la pagina stessa.
// ha diversi metodi e proprietà, tra cui .scrollY che indica il valore dell'asse verticale a cui si trova il bordo superiore della pagina

// Posso aggiungere un listenere direttamente a window

window.addEventListener('scroll', ()=>{

    // console.log(window.scrollY); per visualizzare in log cosa sta succedendo

    let scrolled = window.scrollY;

    if (scrolled > 0){

        // Cambio colore e dimensione alla navbar allo scrolling
        navbar.classList.add('bgColor_1');
        navbar.classList.remove('bgColor_2');
        navContainer.classList.add('bgColor_1');
        navContainer.classList.remove('bgColor_2');
        navbar.style.height = '60px';


        // Cambio colore ai link della navbar allo scrolling
        navLinks.forEach((navLink)=>{
            navLink.style.color = 'var(--textColor_2)';
            
        });

        // Cambio colore al logo
        logoNavbar.src = './media/Logo_AirWing_Black.png'

        // Cambio colore al hamburger icon
        navbarToggler.style.border = '1px solid var(--textColor_2)';

        // Ritorno alle impostazioni iniziali quando scorro in alto
    } else {
        navbar.classList.remove('bgColor_1');
        navbar.classList.add('bgColor_2');
        navContainer.classList.remove('bgColor_1');
        navContainer.classList.add('bgColor_2');
        navbar.style.height = '100px';

        navLinks.forEach((navLink)=>{
            navLink.style.color = 'var(--textColor_1)';

        });

        logoNavbar.src = './media/Logo_AirWing_Yellow.png';

        navbarToggler.style.background = 'var(--bgColor_1)';
        navbarToggler.style.bordercolor = 'var(--textColor_2)';
    }
    

});


