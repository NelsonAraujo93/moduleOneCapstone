const artistArray = [
  {
    name: 'Nelson Araujo',
    aka: 'The flow',
    data: 'Nelson is the top jazz singer in unite states. His best song is "Remeber me".',
    image: './assets/time_icon.svg',
    image_alt: 'Description of image',
  },
  {
    name: 'Nelson Araujo',
    aka: 'The flow',
    data: 'Nelson is the top jazz singer in unite states. His best song is "Remeber me".',
    image: './assets/time_icon.svg',
    image_alt: 'Description of image',
  },
  {
    name: 'Nelson Araujo',
    aka: 'The flow',
    data: 'Nelson is the top jazz singer in unite states. His best song is "Remeber me".',
    image: './assets/time_icon.svg',
    image_alt: 'Description of image',
  },
  {
    name: 'Nelson Araujo',
    aka: 'The flow',
    data: 'Nelson is the top jazz singer in unite states. His best song is "Remeber me".',
    image: './assets/time_icon.svg',
    image_alt: 'Description of image',
  },
  {
    name: 'Nelson Araujo',
    aka: 'The flow',
    data: 'Nelson is the top jazz singer in unite states. His best song is "Remeber me".',
    image: './assets/time_icon.svg',
    image_alt: 'Description of image',
  },
  {
    name: 'Nelson Araujo',
    aka: 'The flow',
    data: 'Nelson is the top jazz singer in unite states. His best song is "Remeber me".',
    image: './assets/time_icon.svg',
    image_alt: 'Description of image',
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
  const closeMenuBtn = document.getElementById('close-nav-btn');
  const artistContainer = document.getElementById('artist-list');

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

  getArtistsResume(artistContainer);
};

init();