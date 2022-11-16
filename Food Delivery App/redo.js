import {restaurantsData} from './data.js';

// window.addEventListener('DOMContentLoaded', function () {
// 	popularRestaurants();
// });

function getRestaurantHtml() {
	let restaurantHtml = '';
	restaurantsData.forEach(function (restaurant) {
		restaurantHtml += `
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
                        <i class="fa-regular fa-heart fs-400 text-light" ßdata-like=${restaurant.isLiked}></i>
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
	});
	return restaurantHtml;
}
const popularRestaurantsObj = restaurantsData.filter(function (restaurant) {
	if (restaurant.isPopular) {
		return restaurant;
	}
});
console.log(popularRestaurantsObj);
document.querySelector('.popular-lists').innerHTML = getRestaurantHtml(
	popularRestaurantsObj
);
// document.querySelector('.popular-lists').innerHTML = getRestaurantHtml();
// console.log(restaurantHtml);
// function render() {
// 	document.querySelector('.popular-lists').innerHTML = getRestaurantHtml();
// 	// document.querySelector('.near-you-lists').innerHTML = getRestaurantHtml();
// }

// render();
