const points = document.querySelector('.points');
const items = document.querySelectorAll('.item');
const moles = document.querySelectorAll('.mole');
const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const timer = document.querySelector('.time');
const gameField = document.querySelector('.container');
const scorePanel = document.querySelector('.score-panel');
const closeBtn = document.querySelector('.close');
let point = 0;
let time = 60;
let click = 0;

let interval;
let timeInterval;

const startGame = () => {
	click = 0;
	startBtn.classList.remove('block');
	startBtn.classList.add('none');
	timeInterval = setInterval(startTimer, 1000);
	interval = setInterval(showMole, 800);
	gameField.addEventListener('click', clickCounter);
};

const startTimer = () => {
	time--;
	timer.textContent = `${time}`;
	if (time <= 0) {
		endGame();
	}
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
	click = 0;
	points.textContent = `${point}`;
	timer.textContent = `${time}`;
	startBtn.classList.add('block');
	clearInterval(interval);
	clearInterval(timeInterval);
};

const clickCounter = () => {
	click++;
};

const endGame = () => {
	const score = document.querySelector('.score');
	const clicks = document.querySelector('.shots');
	const onTarget = document.querySelector('.on-target');
	const personalBestTxt = document.querySelector('.pb');
	const procent = point / click;
	let personalBest = localStorage.getItem('score');
	if (parseFloat(personalBest) < `${point}`) {
		localStorage.setItem('score', `${point}`);
	}
	clearInterval(timeInterval);
	clearInterval(interval);
	score.textContent = `Score: ${point}`;
	clicks.textContent = `Shots: ${click}`;
	onTarget.textContent = `On target: ${(procent.toFixed(2) * 100).toFixed(0)}%`;
	personalBestTxt.textContent = 'PB: ' + localStorage.getItem('score');
	scorePanel.classList.add('flex');
	scorePanel.classList.remove('none');
};

const closeScorePanel = () => {
	if (scorePanel.classList.contains('flex')) {
		scorePanel.classList.remove('flex');
		scorePanel.classList.add('none');
	}
	reset();
};

startBtn.addEventListener('click', startGame);
moles.forEach((el) => {
	el.addEventListener('click', addPoint);
});
resetBtn.addEventListener('click', reset);
closeBtn.addEventListener('click', closeScorePanel);
