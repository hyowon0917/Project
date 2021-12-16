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





 /* 올해가 몇 년도인지 계산*/
 const thisYear = document.querySelector('.this-year')    //클래스 this-year에 표시
 thisYear.textContent = new Date().getFullYear();