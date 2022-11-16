import {restaurantsData} from './data.js';
const restaurantLists = document.querySelector('.restaurant-lists');

const popularLists = document.querySelector('.popular-lists');
const nearYouLists = document.querySelector('.near-you-lists');

window.addEventListener('DOMContentLoaded', function (e) {
	displayMain();
	handleViewBtns();
});

let popularRestaurants = {};
let nearRestaurants = {};

function displayMain() {
	restaurantsData.forEach(function (data) {
		if (data.isPopular) {
			popularRestaurants = restaurantsData.filter(function (restaurant) {
				if (restaurant.isPopular) {
					return restaurant;
				}
			});

			getRestaurantHtml(popularRestaurants.slice(0, 2), popularLists);
		}
		restaurantsData.forEach(function (data) {
			if (data.isNearYou) {
				nearRestaurants = restaurantsData.filter(function (restaurant) {
					if (restaurant.isNearYou) {
						return restaurant;
					}
				});
				getRestaurantHtml(nearRestaurants.slice(0, 2), nearYouLists);
			}
		});
	});
}

function handleViewBtns() {
	const viewBtns = document.querySelectorAll('.view-btn');
	viewBtns.forEach(function (btn) {
		btn.addEventListener('click', function (e) {
			e.currentTarget.classList.toggle('active');
			if (e.target.dataset.view === 'popular') {
				getRestaurantHtml(popularRestaurants, popularLists);
				nearYouLists.parentElement.style.display = 'none';
			} else if (e.target.dataset.view === 'near') {
				getRestaurantHtml(nearRestaurants, nearYouLists);
				popularLists.parentElement.style.display = 'none';
			}
			if (!btn.classList.contains('active')) {
				displayMain();
				popularLists.parentElement.style.display = 'block';
				nearYouLists.parentElement.style.display = 'block';
			}
		});
	});
}

function getRestaurantHtml(restaurants, list) {
	let restaurantHtml = restaurants
		.map(function (restaurant) {
			return `
        <div class="restaurant">
            <div class="restaurant-image-wrapper">
                <img class="restaurant-image" src="${restaurant.img}" alt="${restaurant.name}">
            </div>
            <div class="restaurant-info-wrapper flex-r">
                <div class="restaurant-info-left">
                    
				
				<h2 class="restaurant-name fs-400">
					<span>
						<i class="fa-solid fa-rectangle-ad"></i>
					</span>
                        ${restaurant.name}
                    </h2>
                    <p>
                        <span class="price fs-300 text-light">$</span> ·
                        <span class="restaurant-category fs-300 text-light">${restaurant.category}</span>
                    </p>
                    <p>
                        <span class="restaurant-stars fs-300">${restaurant.stars}</span>
                        <span class="restaurant-ratings fs-300 text-light">(${restaurant.rating}+)</span>
                    </p>
                </div>
                <div class="restaurant-info-right">
                    <span>
                        <i class="fa-regular fa-heart fs-400 text-light" data-like="${restaurant.id}"></i>
                    </span>
                    <p>
                        <span class="distance fs-300 text-light">${restaurant.distance}mi</span>
                        ·
                        <span class="delivery-time fs-300 text-light">${restaurant.deliveryTime}min</span>
                    </p>
					<p class="fs-300 text-light">$0 delivery fee over $12</p>
                </div>
            </div>
        </div>
        `;
		})
		.join('');
	list.innerHTML = restaurantHtml;
}

const menuCategory = document.querySelector('.menu-category');
menuCategory.addEventListener('click', function (e) {
	const category = e.target.dataset.category;
	const restaurantCategory = restaurantsData.filter(function (restaurant) {
		if (restaurant.category.includes(category)) {
			return restaurant;
		}
	});
	if (category) {
		getRestaurantHtml(restaurantCategory, restaurantLists);
		const categoryTitle = document.createElement('h1');
		categoryTitle.textContent = category;
		const resetBtn = document.createElement('button');
		resetBtn.classList.add('reset-btn');
		resetBtn.textContent = 'reset';
		restaurantLists.prepend(category, resetBtn);
		resetBtn.addEventListener('click', function () {
			document.createElement('div').classList.add('popular-list');
		});
	}
});
