const menuEl = document.getElementById("Menu");
const sideEl = document.querySelector(".SideBar");

const searchboxEl = document.getElementById("searchBox");
const searchbuttonEl = document.getElementById("searchButton");
const dairyMilkCard = document.getElementById("dairyMilk");
const ferreroCard = document.getElementById("ferreroRocher");
const kitkatCard = document.getElementById("kitkatCaramel");
const darkCard = document.getElementById("darkChoclate");
const cocoaEl = document.getElementById("cocoa");
const almondsEl = document.getElementById("almonds");
const coffeeEl = document.getElementById("coffeBeans");
const seacrhdivEl = document.getElementById("secondSearch");
const paragraphEl = document.querySelectorAll("#contentPara");
const shareButton = document.getElementById("shareButton");
const footerPara = document.getElementById("footerText");
const anchorTags = document.querySelectorAll("#addToCart");
const cartQuantity = document.getElementById("cartQuantity");
const currentYear = new Date().getFullYear();
let isOpen = false;
const value = localStorage.getItem("QuantityofCart");
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

  const dairyMilkCleanText = dairyMilkCard.textContent.trim().toLowerCase();
  const ferreroRocherCleanText = ferreroCard.textContent.trim().toLowerCase();
  const kitkatCleanText = kitkatCard.textContent.trim().toLowerCase();
  const darkChocolateCleanText = darkCard.textContent.trim().toLowerCase();

  if (dairyMilkCleanText.includes(searchText)) {
    seacrhdivEl.prepend(dairyMilkCard);
  }

  if (ferreroRocherCleanText.includes(searchText)) {
    seacrhdivEl.prepend(ferreroCard);
  }

  if (kitkatCleanText.includes(searchText)) {
    seacrhdivEl.prepend(kitkatCard);
  }

  if (darkChocolateCleanText.includes(searchText)) {
    seacrhdivEl.prepend(darkCard);
  }

  seacrhdivEl.classList.add("secondBody");
});

// for (i = 0; i <= paragraphEl.length; i++) {
//   const para = paragraphEl[i].textContent.trim().toLowerCase();
//   if (para.includes(searchText)) {
//     seacrhdivEl.prepend(paragraphEl[i]);
//   }
// }

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
let iteration = 0;

anchorTags.forEach((anchor) => {
  anchor.addEventListener("click", function () {
    let current = parseInt(cartQuantity.textContent) || 0;

    if (iteration % 2 === 0) {
      cartQuantity.textContent = current + 1;
      iteration += 1;
    } else {
      cartQuantity.textContent = current - 1;
      iteration += 1;
    }

    localStorage.setItem("QuantityofCart", cartQuantity.textContent);
  });
});
footerPara.textContent = `© ${currentYear} Chocolate Delight Affiliate. All rights reserved.`;

window.addEventListener("load", () => {
  const value = localStorage.getItem("QuantityofCart");
  cartQuantity.textContent = value;
});
