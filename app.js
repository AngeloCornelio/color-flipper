let colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet"
];

let isSimpleMode = true;
let simple = document.getElementById("simple");
let hex = document.getElementById("hex");
let colorText = document.getElementById("color");
let body = document.querySelector("body");
let button = document.querySelector("button");

button.addEventListener('click', () => {
  let randInt = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[randInt];
  button.style.backgroundColor = colors[randInt];
  colorText.innerText = colors[randInt];
});

simple.addEventListener('click', () => {
  simple.className = "selected";
  hex.className = "";
  isSimpleMode = true;
});

hex.addEventListener('click', () => {
  hex.className = "selected";
  simple.className = "";
  isSimpleMode = false;
})
