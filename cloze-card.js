let ClozeCard = function(text, cloze) {
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

ClozeCard.prototype.wrong = function() {
	console.log("Sorry, that's wrong. Try again.");
};

module.exports = ClozeCard;