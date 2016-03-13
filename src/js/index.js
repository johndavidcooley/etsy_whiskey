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
	var whiskeyStoreName = whiskey.Shop.shop_name;

		return `
	<div class="pulled">
		<div class="whiskey-image">
			<a href="whiskeyPage">
				<img src="${whiskeyImage}" alt="${whiskeyDescription}" width="225" height="179">
			</a>
		</div>
		<div class="hover-images">
			<a href="#">
				<img src="/images/heart.png" alt="Save to favorites" height="25">
			</a>
			<a href="#">
				<img src="/images/hamburger.png" alt="Save to favorites"height="25">
			</a>
		</div>
		<div class="below-whiskey-image">
			<div class="whiskey-title">
				<a href="items.url">${whiskeyTitle}</a>
			</div>
			<div class="whiskey-distiller">
				<a href="${whiskeyPage}">${whiskeyStoreName}</a>
			</div>
			<div class="price-usd">
				<div class="whiskey-price">${whiskeyPrice}</div>
				<div class="whiskey-usd">${whiskeyUSD}</div>
			</div>
		</div>
	</div>
	`
};

items.forEach(function(whiskey) {
	$('.pulled-from-js').append(makeWhiskeyProduct(whiskey));
});

// <div class="pulled">
// 		<div class="whiskey-image">
// 			<a href="whiskeyPage">
// 				<img src="${whiskeyImage}" alt="${whiskeyDescription}" width="225" height="179">
// 			</a>
// 		</div>
// 		<div class="hover-images">
// 			<a href="#">
// 				<img src="/images/heart.png" alt="Save to favorites" height="25">
// 			</a>
// 			<a href="#">
// 				<img src="/images/hamburger.png" alt="Save to favorites"height="25">
// 			</a>
// 		</div>
// 		<div class="below-whiskey-image">
// 			<div class="whiskey-title">
// 				<a href="items.url">${whiskeyTitle}</a>
// 			</div>
// 			<div class="whiskey-distiller">
// 				<a href="${whiskeyPage}">${whiskeyStoreName}</a>
// 			</div>
// 			<div class="price-usd">
// 				<div class="whiskey-price">${whiskeyPrice}</div>
// 				<div class="whiskey-usd">${whiskeyUSD}</div>
// 			</div>
// 		</div>
// 	</div>






//Change line 38 to link to store.
