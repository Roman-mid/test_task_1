const menuBtn = document.querySelectorAll('.menu__button'),
      statusBtn = document.querySelectorAll('.costomers__status_btn'),
      pageBtn = document.querySelectorAll('button.costomers__page'),
      burgerMenu = document.querySelector('.burger-mune'),
      menu = document.querySelector('.menu')
;




menuBtn.forEach( btn => {
  btn.addEventListener('click' , () => {
    menuBtn.forEach(btn => btn.classList.remove('color'))
    btn.classList.add('color')
  });
});

statusBtn.forEach( btn => {
  btn.addEventListener('click' , () => {
    btn.classList.toggle('inactive');
    btn.classList.contains('inactive') ? btn.textContent = 'Inactive' : btn.textContent = 'Active';
  });
});

pageBtn.forEach(btn => {
  btn.addEventListener('click' , () => {
    pageBtn.forEach(btn => btn.classList.remove('page_active'))
    btn.classList.add('page_active')
  });
});

burgerMenu.addEventListener('click' , () => {
  menu.classList.toggle('active');
});