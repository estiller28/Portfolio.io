const menuMobile = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
menuMobile('nav-toggle', 'nav-menu')


const navLink = document.querySelectorAll('.nav__link')
const navMenu = document.getElementById('nav-menu')

function navToggle(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', navToggle))



// =================Active-Menu-Onscroll===================

const links = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('section');

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);



// <====================Scroll Reveal==================>

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})


sr.reveal('.home__title',{} )
sr.reveal('.button', {delay: 200})
sr.reveal('.home__img',{delay: 300})
sr.reveal('.home__social-icon',{interval: 200})


sr.reveal('.about__img',{ delay: 100})
sr.reveal('.about__subtitle',{delay: 200})
sr.reveal('.about__me',{delay: 400, interval: 200})



sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay: 200})
sr.reveal('.skills__data',{interval: 200})
sr.reveal('.skills__img',{delay: 400})


sr.reveal('.work__img',{interval: 150}) 
sr.reveal('.contact__container',{})
sr.reveal('.contact__button',{delay: 300})


// ==============Form Validation ==================

var app = new Vue({
    el: '#app',
    data:{
        name: '',
        concern: '',
        active: false
    },
    methods:{
       validate(){
           if(this.name === '' || this.concern === ''){
               this.active = true;
           }else{
               this.active = false;
               alert('Concern submitted successfully!')
           }
       }

    }
}) 