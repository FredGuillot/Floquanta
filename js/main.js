const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#site-nav');
const header = document.querySelector('[data-header]');

function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
  navigation?.classList.remove('is-open');
  document.body.classList.remove('menu-open');
}

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  navigation.classList.toggle('is-open', !open);
  document.body.classList.toggle('menu-open', !open);
});

navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 720) closeMenu(); });
window.addEventListener('scroll', () => header?.classList.toggle('is-sticky', window.scrollY > 24), { passive: true });
document.querySelector('[data-year]').textContent = new Date().getFullYear();

