const menuButton = document.querySelector('#menuBtn');
const nav = document.querySelector('#nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#loginBtn').addEventListener('click', () => {
  alert('Roblox account connection is coming in a future BIXI update! Never enter your Roblox password on unofficial login forms.');
});
