const points = document.querySelector('.points');
const items = document.querySelectorAll('.item');
const moles = document.querySelectorAll('.mole');
let point = 0;

const showMole = () => {
	let index = Math.floor(Math.random() * 9);
	moles[index].classList.add('block');
	moles[index].classList.remove('none');
	moles.forEach((el) => {
		if (el.classList.contains('block')) {
			const removeMole = () => {
				moles[index].classList.remove('block');
				moles[index].classList.add('none');
			};
			setTimeout(removeMole, 600);
		}
	});
};

const addPoint = (e) => {
	point++;
	console.log(point);
	points.textContent = `Points: ${point}`;
	e.target.classList.remove('block');
	e.target.classList.add('none');
};

moles.forEach((el) => {
	el.addEventListener('click', addPoint);
});
let interval = setInterval(showMole, 1000);
