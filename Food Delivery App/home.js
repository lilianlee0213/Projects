import {restaurantsData} from './data.js';
const restaurantLists = document.querySelector('.restaurant-lists');
const mainContents = document.querySelectorAll('.main');
const popularLists = document.querySelector('.popular-lists');
const nearYouLists = document.querySelector('.near-you-lists');
// const viewBtn = document.querySelector('.view-btn');

// const categoryBtns = document.querySelectorAll('.category');
// categoryBtns.forEach(function (btn) {
// 	btn.addEventListener('click', function (e) {

// 	});
// });
window.addEventListener('DOMContentLoaded', function () {
	// displayPopular();
	// displayNearYou();
	displayMain();
});

function displayMain() {
	restaurantsData.forEach(function (data) {
		if (data.isPopular) {
			let popularRestaurants = restaurantsData.filter(function (restaurant) {
				if (restaurant.isPopular) {
					return restaurant;
				}
			});

			handleViewBtns();
			getRestaurantHtml(popularRestaurants.slice(0, 2), popularLists);
		} else if (data.isNearYou) {
			let nearRestaurants = restaurantsData.filter(function (restaurant) {
				if (restaurant.isNearYou) {
					return restaurant;
				}
			});
			handleViewBtns();
			getRestaurantHtml(nearRestaurants.slice(0, 2), nearYouLists);
		}
	});
}

function handleViewBtns() {
	mainContents.forEach(function (content) {
		const viewBtn = content.querySelector('.view-btn');
		viewBtn.addEventListener('click', function (e) {
			e.currentTarget.classList.toggle('active');
			mainContents.forEach(function (element) {
				if (element !== content) {
					element.style.display = 'none';
				}
				if (!e.currentTarget.classList.contains('active')) {
					element.style.display = 'block';
				}
			});
		});
	});
}

// function displayNearYou() {
// 	let nearYouRestaurants = restaurantsData.filter(function (restaurant) {
// 		if (restaurant.isNearYou) {
// 			return restaurant;
// 		}
// 	});
// 	getRestaurantHtml(nearYouRestaurants.slice(0, 2));
// 	handleViewBtns();
// 	// viewBtn.addEventListener('click', function () {
// 	// 	viewBtn.classList.toggle('active');
// 	// 	if (viewBtn.classList.contains('active')) {
// 	// 		getRestaurantHtml(nearYouRestaurants);
// 	// 		mostPopular.style.display = 'none';
// 	// 	} else {
// 	// 		getRestaurantHtml(nearYouRestaurants.slice(0, 2));
// 	// 		mostPopular.style.display = 'block';
// 	// 	}
// 	// });
// }

window.addEventListener('click', function (e) {
	const category = e.target.dataset.category;
	const restaurantCategory = restaurantsData.filter(function (restaurant) {
		if (restaurant.category.includes(category)) {
			return restaurant;
		}
	});

	getRestaurantHtml(restaurantCategory, restaurantLists);
});

function getRestaurantHtml(restaurants, list) {
	let restaurantHtml = restaurants
		.map(function (restaurant) {
			return `
        <div class="restaurant">
            <div class="restaurant-image-wrapper">
                <img class="restuarant-image" src="${restaurant.img}" alt="${restaurant.name}">
            </div>
            <div class="restaurant-info-wrapper flex-r">
                <div class="restaurant-info-left">
                    <h2 class="restaurant-name">
                        <span>
                            <i class="fa-solid fa-rectangle-ad"></i>
                        </span>
                        ${restaurant.name}
                    </h2>
                    <p>
                        <span class="price">$</span>
                        <span class="restaurant-category">${restaurant.category}</span>
                    </p>
                    <p>
                        <span class="restaurant-stars">${restaurant.stars}</span>
                        <span class="restaurant-ratings">${restaurant.rating}</span>
                    </p>
                </div>
                <div class="restaurant-info-right">
                    <span>
                        <i class="fa-regular fa-heart"></i>
                    </span>
                    <p>
                        <span class="distance">${restaurant.distance}</span>
                        ·
                        <span class="delivery-time">${restaurant.deliveryTime}</span>
                    </p>
                </div>
            </div>
        </div>
        `;
		})
		.join('');
	list.innerHTML = restaurantHtml;
}
