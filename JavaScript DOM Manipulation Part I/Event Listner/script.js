// DOM Manipulation

// Event Listeners

// element.addEventListener("click",function);

const buttonTwo = document.querySelector(".btn-2");

function alertBtn() {
  alert("I also love JavaScript");
}

buttonTwo.addEventListener("click", alertBtn);

// const buttonThree = document.querySelector(".btn-3");

// function alertBtn() {
//   alert("We love Javascript");
// }

buttonThree.addEventListener("click", alertBtn);

// Mouseover

const newBackgroundColor = document.querySelector(".boxes-box-3");

function changeBgColor() {
  newBackgroundColor.style.backgroundColor = "black";
}

newBackgroundColor.addEventListener("mouseover", changeBgColor);
