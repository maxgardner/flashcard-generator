let BasicCard = function(front, back) {
	// If the object passed into this function by calling BasicCard does not use the new keyword
	// it will not be created from the constructor function, so the BasicCard.prototype property
	// will not exist in that object. If that's the case, we can recognize that by doing this check
	// It will come back false if this, the object, does not have an instance of the BasicCard.prototype
	// in its method list. If that's the case, it will re-run the function using the new keyword to
	// create an object from this constructor specifically (sorry for the notes, needed to type this out
	// to better understand it)
	if (!(this instanceof BasicCard)) { 
		return new BasicCard(front, back);
	} 
	this.front = front;
	this.back = back;
};

BasicCard.prototype.askQuestion = function() {
	console.log(this.front);
};

BasicCard.prototype.checkAnswer = function(userAnswer) {
	if (userAnswer === this.back) {
		console.log("That's correct!");
	} else {
		console.log("Sorry, try again.");
	}
};

BasicCard.prototype.showAnswer = function() {
	console.log(this.back);
};

module.exports = BasicCard;