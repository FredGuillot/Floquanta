const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#mobile-nav');
const header = document.querySelector('[data-header]');
const pageShell = document.querySelector('[data-page-shell]');
let menuScrollY = 0;
let previousScrollBehavior = '';

function lockPageScroll() {
  menuScrollY = window.scrollY;
  previousScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = 'auto';
  pageShell.style.position = 'fixed';
  pageShell.style.top = `-${menuScrollY}px`;
  pageShell.style.width = '100%';
  window.scrollTo(0, 0);
}

function unlockPageScroll() {
  pageShell.style.position = '';
  pageShell.style.top = '';
  pageShell.style.width = '';
  window.scrollTo(0, menuScrollY);
  requestAnimationFrame(() => { document.documentElement.style.scrollBehavior = previousScrollBehavior; });
}

function closeMenu({ restoreFocus = false } = {}) {
  if (menuButton?.getAttribute('aria-expanded') !== 'true') return;
  menuButton?.setAttribute('aria-expanded', 'false');
  navigation?.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  unlockPageScroll();
  if (restoreFocus) menuButton?.focus();
}

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  if (open) {
    closeMenu();
    return;
  }

  lockPageScroll();
  menuButton.setAttribute('aria-expanded', 'true');
  navigation.classList.add('is-open');
  document.body.classList.add('menu-open');
});

navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu({ restoreFocus: true }); });
window.addEventListener('resize', () => { if (window.innerWidth > 720) closeMenu(); });
window.addEventListener('scroll', () => header?.classList.toggle('is-sticky', window.scrollY > 24), { passive: true });
document.querySelector('[data-year]').textContent = new Date().getFullYear();
