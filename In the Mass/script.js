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
console.log(mouseCursor);
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
