const navOpen = document.querySelector('.nav-open');
const closeBtn = document.querySelector('.nav-close');
const navToggle = document.querySelectorAll('.nav-toggle');
const navLinks = document.querySelectorAll('.links li');

navToggle.forEach((element) => {
	navOpen.addEventListener('click', () => {
		element.classList.toggle('show-sidebar');
	});
	closeBtn.addEventListener('click', () => {
		element.classList.remove('show-sidebar');
	});
});
const mouseCursor = document.querySelector('.mouse-cursor');
window.addEventListener('mousemove', cursor);
function cursor(e) {
	mouseCursor.style.top = e.pageY + 'px';
	mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach((link) => {
	link.addEventListener('mouseover', () => {
		mouseCursor.classList.add('link-grow');
		link.classList.add('hovered-link');
	});
	link.addEventListener('mouseleave', () => {
		mouseCursor.classList.remove('link-grow');
		link.classList.remove('hovered-link');
	});
});
// const cursorChild = cursorParent.children[0];

// window.addEventListener('mousedown', mousedown);
// window.addEventListener('mouseup', mouseup);

// function mousedown(e) {}
// function mouseup(e) {}
const text = document.querySelector('.text p');
text.innerHTML = text.innerHTML
	.split('')
	.map(
		(char, i) => `<span style="transform:rotate(${i * 10.5}deg)">${char}</span>`
	)
	.join('');

const logo = document.querySelector('.logo');
// function handleLogo() {
// 	logo.addEventListener('mouseover', () => {
// 		logo.innerHTML = logo.innerHTML
// 			.split('')
// 			.map(function (letter) {
// 				return `<span class="logo-hover">${letter}</span>`;
// 			})
// 			.join('');
// 	});
// 	logo.addEventListener('mouseleave', () => {
// 		logo.innerHTML = logo.innerHTML
// 			.split('')
// 			.map(function (letter) {
// 				return `<span>${letter}</span>`;
// 			})
// 			.join('');
// 	});
// }
// handleLogo();
