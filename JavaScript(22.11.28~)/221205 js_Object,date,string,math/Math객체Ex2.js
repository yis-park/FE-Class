// document.querySelector('#btn').click(function(){}); 아주옛날거
// document.querySelector('#btn').on('click', function(){}); 옛날거

const btn = document.querySelector("#btn"); //제일최신거

// btn.addEventListener("click", function () {});

// function bgColor() { } 선언함수
const bgColor = () => {
  //이아이로 쓰기
  // 랜덤 컬러(명도, 채도의 % 그대로 두고 색상의 값을 랜덤으로)
  // 0~359까지의 임의의 수
  let ran = Math.trunc(Math.random() * 360);
  console.log(ran);
  let ranColor1 = `hsl(${ran},83%, 12% )`;
  let ranColor2 = `hsl(${ran + 40}, 86%, 50%)`;

  // setProperty('속성','값'); css 속성 제어

  document.body.style.setProperty("--bg1", ranColor1);
  document.body.style.setProperty("--bg2", ranColor2);
};

btn.addEventListener("click", bgColor); //콜백함수로 사용
