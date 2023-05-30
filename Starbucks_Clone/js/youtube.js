var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// onYouTubeIframeAPIReady 함수 이름은 해당 API에서 사용하는 이름이다.
// 따라서 다른 이름으로 지정하면 동작하지 않기 때문에, 이점 유의하자!
function onYouTubeIframeAPIReady() {
  // 아래 Player 객체의 1번째 매개변수로 우리가 정해놓은 id의 값이 들어간다.
  // <div id="player"></div>
  new YT.Player("player", {
    videoId: "An6LvWQuj_8", // 최초 재생할 유튜브 영상의 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무 - 반복 재생할 영상의 ID를 추가로 주어야 함!
      playlist: "An6LvWQuj_8", // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 객체에 함수 데이터가 있는 경우 메소드라고 부름
      onReady: function (event) {
        event.target.mute(); // 음소거
      },
    },
  });
}
