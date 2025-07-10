
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  

const input = document.querySelector('#controls input');

const createButton = document.querySelector('[data-create]');

const destroyButton = document.querySelector('[data-destroy]');

const boxes = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
    
    const amount = Number(input.value.trim());

    if (amount => 1 && amount <= 100) {

        destroyBoxes();
        createBoxes(amount);
        input.value = '';
    }
    
});

destroyButton.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
    
    const boxElements = [];

    let size = 30;

    for (let i = 0; i < amount; i++) {

        const box = document.createElement('div');
        box.style.height = `${size}px`;
        box.style.width = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxes.appendChild(box);
        size += 10;
    }
   
}
function destroyBoxes() {
    return (boxes.innerHTML = '');
  }