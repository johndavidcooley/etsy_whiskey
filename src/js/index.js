// Javascript Entry Point
import etsyData from './items';

import $ from 'jquery';

var items = etsyData.results;

function makeWhiskeyProduct(whiskey) {

	var whiskeyImage = whiskey.Images[0].url_570xN;
	var whiskeyTitle = whiskey.title;
	var whiskeyDescription = whiskey.description;
	var whiskeyStore = whiskey.Shop.url;
	var whiskeyPrice = whiskey.price;
	var whiskeyUSD = whiskey.currency_code;
	var whiskeyPage = whiskey.url;

		return `
	<div class="pulled">
		<div class="whiskey-image">
			<a href="whiskeyPage">
				<img src="${whiskeyImage}" alt="${whiskeyDescription}" width="225px" height="179px">
			</a>
		</div>
		<div class="hover-images">
			<a href="#">
				<img src="/images/heart.png" alt="Save to favorites">
			</a>
			<a href="#">
				<img src="/images/hamburger.png" alt="Save to favorites">
			</a>
		</div>
		<div class="whiskey-title">
			<a href="items.url">${whiskeyTitle}</a>
		</div>
		<div class="whiskey-distiller">
			<a href="items.url">${whiskeyPage}</a>
		</div>
		<div class="whiskey-price">${whiskeyPrice}</div>
		<div class="whiskey-usd">${whiskeyUSD}</div>
	</div>
	`
};

items.forEach(function(whiskey) {
	$('.pulled-from-js').append(makeWhiskeyProduct(whiskey));
});






//Change line 38 to link to store.
