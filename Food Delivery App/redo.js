import {restaurantsData} from './data.js';

const popularListContainer = document.querySelector('.popular-list');
const nearListContainer = document.querySelector('.near-list');
const categoryListContainer = document.querySelector('.category-list');
const restaurantList = document.querySelector('.restaurant-list');

let popularLists = restaurantsData.filter(function (restaurant) {
	if (restaurant.isPopular) {
		return restaurant;
	}
});
let nearLists = restaurantsData.filter(function (restaurant) {
	if (restaurant.isNearYou) {
		return restaurant;
	}
});

window.addEventListener('DOMContentLoaded', function () {
	displayRestaurantHtml(popularLists.slice(0, 2), popularListContainer);
	displayRestaurantHtml(nearLists.slice(0, 2), nearListContainer);
	categoryListContainer.parentElement.style.display = 'none';
});

document.addEventListener('click', function (e) {
	const category = e.target.dataset.category;
	const viewBtn = e.target.dataset.view;
	const id = Number(e.target.dataset.id);
	const restaurantCategory = restaurantsData.filter(function (restaurant) {
		if (restaurant.category.includes(category)) {
			return restaurant;
		}
	});
	if (category) {
		displayRestaurantHtml(restaurantCategory, categoryListContainer);
		this.querySelector('.category h1').textContent = category;
		popularListContainer.parentElement.style.display = 'none';
		nearListContainer.parentElement.style.display = 'none';
		categoryListContainer.parentElement.style.display = 'block';
	}
	// RESET BUTTON
	if (e.target.classList.contains('reset-btn')) {
		popularListContainer.parentElement.style.display = 'block';
		nearListContainer.parentElement.style.display = 'block';
		categoryListContainer.parentElement.style.display = 'none';
	}

	if (viewBtn === 'popular') {
		displayRestaurantHtml(popularLists, restaurantList);
		restaurantList.previousElementSibling.innerHTML = `Most Popular Local<br>Restaurants`;
	} else if (viewBtn === 'near') {
		displayRestaurantHtml(nearLists, restaurantList);
		restaurantList.previousElementSibling.innerHTML = `Local Restaurants<br>Near You`;
		console.log(viewBtn);
	}

	// LIKE BUTTON
	restaurantsData.forEach(function (data) {
		if (id === data.id) {
			e.target.classList.remove('fa-regular');
			e.target.classList.add('fa-solid', 'liked');
		}
	});
});
// displayRestaurantList();
function displayRestaurantHtml(data, list) {
	let restaurantHtml = data
		.map(function (restaurant) {
			return `
        <div class="restaurant">
            <div class="restaurant-image-wrapper">
                <img class="restaurant-image" src="${restaurant.img}" alt="${restaurant.name}">
            </div>
            <div class="restaurant-info-wrapper">
                <div class="restaurant-info-top flex-r">
				    <h2 class="restaurant-name fs-500">
					    <span>
						<i class="fa-solid fa-rectangle-ad"></i>
					    </span>
                        ${restaurant.name}
                    </h2>
                    <span>
                        <i class="like-btn fa-regular fa-heart fs-400 text-light" data-id=${restaurant.id}></i>
                    </span>
                   
                </div>
                <div class="restaurant-info-middle flex-r">
                    <p>
                        <span class="price fs-200 text-light">$</span> ·
                        <span class="restaurant-category fs-200 text-light">${restaurant.category}</span>
                    </p>
                    <p>
                        <span class="distance fs-200 text-light">${restaurant.distance}mi</span>
                        ·
                        <span class="delivery-time fs-200 text-light">${restaurant.deliveryTime}min</span>
                    </p>
                </div>
                <div class="restaurant-info-bottom flex-r">
                    <p>
                        <span class="restaurant-stars fs-300">${restaurant.stars}</span>
                        <span class="restaurant-ratings fs-200 text-light">(${restaurant.rating}+)</span>
                    </p>
					<p class="fs-200 text-light">$0 delivery fee over $12</p>
                </div>
            </div>
        </div>
        `;
		})
		.join('');
	list.innerHTML = restaurantHtml;
}

// document.querySelector('.popular-lists').innerHTML = getRestaurantHtml();
// console.log(restaurantHtml);
// function render() {
// 	document.querySelector('.popular-lists').innerHTML = getRestaurantHtml();
// 	// document.querySelector('.near-you-lists').innerHTML = getRestaurantHtml();
// }

// render();
