const allKeys = document.querySelectorAll('.key');
const downBtn = document.querySelector('.octave_down');
const upBtn = document.querySelector('.octave_up');
const octaveNumber = document.querySelector('.octave_number');
const pianosynth = document.querySelector('.pianosynth');
let currentOctave = ['1-2', '2-3', '3-4', '4-5', '5-6', '7'];
let i = 2;
octaveNumber.textContent = currentOctave[i];
// prettier-ignore
//
// a array with the order of sounds corresponding to the name in the sound directory
// tablica która ustawia kolejność dźwieków fortepianu z katalogu source, ponieważ najpierw jest 10 klawiszy czarnych a potem 15 białych a w katalogu dźwięki są po kolej, trzeba było ustawic tablice naprawiającą kolejność
const soundArray = ['02','04','07','09','11','14','16','19','21','23','01','03','05','06','08','10','12','13','15','17','18','20','22','24','25'];

// prettier-ignore
// array with the code of the pressed keys, the order corresponds to the order of the sounds in the soundArray array
//tablica z keycodem wciśniętego klawisza, kolejność koresponduje z kolejnością dźwięków w tablicy soundArray
const codeArray = [83, 68, 71, 72, 74, 50, 51, 53, 54, 55, 90, 88, 67, 86, 66, 78, 77, 81, 87, 69, 82, 84, 89, 85, 73];

function playNote(link) {
	new Audio(link).play();
}

allKeys.forEach((key, index) => {
	key.addEventListener('click', () => {
		linkOctave(index);
	});
});

function linkOctave(index) {
	octaveNumber.textContent = currentOctave[i];
	const link = `sound/octave${currentOctave[i]}/key${soundArray[index]}.mp3`;
	playNote(link);
}

function octaveUp() {
	i++;
	i <= 5 ? '' : (i = 5);
	octaveNumber.textContent = currentOctave[i];
	linkOctave(index);
}

function octaveDown() {
	i--;
	i >= 0 ? '' : (i = 0);
	octaveNumber.textContent = currentOctave[i];
	linkOctave(index, currentOctave[i]);
}

document.addEventListener('keydown', e => {
	try {
		const pressKeyOnKeyboard = e.keyCode; //variable with keycode number, key "z" = keycode '90'
		const index = codeArray.indexOf(pressKeyOnKeyboard); // indicates index the keycode of the pressed key in the codeArray array
		/* let i = index < 9 ? '0' + (index + 1) : index + 1; */
		/* const link = `sound/key${i}.mp3`; */
		linkOctave(index);
		const keypress = document.getElementsByClassName('key')[index]; // we take the key pressed and set the active class to it and change background on yellow
		keypress.classList.add('active');
		setTimeout(() => keypress.classList.remove('active'), 50); //remove classe active and yellow background
	} catch (error) {
		console.error('This key in computer keyboard is no bind with any sound');
	}
});

document.addEventListener('keydown', e => {
	if (e.keyCode === 39) octaveUp();
	if (e.keyCode === 37) octaveDown();
});

upBtn.addEventListener('click', octaveUp);
downBtn.addEventListener('click', octaveDown);

function pianosynthColorChange() {
	setInterval(() => {
		let r = Math.floor(Math.random() * 255 + 1);
		let g = Math.floor(Math.random() * 255 + 1);
		let b = Math.floor(Math.random() * 255 + 1);
		let r1 = Math.floor(Math.random() * 255 + 1);
		let g1 = Math.floor(Math.random() * 255 + 1);
		let b1 = Math.floor(Math.random() * 255 + 1);
		pianosynth.style.cssText = `background: linear-gradient(to right, rgb(${r}, ${g}, ${b}), rgb(${r1}, ${g1}, ${b1})); -webkit-background-clip: text; -webkit-text-fill-color: transparent`;
		console.log(pianosynth.style.cssText);
	}, 2000);
}
pianosynthColorChange();



// const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// function playsound() {
// 	const oscillator = audioContext.createOscillator();
// 	const gainNode = audioContext.createGain();
// 	oscillator.connect(gainNode);
// 	gainNode.connect(audioContext.destination);

// 	oscillator.type = 'triangle';
// 	// oscillator.type = "sine";
// 	// oscillator.type = "square";
// 	// oscillator.type = "sawtooth";

// 	oscillator.frequency.value = 440;

// 	const now = audioContext.currentTime;
// 	gainNode.gain.setValueAtTime(10, now);
// 	gainNode.gain.exponentialRampToValueAtTime(0.11, now + 0.7);
// 	oscillator.start(now);
// 	oscillator.stop(now + 0.7);
// }

