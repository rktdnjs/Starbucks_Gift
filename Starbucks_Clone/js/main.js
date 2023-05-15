const searchEl = document.querySelector('.search');
// const searchEl = document.querySelector('.search input'); 이렇게도 할 수 있지만,
// .search를 한번 더 찾아야 하기 때문에 아래와 같이 표기하면 효율적이다.
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색'); // 속성을 지정할 때는 setAttribute를 사용한다.
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', ''); // 속성을 지정할 때는 setAttribute를 사용한다.
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
    console.log('scroll!');
    if (window.scrollY > 500) {
        // 배지 숨기기
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    } else {
        // 배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));
// _.throttle(함수, 시간) : lodash 라이브러리에서 제공하는 기능으로, 스크롤 이벤트가 발생할 때마다 함수가 실행되는 것이 아니라, 일정 시간마다 함수가 실행되도록 하는 기능이다.

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.8
        opacity: 1
    });
});