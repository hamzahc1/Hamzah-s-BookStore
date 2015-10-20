

//This is a dataset of books and their authors! 
function __makeABookStore(){
	var __books = "Lucky Jim by Kingsley Amis, Money by Martin Amis, The Information by Martin Amis, The Bottle Factory Outing by Beryl Bainbridge, According to Queeney by Beryl Bainbridge, Flaubert's Parrot by Julian Barnes, A History of the World in 10 1/2 Chapters by Julian Barnes, Augustus Carp Esq. by Himself: Being the Autobiography of a Really Good Man by Henry Howarth Bashford, Molloy by Samuel Beckett, Zuleika Dobson by Max Beerbohm, The Adventures of Augie March by Saul Bellow, The Uncommon Reader by Alan Bennett, Queen Lucia by EF Benson, The Ascent of Rum Doodle by WE Bowman, A Good Man in Africa by William Boyd, The History Man by Malcolm Bradbury, No Bed for Bacon by Caryl Brahms and SJ Simon, Illywhacker by Peter Carey, A Season in Sinji by JL Carr, The Harpole Report by JL Carr, The Hearing Trumpet by Leonora Carrington, Mister Johnson by Joyce Cary, The Horse's Mouth by Joyce Cary, Don Quixote by Miguel de Cervantes, The Case of the Gilded Fly by Edmund Crispin, Just William by Richmal Crompton, The Provincial Lady by EM Delafield, Slouching Towards Kalamazoo by Peter De Vries, The Pickwick Papers by Charles Dickens, Martin Chuzzlewit by Charles Dickens, Jacques the Fatalist and his Master by Denis Diderot, A Fairy Tale of New York by JP Donleavy, The Commitments by Roddy Doyle, Ennui by Maria Edgeworth, Cheese by Willem Elsschot, Bridget Jones's Diary by Helen Fielding, Joseph Andrews by Henry Fielding, Tom Jones by Henry Fielding, Caprice by Ronald Firbank, Bouvard et Pécuchet by Gustave Flaubert, Towards the End of the Morning by Michael Frayn, The Polygots by William Gerhardie, Cold Comfort Farm by Stella Gibbons, Dead Souls by Nikolai Gogol, Oblomov by Ivan Goncharov, The Wind in the Willows by Kenneth Grahame, Brewster's Millions by Richard Greaves (George Barr McCutcheon), Squire Haggard's Journal by Michael Green, Our Man in Havana by Graham Greene, Travels with My Aunt by Graham Greene, Diary of a Nobody by George Grossmith, The Little World of Don Camillo by Giovanni Guareschi, The Curious Incident of the Dog in the Night-time by Mark Haddon, Catch-22 by Joseph Heller, Mr Blandings Builds His Dream House by Eric Hodgkins, High Fidelity by Nick Hornby, I Served the King of England by Bohumil Hrabal, The Lecturer's Tale by James Hynes, Mr Norris Changes Trains by Christopher Isherwood, The Mighty Walzer Howard by Jacobson, Pictures from an Institution by Randall Jarrell, Three Men in a Boat by Jerome K Jerome, Finnegans Wake by James Joyce, The Castle by Franz Kafka, Lake Wobegon Days by Garrison Keillor, Death and the Penguin by Andrey Kurkov, The Debt to Pleasure by John Lanchester, L'Histoire de Gil Blas de Santillane (Gil Blas) by Alain-René Lesage, Changing Places by David Lodge, Nice Work by David Lodge, The Towers of Trebizond by Rose Macaulay, England Their England by AG Macdonell, Whisky Galore by Compton Mackenzie, Memoirs of a Gnostic Dwarf by David Madsen, Cakes and Ale - Or the Skeleton in the Cupboard by W Somerset Maugham, Tales of the City by Armistead Maupin, Bright Lights Big City by Jay McInerney, Puckoon by Spike Milligan, The Restraint of Beasts by Magnus Mills, Charade by John Mortimer, Titmuss Regained by John Mortimer, Under the Net by Iris Murdoch, Pnin by Vladimir Nabokov, Pale Fire by Vladimir Nabokov, Fireflies by Shiva Naipaul, The Sacred Book of the Werewolf by Victor Pelevin, La Disparition by Georges Perec, Les Revenentes by Georges Perec, La Vie Mode d'Emploi by Georges Perec, My Search for Warren Harding by Robert Plunkett, A Dance to the Music of Time by Anthony Powell, A Time to be Born by Dawn Powell, Excellent Women by Barbara Pym, Less Than Angels by Barbara Pym, Zazie in the Metro by Raymond Queneau, Solomon Gursky Was Here by Mordecai Richler, Alms for Oblivion by Simon Raven, Portnoy's Complaint by Philip Roth, The Westminster Alice by Saki, The Unbearable Bassington by Saki , Hurrah for St Trinian's by Ronald Searle, Great Apes by Will Self, Porterhouse Blue by Tom Sharpe, Blott on the Landscape by Tom Sharpe, Office Politics by Wilfrid Sheed, Belles Lettres Papers: A Novel by Charles Simmons, Moo by Jane Smiley, Topper Takes a Trip by Thorne Smith, The Adventures of Ferdinand Count Fathom by Tobias Smollett, The Adventures of Roderick Random by Tobias Smollett, The Adventures of Peregrine Pickle by Tobias Smollett, The Expedition of Humphry Clinker by Tobias Smollett, The Prime of Miss Jean Brodie by Muriel Spark, The Girls of Slender Means by Muriel Spark, The Driver's Seat by Muriel Spark, Loitering with Intent by Muriel Spark, A Far Cry from Kensington by Muriel Spark, The Life and Opinions by Tristram Shandy, Gentleman by Laurence Sterne, White Man Falling by Mike Stocks, Handley Cross by RS Surtees, A Tale of a Tub by Jonathan Swift, Penrod by Booth Tarkington, The Luck of Barry Lyndon by William Makepeace Thackeray, Before Lunch by Angela Thirkell, Tropic of Ruislip by Leslie Thomas, A Confederacy of Dunces by John Kennedy Toole, Barchester Towers by Anthony Trollope, Venus on the Half-Shell by Kilgore Trout, The Mysterious Stranger by Mark Twain, The Witches of Eastwick by John Updike, Breakfast of Champions by Kurt Vonnegut, Infinite Jest by David Foster Wallace, Decline and Fall by Evelyn Waugh, Vile Bodies by Evelyn Waugh, Black Mischief by Evelyn Waugh, Scoop by Evelyn Waugh, The Loved One by Evelyn Waugh, A Handful of Dust by Evelyn Waugh , The Life and Loves of a She-Devil by Fay Weldon, Tono Bungay by HG Wells, Molesworth by Geoffrey Willans and Ronald Searle, The Wimbledon Poisoner by Nigel Williams, Anglo-Saxon Attitudes by Angus Wilson, Something Fresh by PG Wodehouse, Piccadilly Jim by PG Wodehouse, Thank You Jeeves by PG Wodehouse, Heavy Weather by PG Wodehouse, The Code of the Woosters by PG Wodehouse, Joy in the Morning by PG Wodehouse";
	var __bookStore = [];
	//this splits the books by title and author
	var __booksArray = __books.split(',');
	var __categories = ['classic', 'horror', 'romantic comedy', 'self help', 'historical']

	function __createBook(bookName){
		//Randomly assigns a price to the book. 
		var price = Math.random() * 20;
		price = parseFloat(price.toString().slice(0, 4), 10);
		//Randomly assigns a book a category from one of the 5 genres
		var category = (__categories[Math.floor(Math.random() * 5)])
	
		return {
			title: bookName.split('by')[0].trim(),
			author: bookName.split('by')[1].trim(),
			price: price,
			category: category
		}
	}

	function __createBookStore(arr) {
		for (var i = 0; i < arr.length; i++) {
			__bookStore.push(__createBook(arr[i]));
		}

		return __bookStore
	}

	return __createBookStore(__booksArray);

} 
//This will assign the user a random balance as their starting balance when they start shopping
function testUser(){
	var balance = Math.random() * 100 + 130;
		balance = parseFloat(balance.toString().slice(0, 4), 10);
	return {
		balance: balance,
		cart: [],
	}
}

//The lines above are simply setting up the bookstore!
var BookStore = __makeABookStore();
var Hamzah = testUser();


var instructions = function(){
		alert("Welcome to the bookstore! Here are the instructions on how to use it: \nUse checkStore to search for books by title or author \n\nUse deleteBook to remove items from your cart by title \n\nUse clearCart to delete all items out of your cart \n\nUse checkOut to checkOut and pay for your books! \n\nUse the inspector function to see what is currently in your cart!");
		console.log("Welcome to the bookstore! Here are the instructions on how to use it: \nUse checkStore to search for books by title or author \n\nUse deleteBook to remove items from your cart by title \n\nUse clearCart to delete all items out of your cart \n\nUse checkOut to checkOut and pay for your books! \n\nUse the inspector function to see what is currently in your cart!");
	};
instructions();

//This line simply prints out the starting state of the user, with their balance and an empty array representing their current cart. 
console.log(Hamzah);

//Checkstore allows the user to search for books by title or author. If the book is found the user is prompted if they want to add it to their cart, in which case the book is added. If the book is not found, it returns an error message and asks if they want to search again. 
var checkStore = function(title){
	var found = false;
	myEach(BookStore, function(books, index, array){
		if(title === books.title || title === books.author){
			if(confirm("Do you want to add " + books.title + " by " + books.author + " which costs $" + books.price + " to your cart?")){
				Hamzah.cart.push(books);
				found = true;
			} else {
				alert("Cool, I didn't add " + books.title + " to your cart!")
				found = true;
			}
			}
	})

	if(found === false) {if(confirm("I couldn't seem to find anything when I searched for " + title + ". Do you want to search for a new book?")){
		var ans = prompt("Type in the name of your next search!")
		return checkStore(ans);
	}
}
	return inspector();
}

//Deletebook allows you to delete a book by searching for it in the cart. To inspect the cart to see what is inside, you can use the inspector function! (See helper functions document).

var deleteBook = function(title){
	var found = false
	myEach(Hamzah.cart, function(books, index, array){
		if(title === books.title){
			if(confirm("Are you sure you want to remove " + books.title + " from your cart?")){
				Hamzah.cart.splice(index, 1);
				found = true;
				return Hamzah.cart;
			}  else {
				alert("Cool, I've kept " + books.title + " in your cart!")
				found = true;
			}
		}
	})
//If the book is not found, then ask user if they want to search again, and if they confirm then run recursive call.
	if(found === false) {if(confirm("It doesn't look like " + title + " is in your cart... do you want to search for a new book?")){
		var ans = prompt("Type in the name of your book again!")
		return deleteBook(ans);
	}
}
	return inspector();
}


//Deletes all books from the cart and then checks to make sure it is empty
var clearCart = function(){
	if(confirm("Are you 100% SURE you want to empty your cart?!")){
		Hamzah.cart.splice(0);

		return inspector()
	} else { alert("Cool, you still have everything in your cart!")
	return inspector();
	}
}

//Checking out reduces the user's balance by the total amount in the cart and then removes the books and alerts the user to their purchases. Purchased books get moved into the purchaseHistory array. 

var checkOut = function(){
	var total = myReduce(Hamzah.cart, function(totalPrice, current){
				return totalPrice += current.price;
	}, 0);	
	if(Hamzah.balance >= total) {
		Hamzah.balance -= total;
		alert("You've successfully purchased " + showCart(Hamzah.cart) + "\n\nAnd your new balance is $" + Hamzah.balance.toFixed(2) )
		purchaseHistory = Hamzah.cart.slice(0);
		Hamzah.cart.splice(0);
		return inspector();
	} else {
		alert("Sorry, you don't have enough money, maybe try getting rid of some books? (OR BUY A KINDLE?)")
	}
}
//Purchase history is an array of objects that have previously been paid for by the user.
var purchaseHistory = []

