const menuIcon = document.getElementById('icon-menu')
const menu = document.getElementById('menu')


menuIcon.addEventListener('click' , () => {
    if(menu.classList.contains('menu--show')){

        menu.classList.remove('menu--show');
        menu.classList.add('menu');
    }
    else{
        menu.classList.add('menu--show');
        menu.classList.remove('menu');
    }
});

window.addEventListener('resize', () => {
    if (menu.classList.contains('menu--show') && window.matchMedia("(min-with: 1024px)").matches) {

        menu.classList.remove('menu--show');
        menu.classList.add('menu');
    }
});

menuIcon.addEventListener('click', event => {
    if (menu.classList.contains('menu--show') === 'assets/images/icon-close.svg') {
      event.target.src = 'assets/images/icon-close.svg';
      event.target.dataset.image = 'assets/images/icon-close.svg';
    } else {
      event.target.src = 'assets/images/icon-hamburger.svg';
      event.target.dataset.image = 'assets/images/icon-hamburger.svg';
    }
  });