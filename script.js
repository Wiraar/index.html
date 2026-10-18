/* =====================================================
   IMAGE SOURCES
   ===================================================== */
const IMG = {
  covers: 'images/marvel-covers.jpg',
  xmen: 'images/xmen-battle.jpg',
  heroes: 'images/marvel-heroes.jpg'
};

const FULL = { w: 1, x: 0, y: 0 };

/* =====================================================
   COMICS DATA
   ===================================================== */
const comicsData = [
  {
    id: 1,
    title: 'Doctor Strange: Master of the Mystic Arts',
    author: 'Steve Englehart & Frank Brunner',
    genre: 'mystic',
    price: 9.99,
    rating: 4.7,
    isNew: false,
    featured: true,
    cover: IMG.covers,
    crop: { w: .27, x: 0, y: 0 },
    synopsis: 'The Sorcerer Supreme battles dark forces from beyond the veil of reality. Magic, madness and mind-bending dimensions await!',
    lines: ['By the Hoary Hosts of Hoggoth!', 'Dormammu reaches across the Dark Dimension...', 'Only Strange stands between Earth and eternal night.']
  },
  {
    id: 2,
    title: 'The Mighty Thor: Mangog Unleashed!',
    author: 'Stan Lee & Jack Kirby',
    genre: 'superhero',
    price: 10.99,
    rating: 4.8,
    isNew: false,
    featured: true,
    cover: IMG.covers,
    crop: { w: .31, x: .27, y: 0 },
    synopsis: 'Mangog — a creature with the power of a billion billion beings — marches on Asgard. Only the God of Thunder can stop him!',
    lines: ['The gates of Asgard tremble!', 'Mangog has the strength of a billion billion beings!', '"For Asgard!" — Mjolnir strikes like lightning!']
  },
  {
    id: 3,
    title: 'Jungle Action: Black Panther',
    author: 'Don McGregor & Billy Graham',
    genre: 'action',
    price: 8.99,
    rating: 4.9,
    isNew: true,
    featured: true,
    cover: IMG.covers,
    crop: { w: .30, x: .70, y: 0 },
    synopsis: 'T\'Challa returns to Wakanda to face a rebellion that threatens to tear his kingdom apart. The legendary "Panther\'s Rage" saga!',
    lines: ['Wakanda is burning...', 'Erik Killmonger challenges the throne!', 'The king of Wakanda never yields!']
  },
  {
    id: 4,
    title: 'Ant-Man: Beware the Ant-Brigade!',
    author: 'Stan Lee & Jack Kirby',
    genre: 'superhero',
    price: 7.99,
    rating: 4.4,
    isNew: false,
    featured: false,
    cover: IMG.covers,
    crop: { w: .24, x: 0, y: .225 },
    synopsis: 'Hank Pym shrinks down to insect size and commands an army of ants against a monstrous menace. Small hero, giant adventure!',
    lines: ['Size doesn\'t matter when you have an army!', 'The ants answer my call!', 'A giant threat needs a tiny hero!']
  },
  {
    id: 5,
    title: 'Amazing Spider-Man Annual: The Wedding!',
    author: 'David Michelinie & Jim Shooter',
    genre: 'superhero',
    price: 12.99,
    rating: 4.9,
    isNew: false,
    featured: true,
    cover: IMG.covers,
    crop: { w: .29, x: 0, y: .465 },
    synopsis: 'Peter Parker and Mary Jane Watson finally tie the knot! But can a superhero ever have a normal wedding day?',
    lines: ['Face it, Tiger... you just hit the jackpot!', 'Every villain in New York wants an invitation.', 'With great power comes... a wedding!']
  },
  {
    id: 6,
    title: 'What If... Captain America Had Formed the Avengers?',
    author: 'Marvel Comics',
    genre: 'action',
    price: 9.49,
    rating: 4.6,
    isNew: true,
    featured: false,
    cover: IMG.covers,
    crop: { w: .27, x: .49, y: .30 },
    synopsis: 'An alternate reality where Steve Rogers assembles Earth\'s Mightiest Heroes from day one. History will never be the same!',
    lines: ['In another universe...', 'Cap leads a very different team.', 'Avengers... Assemble!']
  },
  {
    id: 7,
    title: 'Amazing Spider-Man: The Black Costume',
    author: 'Tom DeFalco & Ron Frenz',
    genre: 'action',
    price: 11.49,
    rating: 4.8,
    isNew: true,
    featured: false,
    cover: IMG.covers,
    crop: { w: .28, x: .41, y: .765 },
    synopsis: 'Spider-Man returns from Secret Wars wearing a mysterious black suit... but this costume has a mind of its own!',
    lines: ['The new suit responds to my thoughts...', 'Something is wrong. It\'s ALIVE!', 'The birth of a legend: Venom.']
  },
  {
    id: 8,
    title: 'Infinity Gauntlet: The Mad Titan',
    author: 'Jim Starlin',
    genre: 'cosmic',
    price: 14.99,
    rating: 5.0,
    isNew: true,
    featured: true,
    cover: IMG.heroes,
    crop: { w: .5, x: .2, y: 0 },
    synopsis: 'Thanos has collected all six Infinity Gems. With a snap of his fingers, half the universe can vanish. The ultimate cosmic war begins!',
    lines: ['Six gems. Infinite power.', '"I am... inevitable."', 'The universe holds its breath.']
  },
  {
    id: 9,
    title: 'The Incredible Hulk: SMASH!',
    author: 'Stan Lee & Jack Kirby',
    genre: 'superhero',
    price: 8.49,
    rating: 4.5,
    isNew: false,
    featured: false,
    cover: IMG.heroes,
    crop: { w: .4, x: .6, y: .36 },
    synopsis: 'Bruce Banner\'s rage unleashes the strongest one there is. The army hunts him — but nobody can cage the Hulk!',
    lines: ['Don\'t make me angry...', 'You wouldn\'t like me when I\'m angry.', 'HULK SMASH!!!']
  },
  {
    id: 10,
    title: 'Captain America: Sentinel of Liberty',
    author: 'Jack Kirby & Joe Simon',
    genre: 'superhero',
    price: 9.99,
    rating: 4.7,
    isNew: false,
    featured: false,
    cover: IMG.heroes,
    crop: { w: .45, x: 0, y: .65 },
    synopsis: 'The super-soldier wakes up in a modern world. With his shield and unbreakable will, Steve Rogers fights for freedom once more.',
    lines: ['I can do this all day.', 'The shield never breaks.', 'Freedom has a guardian.']
  },
  {
    id: 11,
    title: 'X-Men: Master of Magnetism',
    author: 'Chris Claremont & Jim Lee',
    genre: 'mutant',
    price: 11.99,
    rating: 4.8,
    isNew: true,
    featured: true,
    cover: IMG.xmen,
    crop: { w: .31, x: .69, y: .015 },
    synopsis: 'From his orbital fortress Asteroid M, Magneto declares war on humanity. The master of magnetism will not be denied!',
    lines: ['Asteroid M rises...', '"Mutants are the future!"', 'Magneto bends the world to his will.']
  },
  {
    id: 12,
    title: 'X-Men: Mutant Showdown',
    author: 'Chris Claremont & Jim Lee',
    genre: 'mutant',
    price: 12.99,
    rating: 4.9,
    isNew: true,
    featured: true,
    cover: IMG.xmen,
    crop: { w: .31, x: .36, y: .015 },
    synopsis: 'Cyclops and Wolverine lead the charge as the X-Men storm Magneto\'s fortress. Optic blasts, adamantium claws — total mutant war!',
    lines: ['Cyclops: "X-Men, move out!"', 'Wolverine: "I\'m the best there is at what I do."', 'The battle for mutantkind begins!']
  },
  {
    id: 13,
    title: 'X-Men: Ragin\' Cajun',
    author: 'Chris Claremont & Jim Lee',
    genre: 'mutant',
    price: 10.49,
    rating: 4.6,
    isNew: false,
    featured: false,
    cover: IMG.xmen,
    crop: { w: .31, x: .06, y: .015 },
    synopsis: 'Gambit, Rogue, Psylocke and Colossus join the fight. Charged cards, stolen powers and steel skin — the X-Men\'s second wave!',
    lines: ['Gambit charges his cards...', 'Rogue takes to the skies!', 'Colossus: "Steel will not bend!"']
  },
  {
    id: 14,
    title: 'Marvel Classics: The Vintage Collection',
    author: 'Stan Lee, Jack Kirby & Friends',
    genre: 'collection',
    price: 29.99,
    rating: 4.9,
    isNew: false,
    featured: true,
    cover: IMG.covers,
    crop: FULL,
    synopsis: 'The ultimate vintage bundle: Thor, Iron Man, Spider-Man, Black Panther, Doctor Strange, Captain America and more in one legendary collection!',
    lines: ['The Golden Age returns!', 'Dozens of legendary covers.', 'A must-have for every true fan.']
  },
  {
    id: 15,
    title: 'Marvel Universe: Heroes United',
    author: 'Marvel Comics',
    genre: 'collection',
    price: 24.99,
    rating: 5.0,
    isNew: true,
    featured: true,
    cover: IMG.heroes,
    crop: { w: 1, x: 0, y: .1 },
    synopsis: 'Every hero, one universe. Avengers, X-Men and cosmic legends unite against the greatest threat of all — Thanos!',
    lines: ['Earth\'s Mightiest Heroes...', '...and the universe\'s greatest threat.', 'Together, they are unstoppable!']
  }
];

comicsData.forEach(comic => {
  comic.pages = [
    { src: comic.cover, crop: comic.crop },
    ...comic.lines.map(text => ({ text })),
    { src: comic.cover, full: true }
  ];
});

/* =====================================================
   STORAGE HELPERS
   ===================================================== */
function findComic(id) {
  return comicsData.find(comic => comic.id === Number(id));
}

function readStoredArray(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(value) ? value : [];
  } catch {
    localStorage.removeItem(key);
    return [];
  }
}

function saveStoredArray(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    toast('Storage is unavailable in this browser.');
  }
}

const Storage = {
  getCart() {
    return readStoredArray('cv_cart')
      .map(item => ({ id: Number(item.id), qty: Math.max(1, Number(item.qty) || 1) }))
      .filter(item => findComic(item.id));
  },
  saveCart(cart) {
    saveStoredArray('cv_cart', cart);
  },
  getOwned() {
    return readStoredArray('cv_owned').map(Number).filter(id => findComic(id));
  },
  saveOwned(owned) {
    saveStoredArray('cv_owned', owned);
  }
};

function isOwned(id) {
  return Storage.getOwned().includes(Number(id));
}

/* =====================================================
   COVER HELPER
   ===================================================== */
function coverHTML(src, crop, alt = '', extraClass = '') {
  const { w = 1, x = 0, y = 0 } = crop || FULL;
  const positionX = w >= 1 ? 50 : Math.max(0, Math.min(100, (x / (1 - w)) * 100));
  const positionY = Math.max(0, Math.min(100, y * 100));
  return `
    <div class="cover ${extraClass}" style="--w:${w};--x:${x};--y:${y};--pos-x:${positionX}%;--pos-y:${positionY}%">
      <img src="${src}" alt="${alt}" loading="lazy">
    </div>`;
}

function comicCover(comic, extraClass = '') {
  return coverHTML(comic.cover, comic.crop, `${comic.title} cover`, extraClass);
}

/* =====================================================
   TOAST & SHAKE
   ===================================================== */
function toast(message) {
  const toastEl = document.getElementById('toast');
  toastEl.textContent = message;
  toastEl.classList.add('show');
  clearTimeout(toastEl._timer);
  toastEl._timer = setTimeout(() => toastEl.classList.remove('show'), 2200);
}

function shakeEl(element) {
  element.classList.remove('shake-now');
  void element.offsetWidth;
  element.classList.add('shake-now');
}

/* =====================================================
   MODALS & MOBILE NAV
   ===================================================== */
let lastFocusedElement = null;

function syncBodyLock() {
  const overlayOpen = document.querySelector('.modal.open') || document.getElementById('cart-drawer').classList.contains('open');
  document.body.classList.toggle('no-scroll', Boolean(overlayOpen));
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  lastFocusedElement = document.activeElement;
  modal.inert = false;
  modal.classList.add('open');
  syncBodyLock();
  requestAnimationFrame(() => modal.querySelector('button, a, input, select, textarea')?.focus());
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('open');
  modal.inert = true;
  syncBodyLock();
  if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
}

function closeMobileNav() {
  document.getElementById('nav-menu').classList.remove('open');
  document.getElementById('nav-toggle').setAttribute('aria-expanded', 'false');
}

/* =====================================================
   ROUTER
   ===================================================== */
function showPage(id) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => {
    if (window.AOS) window.AOS.refreshHard();
  }, 100);
}

function updateActiveNav(hash) {
  const activeHash = hash.startsWith('#comic-') ? '#shop' : hash;
  document.querySelectorAll('.nav-link').forEach(link => {
    const isActive = link.getAttribute('href') === activeHash;
    link.classList.toggle('active-link', isActive);
    if (isActive) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

function route() {
  const hash = location.hash || '#home';

  if (hash.startsWith('#comic-')) {
    const id = hash.slice('#comic-'.length);
    if (findComic(id)) {
      showPage('detail');
      renderComicDetail(id);
    } else {
      location.hash = '#shop';
      return;
    }
  } else {
    const key = hash.replace('#', '') || 'home';
    const valid = ['home', 'shop', 'about', 'contact'];
    const page = valid.includes(key) ? key : 'home';
    showPage(page);
    if (page === 'shop') renderShop();
    document.title = 'ComicVerse — Marvel Classics Store';
  }

  updateActiveNav(hash);
  closeMobileNav();
}

/* =====================================================
   COMIC CARD
   ===================================================== */
function buildComicCard(comic) {
  return `
  <article class="comic-card" data-id="${comic.id}">
    ${comic.isNew ? '<span class="card-badge">NEW!</span>' : ''}
    <a href="#comic-${comic.id}" aria-label="View ${comic.title}">${comicCover(comic)}</a>
    <div class="quickview-overlay">
      <button type="button" class="quickview-btn" data-id="${comic.id}">QUICK VIEW 👁</button>
    </div>
    <div class="card-body">
      <h3><a href="#comic-${comic.id}">${comic.title}</a></h3>
      <p class="card-genre">${comic.genre.toUpperCase()}</p>
      <p class="card-rating">⭐ ${comic.rating}</p>
      <p class="card-price">$${comic.price.toFixed(2)}</p>
    </div>
    <div class="card-actions">
      <button type="button" class="btn btn-secondary addcart-btn" data-id="${comic.id}">ADD 🛒</button>
    </div>
  </article>`;
}

function attachCardEvents(container) {
  container.querySelectorAll('.quickview-btn').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      openQuickView(button.dataset.id);
    });
  });

  container.querySelectorAll('.addcart-btn').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      addToCart(Number(button.dataset.id));
    });
  });
}

/* =====================================================
   HOME: FEATURED CAROUSEL
   ===================================================== */
function renderFeatured() {
  const track = document.getElementById('featured-track');
  const featured = comicsData.filter(comic => comic.featured);
  track.innerHTML = featured.map(buildComicCard).join('');
  attachCardEvents(track);
}

function scrollFeatured(direction) {
  const track = document.getElementById('featured-track');
  const card = track.querySelector('.comic-card');
  const step = card ? card.offsetWidth + 24 : 250;
  track.scrollBy({ left: direction * step * 2, behavior: 'smooth' });
}

/* =====================================================
   SHOP PAGE
   ===================================================== */
function renderShop() {
  const grid = document.getElementById('shop-grid');
  const search = document.getElementById('search-input').value.toLowerCase().trim();
  const genre = document.getElementById('genre-filter').value;
  const sort = document.getElementById('sort-filter').value;

  const list = comicsData.filter(comic =>
    (comic.title.toLowerCase().includes(search) || comic.author.toLowerCase().includes(search)) &&
    (genre === 'all' || comic.genre === genre)
  );

  if (sort === 'new') list.sort((a, b) => Number(b.isNew) - Number(a.isNew) || b.rating - a.rating);
  else if (sort === 'price-low') list.sort((a, b) => a.price - b.price);
  else if (sort === 'price-high') list.sort((a, b) => b.price - a.price);
  else list.sort((a, b) => b.rating - a.rating);

  grid.innerHTML = list.length
    ? list.map(buildComicCard).join('')
    : '<p>No comics found. Try another search! 🕵️</p>';
  attachCardEvents(grid);
}

/* =====================================================
   QUICK VIEW MODAL
   ===================================================== */
function openQuickView(id) {
  const comic = findComic(id);
  if (!comic) return;

  const content = document.getElementById('quickview-content');
  content.innerHTML = `
    ${comicCover(comic)}
    <div>
      <h2>${comic.title}</h2>
      <p style="color:#666;font-weight:600;">by ${comic.author}</p>
      <p style="font-weight:800;margin-top:6px;">⭐ ${comic.rating} / 5</p>
      <p style="margin:12px 0;line-height:1.6;">${comic.synopsis}</p>
      <p style="font-weight:800;color:var(--red);font-size:1.5rem;">$${comic.price.toFixed(2)}</p>
      <div style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap;">
        <a href="#comic-${comic.id}" class="btn btn-outline quickview-details">FULL DETAILS</a>
        <button type="button" class="btn btn-secondary quickview-add">ADD TO CART 🛒</button>
      </div>
    </div>`;

  content.querySelector('.quickview-details').addEventListener('click', () => closeModal('quickview-modal'));
  content.querySelector('.quickview-add').addEventListener('click', () => addToCart(comic.id));
  openModal('quickview-modal');
}

/* =====================================================
   COMIC DETAIL PAGE
   ===================================================== */
function renderComicDetail(id) {
  const comic = findComic(id);
  if (!comic) return;

  document.title = `${comic.title} — ComicVerse`;
  document.getElementById('detail-cover').innerHTML = comicCover(comic);
  document.getElementById('detail-new-badge').style.display = comic.isNew ? 'block' : 'none';
  document.getElementById('detail-genre').textContent = comic.genre;
  document.getElementById('detail-title').textContent = comic.title;
  document.getElementById('detail-author').textContent = comic.author;
  document.getElementById('detail-rating').textContent = comic.rating;
  document.getElementById('detail-price').textContent = `$${comic.price.toFixed(2)}`;
  document.getElementById('detail-synopsis').textContent = comic.synopsis;

  const viewButton = document.getElementById('detail-view-btn');
  const addButton = document.getElementById('detail-addcart-btn');
  const buyButton = document.getElementById('detail-buy-btn');
  const downloadButton = document.getElementById('detail-download-btn');

  viewButton.onclick = () => openReader(comic.id);
  addButton.onclick = () => addToCart(comic.id);
  buyButton.onclick = () => buyNow(comic.id);
  downloadButton.onclick = () => downloadComic(comic.id, downloadButton, 'detail-download-wrap', 'detail-download-bar', 'detail-download-label');

  const owned = isOwned(comic.id);
  downloadButton.style.display = owned ? 'inline-block' : 'none';
  buyButton.style.display = owned ? 'none' : 'inline-block';
  document.getElementById('detail-download-wrap').style.display = 'none';

  let related = comicsData.filter(item => item.genre === comic.genre && item.id !== comic.id);
  if (related.length < 4) {
    const extra = comicsData
      .filter(item => item.id !== comic.id && !related.includes(item))
      .sort((a, b) => b.rating - a.rating);
    related = related.concat(extra);
  }

  const relatedElement = document.getElementById('detail-related');
  relatedElement.innerHTML = related.slice(0, 4).map(buildComicCard).join('');
  attachCardEvents(relatedElement);
}

/* =====================================================
   READER (FLIPBOOK)
   ===================================================== */
let readerState = { comic: null, index: 0, pages: [], busy: false };

function buildReaderPage(page, index, comic) {
  let body;
  if (page.text) body = `<div class="page-text">${page.text}</div>`;
  else if (page.full) body = `<img src="${page.src}" alt="${comic.title} full artwork" class="page-full">`;
  else body = coverHTML(page.src, page.crop, `${comic.title} page ${index + 1}`);

  return `
    <div class="reader-page" style="display:${index === 0 ? 'flex' : 'none'}">
      <div class="page-inner">
        <span class="page-num">Page ${index + 1}</span>
        ${body}
      </div>
    </div>`;
}

function openReader(id) {
  const comic = findComic(id);
  if (!comic) return;

  readerState = { comic, index: 0, pages: [], busy: false };
  document.getElementById('reader-title').textContent = `${comic.title} — Preview`;

  const pagesElement = document.getElementById('reader-pages');
  pagesElement.innerHTML = comic.pages.map((page, index) => buildReaderPage(page, index, comic)).join('');
  readerState.pages = Array.from(pagesElement.children);

  updateReaderIndicator();
  document.getElementById('reader-viewport').classList.remove('zoomed');
  openModal('reader-modal');
}

function updateReaderIndicator() {
  document.getElementById('reader-indicator').textContent = `${readerState.index + 1} / ${readerState.pages.length}`;
  document.getElementById('reader-prev').disabled = readerState.index <= 0;
  document.getElementById('reader-next').disabled = readerState.index >= readerState.pages.length - 1;
}

function flipTo(newIndex, direction) {
  const pages = readerState.pages;
  if (readerState.busy || newIndex < 0 || newIndex >= pages.length) return;

  const current = pages[readerState.index];
  const next = pages[newIndex];

  if (typeof window.gsap === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    current.style.display = 'none';
    next.style.display = 'flex';
    readerState.index = newIndex;
    document.getElementById('reader-viewport').scrollTop = 0;
    updateReaderIndicator();
    return;
  }

  readerState.busy = true;
  window.gsap.to(current, {
    rotateY: direction === 'next' ? -90 : 90,
    opacity: 0,
    duration: .25,
    ease: 'power1.in',
    onComplete() {
      current.style.display = 'none';
      window.gsap.set(current, { rotateY: 0, opacity: 1 });
      next.style.display = 'flex';
      document.getElementById('reader-viewport').scrollTop = 0;
      window.gsap.fromTo(
        next,
        { rotateY: direction === 'next' ? 90 : -90, opacity: 0 },
        {
          rotateY: 0,
          opacity: 1,
          duration: .3,
          ease: 'power1.out',
          onComplete() {
            readerState.busy = false;
          }
        }
      );
      readerState.index = newIndex;
      updateReaderIndicator();
    }
  });
}

/* =====================================================
   CART
   ===================================================== */
function updateCartBadge() {
  const count = Storage.getCart().reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cart-count').textContent = count;
}

function addToCart(id) {
  const cart = Storage.getCart();
  const existing = cart.find(item => item.id === Number(id));
  if (existing) existing.qty += 1;
  else cart.push({ id: Number(id), qty: 1 });

  Storage.saveCart(cart);
  updateCartBadge();
  toast('Added to cart! 🛒');
  shakeEl(document.getElementById('cart-toggle'));
}

function removeFromCart(id) {
  Storage.saveCart(Storage.getCart().filter(item => item.id !== Number(id)));
  renderCartDrawer();
  updateCartBadge();
}

function changeQty(id, delta) {
  const cart = Storage.getCart();
  const item = cart.find(cartItem => cartItem.id === Number(id));
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }

  Storage.saveCart(cart);
  renderCartDrawer();
  updateCartBadge();
}

function renderCartDrawer() {
  const cart = Storage.getCart();
  const itemsElement = document.getElementById('cart-items');

  if (!cart.length) {
    itemsElement.innerHTML = '<p>Your cart is empty. Time to find a hero! 💥</p>';
  } else {
    itemsElement.innerHTML = cart.map(item => {
      const comic = findComic(item.id);
      return `
      <div class="cart-item">
        ${comicCover(comic)}
        <div class="cart-item-info">
          <h4>${comic.title}</h4>
          <p>$${comic.price.toFixed(2)}</p>
          <div class="qty-controls">
            <button type="button" data-cart-action="decrease" data-id="${comic.id}" aria-label="Decrease ${comic.title} quantity">−</button>
            <span>${item.qty}</span>
            <button type="button" data-cart-action="increase" data-id="${comic.id}" aria-label="Increase ${comic.title} quantity">+</button>
          </div>
          <button type="button" class="remove-item" data-cart-action="remove" data-id="${comic.id}">Remove</button>
        </div>
      </div>`;
    }).join('');
  }

  const total = cart.reduce((sum, item) => sum + findComic(item.id).price * item.qty, 0);
  document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}

function openCart() {
  renderCartDrawer();
  const drawer = document.getElementById('cart-drawer');
  drawer.inert = false;
  drawer.classList.add('open');
  document.getElementById('cart-overlay').classList.add('active');
  syncBodyLock();
  requestAnimationFrame(() => document.getElementById('cart-close').focus());
}

function closeCart() {
  const drawer = document.getElementById('cart-drawer');
  const wasOpen = drawer.classList.contains('open');
  drawer.classList.remove('open');
  drawer.inert = true;
  document.getElementById('cart-overlay').classList.remove('active');
  syncBodyLock();
  if (wasOpen) document.getElementById('cart-toggle').focus();
}

/* =====================================================
   CHECKOUT
   ===================================================== */
let checkoutContext = { items: [], fromCart: true };

function openCheckout(items, fromCart = true) {
  if (!items.length) {
    toast('Your cart is empty! 🦸');
    return;
  }

  checkoutContext = { items, fromCart };
  const itemsElement = document.getElementById('checkout-items');
  itemsElement.innerHTML = items.map(item => {
    const comic = findComic(item.id);
    return `
    <div class="cart-item">
      ${comicCover(comic)}
      <div class="cart-item-info">
        <h4>${comic.title}</h4>
        <p>Qty: ${item.qty} — $${(comic.price * item.qty).toFixed(2)}</p>
      </div>
    </div>`;
  }).join('');

  const total = items.reduce((sum, item) => sum + findComic(item.id).price * item.qty, 0);
  document.getElementById('checkout-total').textContent = `$${total.toFixed(2)}`;
  closeCart();
  openModal('checkout-modal');
}

function buyNow(id) {
  openCheckout([{ id: Number(id), qty: 1 }], false);
}

function completeCheckout(event) {
  event.preventDefault();
  const form = event.target;
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const owned = Storage.getOwned();
  checkoutContext.items.forEach(item => {
    if (!owned.includes(item.id)) owned.push(item.id);
  });
  Storage.saveOwned(owned);

  if (checkoutContext.fromCart) {
    Storage.saveCart([]);
    updateCartBadge();
  }

  form.reset();
  closeModal('checkout-modal');
  toast('Demo order complete! Ready to download ⬇');

  if (location.hash.startsWith('#comic-')) renderComicDetail(location.hash.slice('#comic-'.length));
}

/* =====================================================
   DOWNLOAD
   ===================================================== */
function downloadComic(id, button, wrapId, barId, labelId) {
  if (!isOwned(id)) {
    toast('Complete the demo order first! 💳');
    return;
  }

  const comic = findComic(id);
  const wrap = document.getElementById(wrapId);
  const bar = document.getElementById(barId);
  const label = document.getElementById(labelId);

  button.disabled = true;
  wrap.style.display = 'flex';
  bar.style.width = '0%';
  let progress = 0;

  const timer = setInterval(() => {
    progress = Math.min(100, progress + Math.random() * 15 + 5);
    bar.style.width = `${progress}%`;
    label.textContent = `${Math.floor(progress)}%`;

    if (progress >= 100) {
      clearInterval(timer);
      label.textContent = 'Done! ✅';
      button.disabled = false;

      const anchor = document.createElement('a');
      anchor.href = comic.cover;
      anchor.download = `${comic.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}.jpg`;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      toast('Download complete! 📥');
    }
  }, 180);
}

/* =====================================================
   INIT
   ===================================================== */
document.addEventListener('DOMContentLoaded', () => {
  if (window.AOS) window.AOS.init({ duration: 700, once: true });

  document.getElementById('year').textContent = new Date().getFullYear();
  renderFeatured();
  updateCartBadge();
  route();

  window.addEventListener('hashchange', route);

  document.getElementById('search-input').addEventListener('input', renderShop);
  document.getElementById('genre-filter').addEventListener('change', renderShop);
  document.getElementById('sort-filter').addEventListener('change', renderShop);

  document.getElementById('featured-prev').addEventListener('click', () => scrollFeatured(-1));
  document.getElementById('featured-next').addEventListener('click', () => scrollFeatured(1));

  document.getElementById('nav-toggle').addEventListener('click', event => {
    const menu = document.getElementById('nav-menu');
    const open = menu.classList.toggle('open');
    event.currentTarget.setAttribute('aria-expanded', String(open));
  });

  document.getElementById('cart-toggle').addEventListener('click', openCart);
  document.getElementById('cart-close').addEventListener('click', closeCart);
  document.getElementById('cart-overlay').addEventListener('click', closeCart);
  document.getElementById('checkout-btn').addEventListener('click', () => openCheckout(Storage.getCart(), true));
  document.getElementById('checkout-form').addEventListener('submit', completeCheckout);

  document.getElementById('cart-items').addEventListener('click', event => {
    const button = event.target.closest('[data-cart-action]');
    if (!button) return;
    const id = Number(button.dataset.id);
    if (button.dataset.cartAction === 'increase') changeQty(id, 1);
    if (button.dataset.cartAction === 'decrease') changeQty(id, -1);
    if (button.dataset.cartAction === 'remove') removeFromCart(id);
  });

  document.getElementById('reader-next').addEventListener('click', () => flipTo(readerState.index + 1, 'next'));
  document.getElementById('reader-prev').addEventListener('click', () => flipTo(readerState.index - 1, 'prev'));
  document.getElementById('reader-zoom').addEventListener('click', () => {
    document.getElementById('reader-viewport').classList.toggle('zoomed');
  });
  document.getElementById('reader-close').addEventListener('click', () => closeModal('reader-modal'));

  document.getElementById('contact-form').addEventListener('submit', event => {
    event.preventDefault();
    event.target.reset();
    toast('Signal sent! A hero will reply soon 📡');
  });

  document.querySelectorAll('[data-close-modal]').forEach(button => {
    button.addEventListener('click', () => closeModal(button.dataset.closeModal));
  });

  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', event => {
      if (event.target === modal) closeModal(modal.id);
    });
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      document.querySelectorAll('.modal.open').forEach(modal => closeModal(modal.id));
      closeCart();
    }

    if (document.getElementById('reader-modal').classList.contains('open')) {
      if (event.key === 'ArrowRight') flipTo(readerState.index + 1, 'next');
      if (event.key === 'ArrowLeft') flipTo(readerState.index - 1, 'prev');
    }
  });
});
