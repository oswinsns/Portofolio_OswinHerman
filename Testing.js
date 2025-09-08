/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text, .section__subtitle',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img, .qualification__tabs, .row',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


//  typing animation

var typed = new Typed(".text", {
    strings: ["Oswin", "Oswin"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true

});

// qualification tabs

const tabs = document.querySelectorAll('[data-target]');
const all_content = document.querySelectorAll('[data-content]');

// tabs.forEach(tab =>{
//     tab.addEventListener('click', () =>{
//         const target = document.querySelector(tab.dataset.target)

//         tabContents.forEach(tabContent =>{
//             tabContent.classList.remove('qualification__active')
//         })
//         target.classList.add('qualification__active')

//         tabs.forEach(tab =>{
//             tab.classList.remove('qualification__active')
//         })
//         tab.classList.add('qualification__active')
//     })
// })

tabs.forEach((tab,index)=> {
    tab.addEventListener('click', (e) => {
             tabs.forEach(tab=>{tab.classList.remove('qualification__active')});
             tab.classList.add('qualification__active');

             all_content.forEach(content=>{content.classList.remove('qualification__active')});
             all_content[index].classList.add('qualification__active');
    })
})
