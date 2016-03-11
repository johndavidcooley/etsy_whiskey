// Javascript Entry Point
import etsyData from './items.js';

import $ from 'jquery';

var items = etsyData.results;


function whiskeyProducts(whiskey) {
	var whiskeyImage = items.Images[3];

	return `
	<div class="pulled">
		<div class="whiskey-image">
			<a href="items.url">
				<img src="${whiskeyImage}" alt="${items.description}">
			</a>
		</div>
		<div class="hover-images">
			<a href="#">
				<img src="/images/heart.png" alt="">
			</a>
			<a href="#">
				<img src="/images/hamburger.png" alt="">
			</a>
		</div>
		<div class="whiskey-title">
			<a href="items.url">${items.title}</a>
		</div>
		<div class="whiskey-distiller">
			<a href="items.url">${items.shop_name}</a>
		</div>
		<div class="whiskey-price">${items.price}</div>
		<div class="whiskey-usd">${items.currency_code}</div>
	</div>
	`
};



items.forEach(function() {
	$('pulled').append(whiskeyProducts());
});



