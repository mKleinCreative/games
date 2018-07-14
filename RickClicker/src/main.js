let clickers = 50;
let startTime = Date.now();

function sync (dom, pos) {
  dom.style.left = `${pos.x}px`;
  dom.style.top = `${pos.y}px`;
}

`${pos.x}px`

const addClicker = () => {
  const pos = {
    x: Math.random() * 500,
    y: Math.random() * 300
  };
  const img = new Image();
  img.src = 'res/images/rick.png';
  img.style.position = 'absolute';
  img.addEventListener('click', removeClicker, false);

  document.querySelector("#board").appendChild(img);
  sync(img, pos);
}