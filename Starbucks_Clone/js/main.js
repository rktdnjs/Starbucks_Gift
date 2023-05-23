// [검색창 관련 처리]
// Class가 search인 요소를 찾아 searchEL로 사용함
const searchEl = document.querySelector('.search');

// 아래 2개 코드는 같은 기능을 수행한다. 중복되는 부분을 searchEL을 통해서 제거한 것!(최적화)
// const searchInputEL = document.querySelector('.search input');
const searchInputEl = searchEl.querySelector('input');

// 클릭 이벤트 동작 시 2번째 인자로 넣은 함수 작동
searchEl.addEventListener('click', function () {
    // 로직 : 검색 부분에 focus 하도록 실행함
    // search 영역만 클릭해도 자동으로 input이 선택되도록 함수를 만들어 준 것!
    searchInputEl.focus();
});

// 검색창 속성 추가 관련 함수
searchInputEl.addEventListener('focus', function() {
    // focused 클래스를 searchEl에 추가하겠다. = serach 클래스의 div요소에 focused 클래스 추가
    searchEl.classList.add('focused');

    // 어떤 속성을 설정해줌
    // 1번째 인자 : 설정할 속성
    // 2번째 인자 : 속성과 관련된 값
    searchInputEl.setAttribute('placeholder', '통합검색');
})

// 검색창 속성 제거 관련 함수(위와 반대 역할)
searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
})


// [뱃지 관련 처리]
const badgeEl = document.querySelector('header .badges');

// window : 우리가 보고있는 창 그 자체
// 스크롤 할 경우 이에 대한 이벤트 리스너가 이에 대한 작업을 처리함
// 스크롤 1번할 때마다 함수가 너무 많이 실행되서 이 부분을 처리 해줌!
// Lodash 라는 JS 라이브러리의 특수한 명령어를 가져와서 사용함!
// 함수가 우루루 실행되는 것이 아닌 0.3초의 제한을 둬서 띄엄띄엄 실행되도록 함
// _.throttle(함수, 시간)

// 자바스크립트에서 애니메이션 효과를 줄 수 있는 라이브러리를 가져다 쓰기
window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        // 뱃지 숨기기
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, 0.6, {
            opacity : 0,
            display : 'none'
        })
    } else {
        // 뱃지 보이기
        gsap.to(badgeEl, 0.6, {
            opacity : 1,
            display : 'block'
        })
    }
}, 300))

// [Visual 섹션 처리]
const fadeEls = document.querySelectorAll('.visual .fade-in');

// forEach는 가져온 요소들에 대해서 하나하나 요소를 꺼내서 사용함
// 이때 내부 function에 2가지 인자를 줄 수 있다.
// 하나는 꺼내서 쓸 요소의 명칭 + 반복되는 횟수를 받아서 쓸 명칭
fadeEls.forEach(function (fadeEl, index) {
    // gsap.to(요소, 지속시간, 옵션);
    // index를 통해 시간차를 둘 수 있다!
    gsap.to(fadeEl, 1, {
        delay : (index + 1) * 0.7,
        opacity : 1
    })
}); 

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction : 'vertical',
    autoplay : true,
    loop : true,
});

new Swiper('.promotion .swiper-container', {
    // direction: 'horizontal' 기본값!
    slidesPerView : 3, // 한 번에 보여줄 슬라이드 개수
    spaceBetween : 10, // 슬라이드 사이의 여백이 설정됨
    centeredSlides : true, // 1번 슬라이드가 가운데에 보이기 설정
    loop : true, // 슬라이드 반복
    autoplay : {
        delay : 5000// 기본값 : 3000(3초)
    },
    pagination : {
        el : '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable : true, // 사용자의 페이지 번호요소 제어 가능 여부
    },
    navigation : { // 전 슬라이드와 다음 슬라이드를 볼 수 있는 기능
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

