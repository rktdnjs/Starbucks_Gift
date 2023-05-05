const searchEl = document.querySelector('.search');
// const searchEl = document.querySelector('.search input'); 이렇게도 할 수 있지만,
// .search를 한번 더 찾아야 하기 때문에 아래와 같이 표기하면 효율적이다.
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색'); // 속성을 지정할 때는 setAttribute를 사용한다.
});

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', ''); // 속성을 지정할 때는 setAttribute를 사용한다.
});