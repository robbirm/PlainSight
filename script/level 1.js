  // === CONFIG ===
  const levelId = 'level1'; // You can change this dynamically per level
  const items = [
    { id: 'obj1', top: '60.7%', left: '54.3%', width: '17px', height: '17px', hint: 'Where did I put my medal?' },
    { id: 'obj2', top: '30%', left: '9.6%', width: '27px', height: '27px', hint: 'Is that meant to be a.. owl?' },
    { id: 'obj3', top: '55.6%', left: '9%', hint: 'Shoot the target' },
    { id: 'obj4', top: '69.9%', left: '98.4%', hint: 'Someone should clean that up...' },
    { id: 'obj5', top: '35.45%', left: '79%', hint: 'I spy a cranky cottage' },
    { id: 'obj6', top: '60.7%', left: '54.3%', width: '17px', height: '17px', hint: 'x' },
    { id: 'obj7', top: '43%', left: '30%', hint: 'x' },
    { id: 'obj8', top: '4%', left: '80%', hint: 'Its blowing the wrong way!' },
    { id: 'obj9', top: '19.9%', left: '8.4%', hint: 'x' },
    { id: 'obj10', top: '61.05%', left: '79%', hint: 'That is a long snake!' },
	{ id: 'obj11', top: '0.7%', left: '54.3%', width: '17px', height: '17px', hint: 'x' },
    { id: 'obj12', top: '11%', left: '10%', hint: 'x' },
    { id: 'obj13', top: '46.9%', left: '61.5%', hint: 'First the worst, second the best' },
    { id: 'obj14', top: '82.9%', left: '7.4%', hint: 'Buried treasure?' },
    { id: 'obj15', top: '61.05%', left: '89%', hint: 'Mr mouse didnt expect visitors' },
		
  ];

  // === Clickables ===
const backgroundImage = document.getElementById('gameImage');


// Get elements
const houseInterior1 = document.getElementById('houseInterior1');
const houseDoor1 = document.getElementById('houseDoor1');
const houseInterior1exit = document.getElementById('houseInterior1exit');


const caveInterior1 = document.getElementById('caveInterior1');
const caveDoor1 = document.getElementById('caveDoor1');
const caveInterior1exit = document.getElementById('caveInterior1exit');

const caveInterior2 = document.getElementById('caveInterior2');
const caveDoor2 = document.getElementById('caveDoor2');
const caveInterior2exit = document.getElementById('caveInterior2exit');

const brushSound = document.getElementById('brushSound');
const openSound = document.getElementById('openSound');
const closeSound = document.getElementById('closeSound');

let doorOpen1 = false;
let caveOpen1 = false;
let caveOpen2 = false;

// Internal Hidden Items

const object5 = document.querySelector('[data-id="obj5"]');
const object15 = document.querySelector('[data-id="obj15"]');

// Function to open the house
function openHouse1() {
  
  houseInterior1.style.display = 'block';
  const object5 = document.querySelector('[data-id="obj5"]');
  if (object5) object5.style.display = 'block';
  if (object5) object5.style.zIndex = '10';
  openSound.currentTime = 0;
  openSound.play();
  doorOpen1 = true;
}

function openCave1() {
  caveInterior1.style.display = 'block';
 backgroundImage.style.filter = 'blur(5px)';
 houseInterior1.style.filter = 'blur(5px)';
  brushSound.currentTime = 0;
  brushSound.play();
  caveOpen1 = true;
}

function openCave2() {
  caveInterior2.style.display = 'block';
   const object15 = document.querySelector('[data-id="obj15"]');
     if (object15) object15.style.display = 'block';
  if (object15) object15.style.zIndex = '10';
  openSound.currentTime = 0;
 openSound.play();
  caveOpen2 = true;
}

// Function to close the area
function closeHouse1() {
  houseInterior1.style.display = 'none';
  const object5 = document.querySelector('[data-id="obj5"]');
  if (object5) object5.style.display = 'none';
  closeSound.currentTime = 0;
  closeSound.play();
  doorOpen1 = false;
}

function closeCave1() {
  caveInterior1.style.display = 'none';
    backgroundImage.style.filter = 'none';
	houseInterior1.style.filter = 'none';;
  brushSound.currentTime = 0;
  brushSound.play();
  caveOpen1 = false;
}

/*
function closeCave2() {
  caveInterior2.style.display = 'none';
    const object15 = document.querySelector('[data-id="obj15"]');
  if (object15) object15.style.display = 'none';
  openSound.currentTime = 0;
  openSound.play();
  caveOpen2 = false;
}
*/



// Click door to toggle open/close

houseDoor1.addEventListener('click', () => {
  doorOpen1 ? closeHouse1() : openHouse1();
});

caveDoor1.addEventListener('click', () => {
  caveOpen1 ? closeCave1() : openCave1();
});

caveDoor2.addEventListener('click', () => {
  caveOpen2 ? closeCave2() : openCave2();
});

// Click ❌ button to close
houseInterior1exit.addEventListener('click', closeHouse1);

caveInterior1exit.addEventListener('click', closeCave1);

/* caveInterior2exit.addEventListener('click', closeCave2); */
