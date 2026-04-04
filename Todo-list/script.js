//All the elements from html
let inputBox = document.querySelector(".holder");
let addBtn = document.querySelector(".save");
let mainBar = document.querySelector(".main-bar");
let changeTheme = document.querySelector(".theme");
let sideBar = document.querySelector(".sidebar");
let bodyElement = document.querySelector("body");
let tagbox = document.querySelector(".tags");

//Extra Functionalities
let date = new Date();
let flag = 0;

//Add button
addBtn.addEventListener("click", function () {
  if (inputBox.value !== "") {
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("tasks");

    let taskText = document.createElement("p");
    taskText.textContent = `Task : ` + inputBox.value;

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.style.cursor = "pointer";
    let navBars = document.createElement("div");
    navBars.classList.add("navBar");

    checkBox.addEventListener("click", function () {
      if (checkBox.checked) {
        taskText.classList.add("lineThrough");
        tag.classList.add("lineThrough");
      } else {
        taskText.classList.remove("lineThrough");
        tag.classList.remove("lineThrough");
      }
    });

    const imageButton = document.createElement("button");
    imageButton.setAttribute("id", "myImageButton");
    const buttonImage = document.createElement("img");
    buttonImage.setAttribute("src", "trash.png");
    buttonImage.setAttribute("alt", "Delete image");

    let Time = document.createElement("p");
    Time.textContent = date.toLocaleString();

    imageButton.appendChild(buttonImage);
    imageButton.addEventListener("click", function () {
      taskDiv.remove();
      checkBox.remove();
    });

    let tag = document.createElement("p");
    tag.classList.add("work");
    tag.textContent = `tag : ` + tagbox.value;

    let edit = document.createElement("button");
    edit.setAttribute("id", "editImageButton");
    let editImage = document.createElement("img");
    editImage.setAttribute(
      "src",
      "https://www.svgrepo.com/show/325130/edit-pencil.svg",
    );
    editImage.setAttribute("alt", "Edit image");

    edit.appendChild(editImage);
    edit.addEventListener("click", function () {});

    taskDiv.append(taskText);
    taskDiv.append(tag);
    mainBar.append(taskDiv);
    mainBar.append(checkBox);
    taskDiv.prepend(imageButton);
    taskDiv.append(Time);
    if (flag === 0) {
      mainBar.prepend(navBars);
      flag += 1;
    }
    taskDiv.append(edit);
    inputBox.value = "";
    tagbox.value = "";
  }
});
