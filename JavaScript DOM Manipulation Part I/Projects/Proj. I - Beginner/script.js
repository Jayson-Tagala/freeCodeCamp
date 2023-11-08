// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote:
      "A musician must make music, an artist must paint, a poet must write, if he is to be ultimately at peace with himself. What a man can be, he must be",
    person: "Abraham Maslow",
  },
  {
    quote: "The only thing we have to fear is fear itself. ",
    person: "Franklin D. Roosevelt",
  },
  {
    quote:
      "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    person: "Martin Luther King Jr.",
  },
  {
    quote:
      "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart",
    person: "Helen Keller",
  },
  {
    quote:
      "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
    person: "John Lennon",
  },
  {
    quote:
      "The most important thing is to enjoy your life - to be happy - it's all that matters.",
    person: "Steve Jobs",
  },
  {
    quote:
      "Don't let anyone tell you what you can't do. Follow your dreams and persist.",
    person: "Barack Obama",
  },
  {
    quote:
      "Life is what we make it and how we make it – whether we realize it or not.",
    person: "Napoleon Hill",
  },
  {
    quote:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
    person: "Albert Einstein",
  },
  {
    quote:
      "So we beat on, boats against the current, borne back ceaselessly into the past.",
    person: "F. Scott Fitzgerald",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
