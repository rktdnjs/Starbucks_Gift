## 공부하면서 배운것

## 1. favicon
->favicon.ico 가 폴더에 있으면 자동으로 그 경로가 탭의 아이콘으로 설정됨.
-> 안되면 직접 링크추가
## 2. 브라우저 제공 스타일 초기화
[reset.css](https://www.jsdelivr.com/package/npm/reset-css)  

## 3. 설정
### 문자 인코딩 
```html
<meta charset="UTF-8"/>
```
UTF-8: 초성, 중성, 종성으로 구분하여 문자를 작성(권장)
EUC-KR: 하나의 완성된 글자를 인식

### 뷰포트 렌더링
웹페이지가 화면에 보여지는 방식.
모바일 환경에 적용.
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

* width=device-width: 화면의 가로 너비를 각 디바이스(Device)의 가로 너비와 동일하게 적용
* initial-scale=1.0: 화면의 초기 화면 배율(확대 정도)을 설정
* user-scalable=no: 사용자가 디바이스 화면을 확대(yes)/축소(no)할 수 있는지 설정
* maximum-scale=1: 사용자가 화면을 확대할 수 있는 최댓값
* minimum-scale=1: 사용자가 화면을 축소할 수 있는 최솟값

### 오픈그래프
웹페이지가 소셜 미디어(카톡,페이스북 등)로 공유될 때 우선적으로 활용되는 정보 지정. 예를들어 링크 먼저 뜨고 사진이 뜨는데 이 링크를 말함.
![이미지](https://velog.velcdn.com/images/sunn3842/post/509ea42a-e2b3-4d57-8db0-74dd3adf91e4/image.jpeg)

기본 정보!
```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Starbucks" />
<meta property="og:title" content="Starbucks Coffee Korea" />
<meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="og:image" content="./images/starbucks_seo.jpg" />
<meta property="og:url" content="https://starbucks.co.kr" />
```
* og:type: 페이지의 유형(E.g, website, video.movie)
* og:site_name: 속한 사이트의 이름
* og:title: 페이지의 이름(제목)
* og:description: 페이지의 간단한 설명
* og:image: 페이지의 대표 이미지 주소(URL)
* og:url: 페이지 주소(URL)

### 트위터 카드
-> 트위터로 공유할 때 사용
-> 가끔 이 정보가 우선되기도 함.

###  SEO : 검색엔진 최적화
구글이나 네이버 등에 자신의 웹사이트가 노출될 수 있도록 정보를 최적화 하는 방법.

### 폰트
브라우저마다 기본 폰트가 달라 반드시 설정해줘야함.(크로스브라우징 :웹 페이지 제작 시에 모든 브라우저에서 깨지지 않고 의도한 대로 올바르게(호환성) 나오게 하는 작업)
link : 병렬로 html에서 외부 css 파일 가져오는것
import : 직렬로 css 파일에서 외부 css 파일 가져오는것
[구글폰트](https://fonts.google.com/?query=nanum)

font-family: Arial, sans-serif; 
는 만약 폰트가 arial이 있으면 사용하고 없으면 일반적인 고딕체로 적용한다.

### 아이콘
[구글폰트아이콘](https://fonts.google.com/icons)
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
<div class="material-icons">search</div>
```
현재 버전 다르다고 함.
search를 upload 등의 글자로 바꾸면 아이콘도 변경됨.

### 이미지
이미지 태그는 inline 요소 -> 글자 취급 -> 아래에 공간이 약간 생김.
display: block; 처리 해주면 블럭요소로 취급하게 됨.

### position
position absolute 는 저절로 block 요소로 바뀜.
