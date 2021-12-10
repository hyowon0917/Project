const searchEl = document.querySelector('.search'); /*document = html 자체, 하나의 요소, 독타입*/
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {    // 클릭 이벤트
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');                       // 검색 요소에 focused 추가
  searchInputEl.setAttribute('placeholder', '통합검색');    //set 지정, attribute html 속성에, (속성이름,속성값)
});

searchInputEl.addEventListener('blur', function () {       // focus 해제 시
  searchEl.classList.remove('focused');                    // 제거
  searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {      // 설치한 rodash라는 js 라이브러리의 명령어 쓸 수 있게, 스크립트 연결 상태
  console.log(window.scrollY);                                        // 스크롤 시 실행되는 함수 갯수를 _.throttle 기능을 통해 일정 시간에 한 번 씩만 실행되도록 제한 걸기
  if(window.scrollY > 500) {
    // 배지 숨기기
    //badgeEl.style.display = 'none'            // 전역 속성 style
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display : 'none'    // 시각적으로가 아닌 진짜 사라지도록
    });
  } else {
    // 배지 보이기
    //badgeEl.style.display = 'block'
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display : 'block'
    });
  }
}, 300));       // 0.3초 

// _.throttle(함수, 시간)


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay : (index + 1) * .7,  // 0.7, 1.4, 2.1, 2.7 각 초 뒤에 요소 opacity 처리
    opacity : 1
  });
});


// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction : 'vertical',             // 수직 슬라이드, 옵션 direction : 방향 의미
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});


new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal'                           // 수평 슬라이드
  autoplay: {                                          // 자동 재생 여부
    delay: 5000                                        // 5초마다 슬라이드 변경
  },
  loop: true,
  slidesPerView: 3,                                    // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10,                                    // 슬라이드 사이 여백
  centeredSlides: true,                                // 1번 슬라이드가 가운데 보이기
  pagination: {                                         // 페이지 번호 사용 여부
    el: '.promotion .swiper-pagination',                // 페이지 번호 요소 선택자
    clickable: true                                     // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {                                         // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev',                  // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next'                   // 다음 버튼 선택자
  }
})


new Swiper('.awards .swiper-container', {
  autoplay: true, 
  loop: true, 
  spaceBetween: 30, 
  slidesPerView: 5,
  // slidesPerGroup: 5                                  // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})