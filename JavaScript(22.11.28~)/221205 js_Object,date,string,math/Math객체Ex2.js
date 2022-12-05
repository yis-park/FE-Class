// document.querySelector('#btn').click(function(){}); 아주옛날거
// document.querySelector('#btn').on('click', function(){}); 옛날거

const btn = document.querySelector("#btn"); //제일최신거

// btn.addEventListener("click", function () {});

// function bgColor() { } 선언함수
const bgColor = () => {
  //이아이로 쓰기
};

btn.addEventListener("click", bgColor); //콜백함수로 사용
