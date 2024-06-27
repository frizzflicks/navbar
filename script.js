const liElements = Array.from(document.querySelectorAll(".nav-link"));
liElements.forEach((Element, index) => {
  Element.onclick = () => {
    liElements.forEach((ele, ind) => {
      ind === index
        ? //   ? (ele.style.background = "#ffe45e")
          //   : (ele.style.background = "#ffc45e");
          ele.classList.add("clicked")
        : ele.classList.remove("clicked");
    });
  };
});
const menuItems = document.querySelector(".links");
const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  console.log(menuItems);
  menuItems.classList.toggle("menu-links");
});
