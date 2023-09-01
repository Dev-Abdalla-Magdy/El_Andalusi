/* Start Scroller */

let scroll = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scroll.style.width = `${(scrollTop / height) * 100}%`;
});

/* End Scroller */

/* Start Other Links OnClick */
const links = document.querySelector(".links");
const menu = document.querySelector("#menu");

menu.addEventListener("click", () => {
  links.classList.toggle("active");
  menu.classList.toggle("active");
});
/* End Other Links OnClick */
