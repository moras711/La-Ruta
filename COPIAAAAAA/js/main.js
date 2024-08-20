/*=============== SHOW MENU ===============*/
const   navMenu = document.getElementById('nav-menu'), /*vaya al documento y busque un archivo que se llama nav-menu*/ 
        navToggle = document.getElementById ('nav-toggle'),
        navClose = document.getElementById('nav-close')
/*Menu show Despliega menu*/
if(navToggle){ /* Aquí evaluará como resultado el true o el fase, si lo encuentra o no, si existe el botón él dirá; sí lo encuentra agreguele las escucha de un evento (addEventListener('click',()) si por alguna razon el elemento que se da un click agreguele una función (() =>) esto es una función autoejecutable. Después busque a nav-menu y en su lista de clases agreguele una que se va a llamar show-menu */
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu') /*pone */
    });
}
/*Menu Hidden Esconde menu*/
/*las condiciones son algo a evaluar, si no (Si la condición se cumple haga esto, si no se cumple no se haga */
/*El if el una palabra reservada que se utiliza cuando se trabaja con una condición*/
if(navClose){ /* en esta clase es igual, solamente que esta le dice que cuando le den click al icono lo remueva y aparezca la x */
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')/*quita */
    });
}
/*este archivo esta a cargo de varias cosas, este se encarga del menu.
aquí estamos con trabajando con 3 constantes(menos probable de que cambie, color de los zapatos), (variable cambia color)
Java se utiliza cuando tenemos una interacción*/ 


/*=============== REMOVE MENU MOBILE ===============*/ 

//sin esto aparecería el menú y cuando le de click a una opción de menú el menú quedaba abierto, con esto yo le doy click, el se mueve y se cierra. Le estoy diciendo que vaya al documento y busque todos los selectores con  la clase .nav__link (query selector es para que encuentre el primer elemento que tiene esa clase, con all le digo que ubique todos los elementos que contengan la clase nav__link)
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    //Cuando se da click en cada nav__link, se remueve show-menu
    navMenu.classList.remove('show-menu') //ubique el menu y remueva show-menu, con esto el menu se mueve otra vez para arriba.
}
//a traves de nav link. hagaa un forEach (forEach es para que me repita una cierta cantidad de elementos .si sólo dice for yo debería de saber cuantas veces se va a repetir.)
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== ADD SHADOW HEADER ===============*/

//este se utiliza para crear un efecto de sombra y quede marcado abajo. 
const shadowHeader = () =>{
    const header = document.getElementById('header');
    this.scrollY >=50  ? header.classList.add ('shadow-header')
                        :header.classList.remove
                        ('shadow-header');
}
window.addEventListener('scroll', shadowHeader);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]'); /*cuando uso queryselectorall guarda la informacion de un grupo (query selector es sólo un elemento) */
const scrollActive = () =>{
    const scrollDown = window.scrollY;
    sections.forEach(current =>{
        const   sectionHeight = current.offsetHeight, /*hace referencia al elemento sobre la cual esta*/
                sectionTop = current.offsetTop -58, /* la altura que tiene el header del borde hasta el elemento*/
                sectionId = current.getAttribute('id'),/*guarda el atributo id */
                sectionsClass = document.querySelector('.nav__menu a[href*='+sectionId + ']');
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){ /*si cumple el rango que se desprende del mouse */
            sectionsClass.classList.add('active-link');
        }else{
            sectionsClass.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll',scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
