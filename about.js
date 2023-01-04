const init = () => {
  const openMenuBtn = document.getElementById('open-nav-btn');
  const navMenu = document.getElementById('nav-menu');
  const closeMenuBtn = document.getElementById('close-nav-btn');
  const menuItems = document.getElementsByClassName('menu-item');

  for (let i = 0; i < menuItems.length; i += 1) {
    if (window.innerWidth < 768) {
      menuItems[i].addEventListener('click', () => {
        openMenuBtn.classList.toggle('closed');
        closeMenuBtn.classList.toggle('closed');
        navMenu.classList.toggle('nav-mobile');
      });
    }
  }

  menuItems[1].classList.add('active');
  openMenuBtn.addEventListener('click', () => {
    openMenuBtn.classList.toggle('closed');
    closeMenuBtn.classList.toggle('closed');
    navMenu.classList.toggle('nav-mobile');
  });

  closeMenuBtn.addEventListener('click', () => {
    openMenuBtn.classList.toggle('closed');
    closeMenuBtn.classList.toggle('closed');
    navMenu.classList.toggle('nav-mobile');
  });
};

init();