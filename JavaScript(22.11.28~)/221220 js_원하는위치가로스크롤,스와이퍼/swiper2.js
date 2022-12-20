const mainSwiper = new Swiper("#mainSwiper", {
  parallax: true,
  navigation: {
    // 좌 우 클릭 버튼
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination", // 패이지네이션 역할의 요소와 연결
    type: "fraction", // 숫자
  },
  autoplay: {
    // 자동재생
    delay: 2000,
  },
});
