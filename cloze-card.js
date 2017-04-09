let ClozeCard = function(text, cloze) {
	if (!(this instanceof ClozeCard)) { 
		return new ClozeCard(front, back);
	} 
	this.text = text;
	this.cloze = cloze;
}

ClozeCard.prototype.showAnswer = function() {
	console.log(this.cloze);
};

ClozeCard.prototype.showFull = function() {
	console.log(this.cloze + " " + this.text);
};

ClozeCard.prototype.showHint = function() {
	console.log("..." + this.text);
};

ClozeCard.prototype.checkAnswer = function(guess) {
	if (guess === this.cloze) {
		console.log("Ayyy, turn up, you got it right!")
	} else {
		console.log("Nope. Try again.");
	}
};

module.exports = ClozeCard;