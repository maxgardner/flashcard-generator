let BasicCard = function(front, back) {
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