const mobileNav = () => {
    
}

const init = () => {

    const openMenuBtn = document.getElementById('open-nav-btn');
    const navMenu = document.getElementById('nav-menu');
    const closeMenuBtn = document.getElementById('close-nav-btn');

    openMenuBtn.addEventListener('click', () => {
        openMenuBtn.classList.toggle('closed');
        closeMenuBtn.classList.toggle('closed');
        navMenu.classList.toggle('nav-mobile');
    });

    closeMenuBtn.addEventListener('click', () => {
        openMenuBtn.classList.toggle('closed');
        closeMenuBtn.classList.toggle('closed');
        navMenu.classList.toggle('nav-mobile');
    })
}


init();