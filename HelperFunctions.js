
//My own version of Underscores forEach method.
var myEach = function (list, f) {
	if(Array.isArray(list)){
	for(var i = 0; i < list.length; i++) {
		f(list[i], i, list);
	}
}
	else { for (var key in list) {
		f(list[key], key, list);
	}
}
};

//My own filter function! 
var myFilter = function(list, predicate) {
	var passedPredicate = [];
	myEach(list, function (val, index, list){
		if(predicate (val, index, list)) {
			passedPredicate.push(val);
		}
	})
	return passedPredicate;
}

//My own map function, have not used this one yet! 
var myMap = function(list, transform) {
	var transformed = [];
	myEach(list, function(val) {
		transformed.push(transform(val));
	})
	return transformed;
}

//My own version of underscore's reduce method.
var myReduce = function(list, combine, start) {
	if(start) {
		var output = start;
	} else {
		var output = 0;
	}

	myEach(list, function(val) {
		output = combine(output, val);
	})
	return output;
}


// showCart compiles all the items in the user's cart and presents them in an output format to be used when checking out or as a function in the console to check what is currently inside the cart.
var showCart = function(anyArray){
	var total = 0;
	return myMap(anyArray, function(books, index, list){
		total+= books.price;
		return "\n" + books.title + " by " + books.author + "  Price: $" + books.price.toFixed(2);
})
	+ ("\nYour total is $" + total.toFixed(2));
}

//The inspector function checks to see if the cart is empty, if it is returns a statement letting the user know. If not, it tells the user what is currently in their cart using the showCart function.
var inspector = function() {
	if (Hamzah.cart.length === 0){
		alert("Your cart is now empty!")
	} else {
		alert("You have " + Hamzah.cart.length + " book(s) in your cart!\n" + showCart(Hamzah.cart))
	}
}



/// Improvements

	// Make it for any user! 
		// Apply .this to everything to make it functional! 