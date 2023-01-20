// input fields
const inputText = document.getElementById('text');
const inputFile = document.getElementById('file');
// buttons
const eraseBtn = document.getElementById('erase-btn');
const destroyBtn = document.getElementById('destroy-btn');
const modeBtn = document.getElementById('mode-btn');
const saveBtn = document.getElementById('save');
// painting options
const color = document.getElementById('color');
const colorOptions = Array.from(
	document.getElementsByClassName('color-option')
);
const brushWidth = document.getElementById('brush-width');
// canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
// painting settings
ctx.lineWidth = brushWidth.value;
ctx.lineCap = 'round';
let isPainting = false;
let isFilling = false;

// functions
function onMove(event) {
	if (isPainting) {
		ctx.lineTo(event.offsetX, event.offsetY);
		ctx.stroke();
	}
	ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
	isPainting = true;
}
function cancelPainting() {
	isPainting = false;
	ctx.beginPath();
}

function onBrushWidthChange(event) {
	ctx.lineWidth = event.target.value;
}
function onColorChange(event) {
	ctx.strokeStyle = event.target.value;
	ctx.fillStyle = event.target.value;
}
function onColorClick(event) {
	const colorValue = event.target.dataset.color;
	ctx.strokeStyle = colorValue;
	ctx.fillStyle = colorValue;
	color.value = colorValue;
}
function onCanvasClick() {
	if (isFilling) {
		ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	}
}
function onModeChange() {
	if (isFilling) {
		isFilling = false;
		modeBtn.innerText = 'Fill';
	} else {
		isFilling = true;
		modeBtn.innerText = 'Draw';
	}
}
function onDestoryClick() {
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	ctx.strokeStyle = color.value;
}
function onEraserClick() {
	ctx.strokeStyle = 'white';
	isFilling = false;
	modeBtn.innerText = 'Fill';
}
function onFileChange(event) {
	const file = event.target.files[0];
	const url = URL.createObjectURL(file);
	const image = new Image();
	image.src = url;
	image.onload = function () {
		ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		inputFile.value = null;
	};
}
function onDoubleClick(event) {
	const text = inputText.value;
	if (inputText.value !== '') {
		ctx.save();
		ctx.lineWidth = 1;
		ctx.font = '48px serif';
		ctx.fillText(text, event.offsetX, event.offsetY);
		ctx.restore();
	}
}

function onSaveClick() {
	const url = canvas.toDataURL();
	const a = document.createElement('a');
	a.href = url;
	a.download = 'My Drawing.png';
	a.click();
}
// event listeners
canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);
canvas.addEventListener('click', onCanvasClick);
canvas.addEventListener('dblclick', onDoubleClick);

brushWidth.addEventListener('change', onBrushWidthChange);
color.addEventListener('change', onColorChange);

colorOptions.forEach((color) => {
	color.addEventListener('click', onColorClick);
});
modeBtn.addEventListener('click', onModeChange);
destroyBtn.addEventListener('click', onDestoryClick);
eraseBtn.addEventListener('click', onEraserClick);
inputFile.addEventListener('change', onFileChange);
saveBtn.addEventListener('click', onSaveClick);
// ctx.arc(400, 200, 60, 0, 2 * Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(380, 190, 8, 0, 2 * Math.PI);
// ctx.arc(420, 190, 8, 0, 2 * Math.PI);
// ctx.moveTo(420, 210);
// ctx.arc(400, 210, 40, 2 * Math.PI, Math.PI);
// ctx.fillStyle = 'white';
// ctx.fill();
