document.addEventListener('DOMContentLoaded', () => {
    const socialLogos = document.querySelector('.social-logos');
    const sectionTop = socialLogos.getBoundingClientRect().top;
    let prevScrollY = window.scrollY;

    function toggleSocialLogos() {
        const windowHeight = window.innerHeight;
        const triggerPosition = sectionTop - (windowHeight * 0.8); // Cambia el valor según tus preferencias
        const currentScrollY = window.scrollY;

        if (currentScrollY > prevScrollY) {
            if (window.scrollY >= triggerPosition) {
                socialLogos.classList.add('show');
            } else {
                socialLogos.classList.remove('show');
            }
        } else {
            socialLogos.classList.remove('show');
        }

        prevScrollY = currentScrollY;
    }

    window.addEventListener('scroll', toggleSocialLogos);
});


const whatsappButton = document.querySelector('.whatsapp-button');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        whatsappButton.classList.add('show-whatsapp-button');
    } else {
        whatsappButton.classList.remove('show-whatsapp-button');
    }
});


