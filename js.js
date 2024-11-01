// 스크롤 이벤트
window.addEventListener('scroll', () => {
  const scrollLeft = window.scrollX;

  //nav 변수 설정
  const nav = document.getElementById('menu');

  //img 변수 설정
  const img_1 = document.querySelector('.img-1');

  //text 변수 설정
  const text_1 = document.querySelector('.text-1');
  const text_2 = document.querySelector('.text-2');
  const text_3 = document.querySelector('.text-3');
  const text_5 = document.querySelector('.text-5');
  const text_6 = document.querySelector('.text-6');
  const text_8 = document.querySelector('.text-8');

  if(scrollLeft < 4000) {
    nav.classList.add('comeOut');
    nav.classList.remove('hidden');
  }
  else if(scrollLeft > 4000) {
    nav.classList.add('hidden');
    nav.classList.remove('comeOut');
  }
  if(scrollLeft >= 5380) {
    text_1.classList.add('active');
    text_1.classList.add('fadeOut');
  }
  else if(scrollLeft <= 5380) {
    text_1.classList.remove('active');
    text_1.classList.remove('fadeOut');
  }
  else if(scrollLeft <= 4000 && scrollLeft >= 3999) {
    nav.classList.add('comeOut');
    nav.classList.remove('hidden');
  }
  if(scrollLeft >= 4140) {
    img_1.classList.add('active');
  }
  else if(scrollLeft <= 4140) {
    img_1.classList.remove('active');
  }
  if(scrollLeft >= 7165) {
    text_2.classList.add('active');
  }
  else if(scrollLeft <= 7165) {
    text_2.classList.remove('active');
  }

  if(scrollLeft >= 8410) {
      text_3.classList.add('active');
  }
  else if(scrollLeft <= 8410) {
      text_3.classList.remove('active');
  }

  if(scrollLeft >= 10078) {
      text_2.classList.remove('active');
      text_3.classList.add('fadeOut');
  }
  else if(scrollLeft <= 10078) {
      text_3.classList.remove('fadeOut');
  }

  if(scrollLeft >= 12546) {
      text_5.classList.add('active');
  }
  else if(scrollLeft <= 12546) {
      text_5.classList.remove('active');
  }

  if(scrollLeft >= 13700) {
      text_6.classList.add('active');
  }
  else if(scrollLeft <= 13700) {
      text_6.classList.remove('active');
  }

  if(scrollLeft >= 15604) {
      text_5.classList.remove('active');
      text_6.classList.add('fadeOut');
  }
  else if(scrollLeft <= 15604) {
      text_6.classList.remove('fadeOut');
  }

  if(scrollLeft >= 17922) {
      text_8.classList.add('active');
  }
  else if(scrollLeft <= 17922) {
      text_8.classList.remove('active');
  }

  if(scrollLeft >= 19108) {
      text_8.classList.add('fadeOut');
  }
  else if(scrollLeft <= 19108) {
      text_8.classList.remove('fadeOut');
  }

  if(scrollLeft < 20450 && scrollLeft >= 20451) {
    nav.classList.add('hidden');
    nav.classList.remove('comeOut');
  }
 if(scrollLeft > 20450) {
    nav.classList.add('comeOut');
    nav.classList.remove('hidden');
  }

  if(scrollLeft > 4000) {
    document.addEventListener('mouseover', (event) => {
      if(scrollLeft > 4000 && scrollLeft < 20450 && event.clientY < 60) {
        nav.classList.add('comeOut');
        nav.classList.remove('hidden');
      }

      else {
       nav.classList.add('hidden');
       nav.classList.remove('comeOut');
      }
    });
  }
  // 상단바 마우스 오버
  

  console.log(scrollLeft); // 로그 출력
  console.clear();
})

// document.querySelectorAll(".js-horizontal-scroll").forEach(el => {
//   el.addEventListener("wheel", e => {
//     // 스크롤이 왼쪽 또는 오른쪽 끝에 도달했는지 확인
//     const atLeftEnd = (el.scrollLeft === 0);
    
//     // 논리상으로는 ===로 하는 게 맞겠지만, 브라우저에 따라 클 수도 있다고 하니 이렇게 둔다.
//     const atRightEnd = (el.scrollLeft + el.offsetWidth >= el.scrollWidth);

//     // 휠 이벤트가 위로 가는 것인지 아래로 가는 것인지 확인
//     const scrollingUp = (e.deltaY < 0);
//     const scrollingDown = (e.deltaY > 0);

//     if ((atLeftEnd && scrollingUp) || (atRightEnd && scrollingDown)) {
//       // 스크롤이 양 끝에 있고 사용자가 해당 방향으로 계속 스크롤하려고 하면,
//       // 이벤트의 기본 동작을 수행하여 수직 스크론을 허용합니다.
//       return;
//     }

//     // 그렇지 않으면, 가로 스크롤을 진행합니다.
//     e.preventDefault();
//     // noinspection JSSuspiciousNameCombination
//     el.scrollLeft += e.deltaY * 2;
//   })
// });

// new TypeIt("#tp", { 
//   waitUntilVisible: true,
//   startDelete: true,
//   lifeLike: true,
//   speed: 0
// })
// .type("A")
// .pause(479)
// .type("l")
// .pause(141)
// .type("l")
// .pause(842)
// .type("'")
// .pause(350)
// .type("l")
// .pause(267)
// .type("i")
// .pause(69)
// .type("g")
// .pause(92)
// .type("h")
// .pause(105)
// .type("t")
// .go();