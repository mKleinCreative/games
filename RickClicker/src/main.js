let clickers = 50;
let startTime = Date.now();

function sync (dom, pos) {
  dom.style.left = `${pos.x}px`;
  dom.style.top = `${pos.y}px`;
}

const addClicker = () => {
  const pos = {
    x: Math.random() * 500,
    y: Math.random() * 300
  };
  const img = new Image();
  img.src = '../res/images/rick.png';
  img.style.position = 'absolute';
  img.addEventListener('click', removeClicker, false);

  document.querySelector("#board").appendChild(img);
  sync(img, pos);
}


const checkGameOver = () => {
  document.querySelector('#remain').innerHTML = clickers;
  if (clickers === 0) {
    const taken = Math.round((Date.now() - startTime) / 1000);
    alert(`De-ricked in ${taken} seconds!`);
  }

}

const removeClicker = (e) => {
  e.target.parentNode.removeChild(e.target);
  clickers--;
  checkGameOver();
}

for (let i = 0; i < clickers; i++) {
  addClicker();
}