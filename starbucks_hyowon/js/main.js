const searchEl = document.querySelector('.search');   //document = html 자체, 하나의 요소, 독타입
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
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {      // 설치한 rodash라는 js 라이브러리의 명령어 쓸 수 있게, 스크립트 연결 상태
  console.log(window.scrollY);                                        // 스크롤 시 실행되는 함수 갯수를 _.throttle 기능을 통해 일정 시간에 한 번 씩만 실행되도록 제한 걸기
  if(window.scrollY > 500) {
    // 배지 숨김
    //badgeEl.style.display = 'none'            // 전역 속성 style
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display : 'none'    // 시각적으로가 아닌 진짜 사라지도록
    });
    // 버튼 보임
    gsap.to(toTopEl, .2, {
      x:0                   // 원래 위치
    });

  } else {
    // 배지 보임
    //badgeEl.style.display = 'block'
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display : 'block'
    });
    // 버튼 숨김
    gsap.to(toTopEl, .2, {
      x:100                   // x축 이동값
    });
  }
}, 300));       // 0.3초 

// _.throttle(함수, 시간)


toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {     /*0.7초 동안*/
    scrollTo : 0            /*스크롤의 위치, 화면의 위치를 0px 위치로 옮겨주겠다, gsap의 플러그인 : scrollTo*/
  });
});


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
});

new Swiper('swiper-container', {
  autoplay: true,   // 자동 재생
  loop: true,       // 반복 재생
  spaceBetween:30,   // 사이사이 여백
  slidesPerView: 5,    // 한 번에 보여줄 슬라이드 개수
  navigation: {                                         
    prevEl: '.awards .swiper-prev',                
    nextEl: '.awards .swiper-next'                 
  }
});


new Swiper('.awards .swiper-container', {
  autoplay: true, 
  loop: true, 
  spaceBetween: 30,                               // 사이사이의 여백
  slidesPerView: 5,                               // 하나의 화면에 몇 개의 슬라이드가 보일 것이냐
  // slidesPerGroup: 5                                  // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

/* Promotion 슬라이드 토글 기능*/
// 슬라이드 영역 요소 검색
const promotionEl = document.querySelector('.promotion')
// 슬라이드 영역를 토글하는 버튼 검색
const promotionToggleBtn = document.querySelector('.toggle-promotion')
// 슬라이드 영역 숨김 여부 기본값
let isHidePromotion = false
// 토글 버튼을 클릭하면,
promotionToggleBtn.addEventListener('click', function () {
 // 슬라이드 영역 숨김 여부를 반댓값 할당
 isHidePromotion = !isHidePromotion
 // 요소를 숨겨야 한다면
 if (isHidePromotion) {
   promotionEl.classList.add('hide')
 // 요소가 보여야 한다면
 } else {
   promotionEl.classList.remove('hide')
 }
})


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


// 영상 위에 떠있는 애니메이션

function floatingObject(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션);    :gsap : 자바스크립트 애니메이션 라이브러리
  gsap.to(selector,   // 선택자
    random(1.5, 2.5),    // 애니메이션 동작 시간
    { // 옵션 
    y: size,                   // Y축으로 얼마만큼 움직이면서 애니메이션 처리할 건지 
    repeat: -1,             // 몇 번 반복할 건지 : -1 : 무한 반복
    yoyo: true,             // 한번 재생된 애니메이션을 다시 뒤로 재생하여 (위에서 아래, 다시 위로)구조 형성   
    ease: Power1.easeInOut,    // 옵션 : ease 함수 : 움직임 제어, gsap easing 에서 가져옴 
    delay: random(0,delay)                  // 지연 시간
  });
}

floatingObject('.floating1', 1, 15);   //함수 실행 (selector, delay, size) size:px
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


//ScrollMagic

const spyEls = document.querySelectorAll('section.scroll-spy')    //spyEls - s : 복수형
// 요소들 반복 처리
spyEls.forEach(function (spyEl) {
  new ScrollMagic     // 생성자 함수
    //메소드를 체이닝 형태로,보기 깔끔하게
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // Toggle:넣다뺐다 제어 역할, 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당:필수 사항, .addTo :컨트롤러라는 개념 사용을 위한, Controller() : 메소드
});


 /* 올해가 몇 년도인지 계산*/
 const thisYear = document.querySelector('.this-year')    //클래스 this-year에 표시
 thisYear.textContent = new Date().getFullYear();