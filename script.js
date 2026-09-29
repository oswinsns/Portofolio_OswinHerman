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

// Qualification Tabs 

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

/*==================== 360° INTERACTIVE TURNTABLE ====================*/
(function initTurntable() {
    const avatarImg = document.getElementById('avatarTurntable');
    const turntableCircle = document.getElementById('turntableCircle');
    const degreeLabel = document.getElementById('turntableDegree');
    if (!avatarImg || !turntableCircle) return;

    const TOTAL_FRAMES = 8;
    const frameLabels = ['0° Front', '45°', '90° Side', '135°', '180° Back', '225°', '270° Side', '315°'];
    let currentFrame = -1;  // -1 so first goToFrame(0) always triggers
    let isDragging = false;
    let isInteracting = false;
    let interactionTimeout = null;

    // Preload all frames eagerly
    const frames = [];
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        img.src = 'angle_images/angle' + i + '.png';
        frames.push(img);
    }

    function goToFrame(n) {
        const f = ((Math.floor(n) % TOTAL_FRAMES) + TOTAL_FRAMES) % TOTAL_FRAMES;
        if (f === currentFrame) return;
        currentFrame = f;
        avatarImg.src = 'angle_images/angle' + (f + 1) + '.png';
        if (degreeLabel) degreeLabel.textContent = frameLabels[f];
    }

    /* ── DRAG ─────────────────────────────────── */
    let dragStartX = 0;
    let dragStartFrame = 0;
    const PX_PER_FRAME = 30;

    turntableCircle.addEventListener('mousedown', function (e) {
        isDragging = true;
        isInteracting = true;
        dragStartX = e.clientX;
        dragStartFrame = currentFrame;
        clearTimeout(interactionTimeout);
    });

    window.addEventListener('mousemove', function (e) {
        if (!isDragging) return;
        const delta = Math.round((e.clientX - dragStartX) / PX_PER_FRAME);
        goToFrame(dragStartFrame - delta);
    });

    window.addEventListener('mouseup', function () {
        if (!isDragging) return;
        isDragging = false;
        interactionTimeout = setTimeout(function () {
            isInteracting = false;
        }, 1500);
    });

    /* ── TOUCH ────────────────────────────────── */
    turntableCircle.addEventListener('touchstart', function (e) {
        isDragging = true;
        isInteracting = true;
        dragStartX = e.touches[0].clientX;
        dragStartFrame = currentFrame;
        clearTimeout(interactionTimeout);
    }, { passive: true });

    window.addEventListener('touchmove', function (e) {
        if (!isDragging) return;
        const delta = Math.round((e.touches[0].clientX - dragStartX) / PX_PER_FRAME);
        goToFrame(dragStartFrame - delta);
    }, { passive: true });

    window.addEventListener('touchend', function () {
        isDragging = false;
        interactionTimeout = setTimeout(function () {
            isInteracting = false;
        }, 1500);
    });

    /* ── SCROLL-DRIVEN ───────────────────────── */
    window.addEventListener('scroll', function () {
        if (isDragging || isInteracting) return;
        const scrollY = window.pageYOffset || 0;
        // Every 50px of scroll = next frame
        goToFrame(Math.floor(scrollY / 50));
    }, { passive: true });

    /* ── MOUSE POSITION TRACKING (hero-only) ─── */
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.addEventListener('mousemove', function (e) {
            if (isDragging || isInteracting) return;
            if ((window.pageYOffset || 0) > 100) return; // only at page top

            const rect = homeSection.getBoundingClientRect();
            const pct = (e.clientX - rect.left) / rect.width; // 0..1

            // 5-zone mapping: left-side = look left, right-side = look right
            let f;
            if      (pct < 0.20) f = 6; // 270°
            else if (pct < 0.38) f = 7; // 315°
            else if (pct < 0.62) f = 0; // 0° front
            else if (pct < 0.80) f = 1; // 45°
            else                 f = 2; // 90°

            goToFrame(f);

            // 3-D tilt
            const cr = turntableCircle.getBoundingClientRect();
            const tx = -((e.clientY - cr.top - cr.height / 2) / (cr.height / 2)) * 9;
            const ty =  ((e.clientX - cr.left - cr.width  / 2) / (cr.width  / 2)) * 9;
            turntableCircle.style.transform =
                'perspective(800px) rotateX(' + tx.toFixed(1) + 'deg) rotateY(' + ty.toFixed(1) + 'deg) scale3d(1.025,1.025,1.025)';
        });

        homeSection.addEventListener('mouseleave', function () {
            if (!isDragging) {
                turntableCircle.style.transform = '';
                if (!isInteracting && (window.pageYOffset || 0) < 60) goToFrame(0);
            }
        });
    }

    /* ── BADGE CLICK → full spin ─────────────── */
    var badge = document.getElementById('turntableBadge');
    if (badge) {
        badge.addEventListener('click', function () {
            isInteracting = true;
            clearTimeout(interactionTimeout);
            var step = 0;
            var iv = setInterval(function () {
                goToFrame(currentFrame + 1);
                step++;
                if (step >= TOTAL_FRAMES) {
                    clearInterval(iv);
                    interactionTimeout = setTimeout(function () {
                        isInteracting = false;
                    }, 800);
                }
            }, 80);
        });
    }

    // Start on frame 0
    goToFrame(0);
})();