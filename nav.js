const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-bar');
    const navLinks = document.querySelectorAll('.nav-links li');

    
    burger.addEventListener('click', ()=> {
        //Toggle nav
        nav.classList.toggle('nav-active');

            //Animate links
        navLinks.forEach((link, index) => {
            
            if (link.style.animation) {
                link.style.animation = '';                
            } else {                
                link.style.animation = `navLinkFade 0.5s ease forwards ${index * 150}ms`
            }
        
        });
        //Burguer animation
        burger.classList.toggle('toggle');

    });

}

const contactBannerActive = () => {
    const contactButton = document.querySelector('.contactButton');
    const banner = document.querySelector('.banner');
    const mainContent = document.querySelector('.main-content');

    contactButton.addEventListener('click', ()=> {
        banner.classList.toggle('banner-hidden');
        mainContent.classList.toggle('main-active');
    });   

}

navSlide();
contactBannerActive();