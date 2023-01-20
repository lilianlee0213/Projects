const navOpen = document.querySelector('.nav-open');
const closeBtn = document.querySelector('.nav-close');
const navToggle = document.querySelectorAll('.nav-toggle');
const navLinks = document.querySelectorAll('.links li');
const navBar = document.querySelector('nav');
const scrollLinks = document.querySelectorAll('.scroll-link');
const logo = document.querySelector('.logo');

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
window.addEventListener('scroll', function () {
	const scrollHeight = window.pageYOffset;
	const navBarHeight = navBar.getBoundingClientRect().height;
	if (scrollHeight > navBarHeight) {
		navBar.classList.add('fixed');
		logo.classList.add('shrink');
	} else {
		navBar.classList.remove('fixed');
		logo.classList.remove('shrink');
	}
	const shop = document.getElementById('shop');
	let shopHeight = shop.getBoundingClientRect().height;

	let opacity = (scrollHeight / 100) * 0.2;
	if (scrollHeight >= shopHeight) {
		shop.style.opacity = 1;
	} else if (scrollHeight > 130) {
		shop.style.opacity = `${opacity}`;
	}
});

scrollLinks.forEach(function (link) {
	link.addEventListener('click', function (e) {
		e.preventDefault();
		const id = e.currentTarget.getAttribute('href').slice(1);
		const element = document.getElementById(id);
		let position = element.offsetTop;
		// calcuate height
		const navHeight = navBar.getBoundingClientRect().height;
		const fixedNav = navBar.classList.contains('fixed');
		position = element.offsetTop - navHeight;
		if (!fixedNav) {
			position = position - navHeight;
		}
		window.scrollTo({
			top: position,
			left: 0,
			behavior: 'smooth',
		});
	});
});

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

const text = document.querySelector('.text p');
text.innerHTML = text.innerHTML
	.split('')
	.map(
		(char, i) => `<span style="transform:rotate(${i * 10.5}deg)">${char}</span>`
	)
	.join('');

// slides
const slides = document.querySelectorAll('.slides img');
let counter = 0;
const dotIndicators = document.querySelectorAll('.dot');

slides.forEach(function (slide, index) {
	slide.style.left = `${index * 100}% `;
});

dotIndicators.forEach(function (dot, i) {
	dot.classList.remove('active');
	dot.addEventListener('click', function (e) {
		counter = i;
		carousel();
		const targetDot = e.target;
		const targetParent = e.target.parentNode;
		targetParent
			.querySelector("[aria-selected ='true']")
			.setAttribute('aria-selected', false);
		targetDot.setAttribute('aria-selected', true);
	});
});
function carousel() {
	slides.forEach(function (slide, index) {
		slide.style.transform = `translateX(-${counter * 100}%)`;
	});
}
setInterval(function () {
	counter++;
	if (counter > slides.length - 1) {
		counter = 0;
	}
	dotIndicators.forEach(function (dot, index) {
		if (index === counter) {
			dot.setAttribute('aria-selected', true);
		} else {
			dot.setAttribute('aria-selected', false);
		}
	});

	carousel();
}, 4000);
