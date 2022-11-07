const slides = document.querySelectorAll('.slide');
const dotIndicators = document.querySelectorAll('.dot-indicators');
// const slideSection = document.querySelectorAll('section');
// const signUpBtn = document.querySelector('.signUp-btn');
slides.forEach(function (slide, index) {
	slide.style.left = `${index * 100}%`;
});

let counter = 0;

document.addEventListener('click', function (e) {
	if (e.target.classList.contains('next-btn')) {
		handleNextBtn();
		console.log(e.target);
	} else if (e.target.classList.contains('back-btn')) {
		handleBackBtn();
		console.log(e.target.classList.contains('back-btn'));
	} else if (e.target.classList.contains('skip-btn')) {
		handleSkipBtn();
	} else if (e.target.classList.contains('sign-btn')) {
		handleNextBtn();
		const id = e.target.dataset.id;
		if (id === 'signUp') {
			document.querySelector('.login-slide').style.display = 'none';
			document.querySelector('.signUp-slide').style.display = 'block';
		} else if (id === 'login') {
			document.querySelector('.signUp-slide').style.display = 'none';
			document.querySelector('.login-slide').style.display = 'block';
		}
	}
});
// console.log(signBtns);
// signUpBtn.addEventListener('click', function () {
// 	counter++;
// 	handleCarousel();
// 	document.querySelector('.logIn-slide').style.display = 'none';
// 	// console.log(document.querySelector('.logIn-slide'));
// });

function handleCarousel() {
	slides.forEach(function (slide) {
		slide.style.transform = `translateX(-${counter * 100}%)`;
	});
}
function handleNextBtn() {
	counter++;
	handleCarousel();
}

function handleBackBtn() {
	counter--;
	handleCarousel();
}

function handleSkipBtn() {
	counter = 2;
	handleCarousel();
}
