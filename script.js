const allKeys = document.querySelectorAll('.key');

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
	const link = `sound/octave3-4/key${soundArray[index]}.mp3`;
	key.addEventListener('click', () => playNote(link));
});

document.addEventListener('keydown', e => {
	try {
		const pressKeyOnKeyboard = e.keyCode; //variable with keycode number, key "z" = keycode '90'
		const numberInArray = codeArray.indexOf(pressKeyOnKeyboard); // indicates index the keycode of the pressed key in the codeArray array
		/* let index = numberInArray < 9 ? '0' + (numberInArray + 1) : numberInArray + 1; */
		/* const link = `sound/key${index}.mp3`; */
		const link = `sound/octave3-4/key${soundArray[numberInArray]}.mp3`;
		const keypress = document.getElementsByClassName('key')[numberInArray]; // we take the key pressed and set the active class to it and change background on yellow
		keypress.classList.add('active');
		setTimeout(() => keypress.classList.remove('active'), 50); //remove classe active and yellow background
		playNote(link);
	} catch (error) {
		console.error('This key in computer keyboard is no bind with any sound');
	}
});
