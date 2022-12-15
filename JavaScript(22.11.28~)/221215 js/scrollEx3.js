const man = document.querySelector(".man");
const h1 = document.querySelector("h1");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

addEventListener("scroll", () => {
  h1.style.bottom = `-${scrollY}px`;
  left.style.left = `-${scrollY / 5}px`;
  right.style.left = `${scrollY / 5}px`;
  man.style.bottom = `-${scrollY / 3}px`;
});
