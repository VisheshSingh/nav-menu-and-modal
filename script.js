const toggleBtn = document.getElementById('toggle');
const nav = document.getElementById('nav');
const close = document.getElementById('btn-close');
const modal = document.getElementById('modal');

function toggleMenu() {
  document.body.classList.toggle('show-nav');
}

toggleBtn.addEventListener('click', toggleMenu);
