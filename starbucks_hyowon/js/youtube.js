var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";		// 자바스크립트 라이브러리
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubePlayerAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {			// id 값인 player 앞에 # 작성 X
    videoId: 'An6LvWQuj_8', 		 // 어떠한 id값을 가진 유튜브 영상을 출력할지 필요한 ID, 최초 재생할 유튜브 영상 ID
    playerVars: {				// var : variable 변수
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8'  // 반복 재생이 true일 경우, 반복 재생할 유튜브 영상 ID 목록으로 제공
    },
    events: {		// 객체 데이터
      // 영상이 준비되었을 때,
      onReady: function (event) {	// 객체 데이터 내부 함수 데이터 할당 : '메소드'와 '익명의 함수' (메게변수)
        event.target.mute() 		// 메게변수 event, 속성 target (재생되고 있는 영상 자체), 메소드 mute : 음소거
      }
    }
  })
}