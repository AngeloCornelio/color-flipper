let colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet"
];

function randSimpleColor() {
  let randInt = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[randInt];
  button.style.backgroundColor = colors[randInt];
  colorText.innerText = colors[randInt];
}

function randHexColor() {
  let colorStr = "#";
  for(let i = 0; i < 3; i++){
    let randInt = Math.floor(Math.random() * 256);
    let colorCode = randInt.toString(16);
    if(colorCode.length !== 2) {
      colorCode = "0" + colorCode;
    }
    colorStr += colorCode;
  }
  body.style.backgroundColor = colorStr;
  button.style.backgroundColor = colorStr;
  colorText.innerText = colorStr;
}

let isSimpleMode = true;
let simple = document.getElementById("simple");
let hex = document.getElementById("hex");
let colorText = document.getElementById("color");
let body = document.querySelector("body");
let button = document.querySelector("button");

button.addEventListener('click', () => {
  if(isSimpleMode) {
    randSimpleColor();
  } else {
    randHexColor();
  }
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
