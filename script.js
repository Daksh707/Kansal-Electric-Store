document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navList = document.querySelector('.navlist');
    
    menuBtn.addEventListener('click', function() {
        navList.classList.toggle('show');
    });
});


////////////////////////////////////////

const sr =ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true

})
sr.reveal('.home .info',{delay:150,origin:'left'})
sr.reveal('.info .booking-form',{delay:150,origin:'left'})
sr.reveal('.about-container .image',{delay:150,origin:'left'})
sr.reveal('.about-container .content',{delay:150,origin:'left'})
sr.reveal('.services .title',{delay:150,origin:'left'})
sr.reveal('.services .container',{delay:150,origin:'left'})
sr.reveal('.cars-container',{delay:150,origin:'left'})
sr.reveal('.contact-aside',{delay:150,origin:'left'})
