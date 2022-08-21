const allKeys = document.querySelectorAll('.key');

// prettier-ignore
const soundArray = ['02','04','07','09','11','14','16','19','21','23','01','03','05','06','08','10','12','13','15','17','18','20','22','24',];

// prettier-ignore
const codeArray = ['z', 's', 'x', 'd', 'c', 'v', 'g', 'b', 'h', 'n', 'j', 'm', 'q', '2', 'w', '3', 'e', 'r', '5', 't', '6', 'y', '7', 'u'];

function playNote(link) {
	new Audio(link).play();
}

allKeys.forEach((key, index) => {
	const link = `sound/key${soundArray[index]}.mp3`;
	key.addEventListener('click', () => playNote(link));
});

document.addEventListener('keydown', e => {
	const pressKeyOnKeyboard = e.key;
	const numberInArray = codeArray.indexOf(pressKeyOnKeyboard);
	const index = numberInArray < 9 ? '0' + (numberInArray + 1) : numberInArray + 1;
	const link = `sound/key${index}.mp3`;
	playNote(link);
});
