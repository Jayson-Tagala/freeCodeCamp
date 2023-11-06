// DOM Manipulation

// Event Deligation

// It allows users to append a SINGLE event listener to a parent element that adds t to all of its present AND future descendants that match a selector.

document.querySelector("#sports").addEventListener("click", function (e) {
  console.log(e.target.getAttribute("id") + " is clicked");

  const target = e.target;

  if (target.matches("li")) {
    target.style.backgroundColor = "lightgrey";
  }
});

const sports = document.querySelector("#sports");
const newSports = document.createElement("li");

newSports.innerText = "Badminton";
newSports.setAttribute("id", "badminton");

sports.appendChild(newSports);
