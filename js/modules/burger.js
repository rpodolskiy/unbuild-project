export function burger() {
  const menu = document.querySelector('.menu__icon');
  if (menu) {
    const body = document.querySelector('.menu__body');
    menu.addEventListener("click", function(e) {
      document.body.classList.toggle('_lock');
      menu.classList.toggle('_active');
      body.classList.toggle('_active');
    });
  }
}