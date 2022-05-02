const points = document.querySelector('.points');
const items = document.querySelectorAll('.item');
const moles = document.querySelectorAll('.mole');
const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const timer = document.querySelector('.time');
let point = 0;
let time = 60;

let interval;
let timeInterval;

const startGame = () => {
	startBtn.classList.remove('block');
	startBtn.classList.add('none');
	timeInterval = setInterval(startTimer, 1000);
	interval = setInterval(showMole, 800);
};

const startTimer = () => {
	time--;
	timer.textContent = `${time}`;
};

function showMole() {
	let index = Math.floor(Math.random() * 9);
	moles[index].classList.add('block');
	moles[index].classList.remove('none');
	moles.forEach((el) => {
		if (el.classList.contains('block')) {
			const removeMole = () => {
				moles[index].classList.remove('block');
				moles[index].classList.add('none');
			};
			setTimeout(removeMole, 500);
		}
	});
}

const addPoint = (e) => {
	point++;
	points.textContent = `${point}`;
	e.target.classList.remove('block');
	e.target.classList.add('none');
};

const reset = () => {
	point = 0;
	time = 60;
	points.textContent = `${point}`;
	timer.textContent = `${time}`;
	startBtn.classList.add('block');
	clearInterval(interval);
	clearInterval(timeInterval);
};

startBtn.addEventListener('click', startGame);
moles.forEach((el) => {
	el.addEventListener('click', addPoint);
});
resetBtn.addEventListener('click', reset);
