const slideItems = document.querySelectorAll("#slideWrapper .slideItem");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// (function(){})(); 즉시실행함수로 함수 호출하지 않고 바로 실행 가능
(function autoSlide() {
  let i = 0;
  prevBtn.addEventListener("click", () => {
    slideItems[i].classList.remove("active");
    i--;
    i < 0 ? (i = slideItems.length - 1) : false;
    slideItems[i].classList.add("active");
  });

  nextBtn.addEventListener("click", () => {
    slideItems[i].classList.remove("active");
    i++;
    if (i >= slideItems.length) {
      i = 0;
    }
    slideItems[i].classList.add("active");
  });
})();
// autoSlide();
// setInterval(콜백함수, 시간);
setInterval(function autoSlide() {
  nextBtn.click();
}, 3000);
