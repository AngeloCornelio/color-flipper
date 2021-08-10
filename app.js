const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const simple = document.getElementsByClassName('simple')[0];
const hex = document.getElementsByClassName('hex')[0];
const colorText = document.getElementsByClassName('color')[0];
const body = document.querySelector('body');
const action = document.getElementsByClassName('action')[0];
let isSimpleMode = true;

function randSimpleColor() {
  const randInt = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[randInt];
  action.style.backgroundColor = colors[randInt];
  colorText.innerText = colors[randInt];
}

function randHexColor() {
  let colorStr = '#';
  for (let i = 0; i < 3; i++) {
    let randInt = Math.floor(Math.random() * 256);
    let colorCode = randInt.toString(16);
    if (colorCode.length !== 2) {
      colorCode = '0' + colorCode;
    }
    colorStr += colorCode;
  }
  body.style.backgroundColor = colorStr;
  action.style.backgroundColor = colorStr;
  colorText.innerText = colorStr;
}

action.addEventListener('click', () => {
  if (isSimpleMode) {
    randSimpleColor();
  } else {
    randHexColor();
  }
});

simple.addEventListener('click', () => {
  simple.classList.add('selected');
  hex.classList.remove('selected');
  isSimpleMode = true;
  randSimpleColor();
});

hex.addEventListener('click', () => {
  hex.classList.add('selected');
  simple.classList.remove('selected');
  isSimpleMode = false;
  randHexColor();
});
