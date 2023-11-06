// DOM Manipulation

//GetElementByID()

// const title = document.getElementById("main-heading");
// console.log(title);

//GetElementByClassName()
// const listItem = document.getElementsByClassName("list-items");
// console.log(listItem);

// getElementsByTagName()

// const listItems = document.getElementsByTagName("li");
// console.log(listItems);

// querySelector()

// const container = document.querySelector("div");
// console.log(container);

// querySelectorAll()

// const container = document.querySelectorAll('div');
// console.log(container);

// const title = document.querySelector("#main-heading");
// title.style.color = "red";
//
// const listItems = document.querySelectorAll("list-items");

//for (i = 0; i < listItems.length; i++) {
//listItems[i].style.fontSize = "5rem";
//}

// Creating Elements

const ul = document.querySelector("ul");
const li = document.createElement("li");
// Adding Elements
ul.append(li);
// Modify the text

const firstListItem = document.querySelector(".list-items");
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);
//

// li.innerText = "X-men";

// Modifying Attributes & Classes

// li.setAttribute("id", "main-heading");
// li.removeAttribute("id");

// const title = document.querySelector("main-heading");

// console.log(title.getAttribute("id"));

// li.classList.add("list-items");

// Remove Elements

// li.remove();
