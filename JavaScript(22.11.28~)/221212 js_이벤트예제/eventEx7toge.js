const titles = document.querySelectorAll(".title");
const lis = document.querySelectorAll("#tab_menu li");

console.log(titles);
/* 방법 1
titles[0].addEventListener("click", () => {
  lis[1].classList.remove("active");
  lis[2].classList.remove("active");
  lis[0].classList.add("active");
});
titles[1].addEventListener("click", () => {
  lis[0].classList.remove("active");
  lis[2].classList.remove("active");
  lis[1].classList.add("active");
});
titles[2].addEventListener("click", () => {
  lis[0].classList.remove("active");
  lis[1].classList.remove("active");
  lis[2].classList.add("active");
});
*/

/*  방법 2
titles.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    // 먼저 모든 클래스 값 제거 후
    lis.forEach((li) => li.classList.remove("active"));

    //일반함수는 this먹으나 여기서는(화살표함수) 안먹음
    console.log(this); // 화살표 함수에서는 window객체 의미
    console.log(e.target); // 내가 클릭한각 각의 title(tab)
    console.log(e.currentTarget); // 내가 클릭한각 각의 title(tab)
    // 내가 클릭한 탭에만 클래스 추가
    e.currentTarget.parentNode.classList.add("active");
  });
});
*/

const tabEvent = (e) => {
  //익명함수
  const current = e.currentTarget;
  lis.forEach((li) => li.classList.remove("active"));
  current.parentNode.classList.add("active");
};
titles.forEach((tab) => {
  tab.addEventListener("click", tabEvent);
});
