const menuEl = document.getElementById("Menu");
const sideEl = document.querySelector(".SideBar");

let isOpen = false;

menuEl.addEventListener("click", function () {
  isOpen = !isOpen;
  if (menuEl.src.endsWith("1828859.png")) {
    menuEl.style.width = "80px";
    console.log("hi");
  } else {
    menuEl.style.width = "40px";
  }
  if (isOpen) {
    sideEl.classList.add("AddId");
    menuEl.setAttribute(
      "src",
      "https://cdn-icons-png.flaticon.com/128/2319/2319179.png",
    );
  } else {
    sideEl.classList.remove("AddId");
    menuEl.setAttribute(
      "src",
      "https://cdn-icons-png.flaticon.com/128/1828/1828859.png",
    );
  }
});
