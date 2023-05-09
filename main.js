const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchEl.focus();
});

searchEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});