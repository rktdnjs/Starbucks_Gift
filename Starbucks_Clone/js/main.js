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