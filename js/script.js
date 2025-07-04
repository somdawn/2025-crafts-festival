const hamburgerBtn = document.querySelector('.hamburger');
const mainNav = document.querySelector('.main_nav');

hamburgerBtn.addEventListener('click', () => {
  mainNav.classList.toggle('show'); // CSS에서 'show' 클래스에 display:block 줄 예정
});

// 2. 각 nav_item을 클릭했을 때 서브메뉴 열기/닫기
const navItems = document.querySelectorAll('.nav_item');

navItems.forEach(item => {
  item.addEventListener('click', (e) => {

    const submenu = item.querySelector('.submenu');
    if (submenu) {
      submenu.classList.toggle('open');
      e.stopPropagation();
    }
  });
});