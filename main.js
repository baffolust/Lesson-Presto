let navbar = document.querySelector('#navbar');
let navLinks = document.querySelectorAll('.nav-link');
let logoNavbar = document.querySelector('#logoNavbar');

console.dir(logoNavbar);

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
        navbar.style.height = '60px';


        // Cambio colore ai link della navbar allo scrolling
        navLinks.forEach((navLink)=>{
            navLink.style.color = 'var(--textColor_2)';
            
        });


        logoNavbar.src = './media/Logo_AirWing_Black.png'

        // Ritorno alle impostazioni iniziali quando scorro in alto
    } else {
        navbar.classList.remove('bgColor_1');
        navbar.classList.add('bgColor_2');
        navbar.style.height = '100px';

        navLinks.forEach((navLink)=>{
            navLink.style.color = 'var(--textColor_1)';

        });

        logoNavbar.src = './media/Logo_AirWing_Yellow.png';
    }
    

});


