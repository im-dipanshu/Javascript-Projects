const menuEl = document.getElementById("Menu");
const sideEl = document.querySelector(".SideBar");

const searchboxEl = document.getElementById("searchBox");
const searchbuttonEl = document.getElementById("searchButton");
const h1El = document.getElementById("cocoaText");
const h2El = document.getElementById("almondsText");
const h3El = document.getElementById("coffeeText");
const cocoaEl = document.getElementById("cocoa");
const almondsEl = document.getElementById("almonds");
const coffeeEl = document.getElementById("coffeBeans");
const seacrhdivEl = document.getElementById("Search");
const paragraphEl = document.querySelectorAll("#contentPara");
const shareButton = document.getElementById("shareButton");
let isOpen = false;

menuEl.addEventListener("click", function () {
  isOpen = !isOpen;
  if (menuEl.src.endsWith("12314149.png")) {
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
      "https://cdn-icons-png.flaticon.com/128/12314/12314149.png",
    );
  }
});

searchbuttonEl.addEventListener("click", function () {
  const searchText = searchboxEl.value.trim().toLowerCase();

  const headingText1 = h1El.textContent.trim().toLowerCase();
  const headingText2 = h2El.textContent.trim().toLowerCase();
  const headingText3 = h3El.textContent.trim().toLowerCase();

  if (headingText2.includes(searchText)) {
    seacrhdivEl.prepend(coffeeEl);
    seacrhdivEl.classList.add("secondBody");
  }
  if (headingText1.includes(searchText)) {
    seacrhdivEl.prepend(cocoaEl);
    seacrhdivEl.classList.add("secondBody");
  }
  if (headingText3.includes(searchText)) {
    seacrhdivEl.prepend(almondsEl);
    seacrhdivEl.classList.add("secondBody");
  }

  // for (i = 0; i <= paragraphEl.length; i++) {
  //   const para = paragraphEl[i].textContent.trim().toLowerCase();
  //   if (para.includes(searchText)) {
  //     seacrhdivEl.prepend(paragraphEl[i]);
  //   }
  // }
});

shareButton.addEventListener("click", function (event) {
  if (navigator.share) {
    navigator
      .share({
        title: "Google official websites",
        url: "https://www.google.com",
      })
      .then(() => {
        console.log("Thanks for sharing by the way");
      })
      .catch((error) => {
        console.log("Error using web share api");
        console.log(error);
      });
  } else {
    alert("Browser does not support this facility!");
  }
});
