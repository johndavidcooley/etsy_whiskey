// Javascript Entry Point
import etsyData from './items.js';

import $ from 'jquery';

var items = etsyData.results;


function completeProduct() {
	var productImage = items.Images[3];

	return `${productImage}
	$`;

};



items.forEach(fucntion() {
	return completeProduct.append
});
