const navOpen = document.querySelector('.nav-open');
const closeBtn = document.querySelector('.nav-close');
const navToggle = document.querySelectorAll('.nav-toggle');

navToggle.forEach((element) => {
	navOpen.addEventListener('click', () => {
		element.classList.toggle('show-sidebar');
	});
	closeBtn.addEventListener('click', () => {
		element.classList.remove('show-sidebar');
	});
});
