const artistArray = [
  {
    name: 'Duke Elington',
    aka: 'Beyond category',
    data: 'Ellington wrote or collaborated on more than one thousand compositions; his extensive body of work is the largest recorded personal jazz legacy, and many of his pieces have become standards.',
    image: './assets/duke.png',
    image_alt: 'Duke Elington photo',
  },
  {
    name: 'Betty Carter',
    aka: 'The only one',
    data: 'Known for her improvisational technique, scatting and other complex musical abilities that demonstrated her vocal talent and imaginative interpretation of lyrics and melodies',
    image: './assets/betty.png',
    image_alt: 'Betty Carter photo',
  },
  {
    name: 'Louis Armstrong',
    aka: '"Satchmo", "Satch", and "Pops"',
    data: 'He was among the most influential figures in jazz. His career spanned five decades and several eras in the history of jazz.',
    image: './assets/louis.png',
    image_alt: 'Louis Armstrong photo',
  },
  {
    name: 'Billie Holiday',
    aka: 'Lady Day',
    data: 'Holiday had an innovative influence on jazz music and pop singing. Her vocal style, strongly inspired by jazz instrumentalists, pioneered a new way of manipulating phrasing and tempo.',
    image: './assets/billie.png',
    image_alt: 'Billie Holiday photo',
  },
  {
    name: 'Miles Davis',
    aka: 'Prince of Darkness',
    data: 'He is among the most influential and acclaimed figures in the history of jazz and 20th-century music.',
    image: './assets/miles.png',
    image_alt: 'Miles Davis photo',
  },
  {
    name: 'Diana Krall',
    aka: 'The second greatest jazz artist of the decade 2000-2010',
    data: 'Krall is the only jazz singer to have had eight albums debuting at the top of the Billboard Jazz Albums.',
    image: './assets/diana.png',
    image_alt: 'Diana Krall photo',
  },
];

const getArtists = (parent) => {
  const btnShowMore = document.getElementById('btn-more');
  btnShowMore.remove();
  artistArray.map((item, i) => {
    if(i>=2){
      const article = document.createElement('article');
      article.className = 'artist-card';
      article.innerHTML = `
        <div class="card-image">
          <img class="full-width" src=" ${item.image}" alt="${item.image_alt}">
        </div>
        <div class="card-container">
          <h3 class="fourth-color lato-font-bold">
            ${item.name}
          </h3>
          <h5 class="secondary-color lato-font-italic">
            ${item.aka}
          </h5>
          <div class="little-deco third-background"></div>
          <p class="lato-font fourth-color">${item.data}</p>
        </div>`;
      parent.append(article);
    }
  });

  const btnShowLess = document.createElement('button');
  btnShowLess.id = 'btn-less';
  btnShowLess.innerHTML = 'Show less';
  btnShowLess.classList.add('secondary-btn', 'white-background', 'fourth-color', 'lato-font', 'uppercase');
  btnShowLess.addEventListener('click', () => {
    parent.innerHTML='';
    getArtistsResume(parent);
  });
  parent.append(btnShowLess);
};

const getArtistsResume = (parent) => {
  const btnShowMore = document.createElement('button');
  btnShowMore.id = 'btn-more';
  btnShowMore.innerHTML = 'Show more';
  btnShowMore.classList.add('secondary-btn', 'white-background', 'fourth-color', 'lato-font', 'uppercase');
  btnShowMore.addEventListener('click', () => {
    getArtists(parent);
  });
  artistArray.map((item, i) => {
    if(i<2){
      const article = document.createElement('article');
      article.className = 'artist-card';
      article.innerHTML = `
        <div class="card-image">
          <img class="full-width" src=" ${item.image}" alt="${item.image_alt}">
        </div>
        <div class="card-container">
          <h3 class="fourth-color lato-font-bold">
            ${item.name}
          </h3>
          <h5 class="secondary-color lato-font-italic">
            ${item.aka}
          </h5>
          <div class="little-deco third-background"></div>
          <p class="lato-font fourth-color">${item.data}</p>
        </div>`;
      parent.append(article);
    }
  });
  parent.append(btnShowMore);
};


const init = () => {
  const openMenuBtn = document.getElementById('open-nav-btn');
  const navMenu = document.getElementById('nav-menu');
  const programSection = document.getElementById('logistic');
  const artistsSection = document.getElementById('artists');
  const partnersSection = document.getElementById('partners');
  const closeMenuBtn = document.getElementById('close-nav-btn');
  const artistContainer = document.getElementById('artist-list');
  const menuItems = document.querySelectorAll('.menu-item');

  for(let i = 0; i < menuItems.length; i += 1){
    if(window.innerWidth<768){
      menuItems[i].addEventListener('click', () => {
        openMenuBtn.classList.toggle('closed');
        closeMenuBtn.classList.toggle('closed');
        navMenu.classList.toggle('nav-mobile');
        if(menuItems[i]===4){
          menuItems[i].classList.add('active');
        }
      });
    }
  };

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

  document.addEventListener("scroll", (event) => {
    if ((window.innerHeight + window.pageYOffset) >= (document.body.offsetHeight - 80) &&  !menuItems[4].classList.contains('active')){
      menuItems[2].classList.remove('active');
      menuItems[3].classList.remove('active');
      menuItems[4].classList.add('active');
      return;
    } else if (window.scrollY >= (artistsSection.offsetTop - 80) &&  !menuItems[3].classList.contains('active') && window.scrollY < (partnersSection.offsetTop - 500)) {
      menuItems[2].classList.remove('active');
      menuItems[4].classList.remove('active');
      menuItems[3].classList.add('active');
      return;
    } else if (window.scrollY >= (programSection.offsetTop - 80) &&  !menuItems[2].classList.contains('active') && window.scrollY < (artistsSection.offsetTop - 80)){
      menuItems[4].classList.remove('active');
      menuItems[3].classList.remove('active');
      menuItems[2].classList.add('active');
      return;
    } else if (window.scrollY < (programSection.offsetTop - 80) &&  menuItems[2].classList.contains('active')){
      menuItems[2].classList.remove('active');
      menuItems[3].classList.remove('active');
      menuItems[4].classList.remove('active');
      return;
    }
  });
  getArtistsResume(artistContainer);
};

init();