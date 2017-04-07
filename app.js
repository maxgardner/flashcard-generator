let inquirer = require("inquirer");
let BasicCard = require("./basic-card.js");
let ClozeCard = require("./cloze-card.js");

inquirer.prompt([
{
	type: "list",
	name: "type",
	message: "What kind of flashcard would you like to create?",
	choices: ["Basic Card", "Cloze Card"]
}]).then((card) => {
	if (card.type === "Basic Card") {
		inquirer.prompt([
		{
			type: "input",
			name: "question",
			message: "What's on the front?"
		},
		{
			type: "input",
			name: "answer",
			message: "What's on the back?"
		}]).then((card) => {
			let newCard = new BasicCard(card.question, card.answer);
			console.log(newCard);
		});
	} else {
		inquirer.prompt([
		{
			type: "input",
			name: "cloze",
			message: "What is the cloze deletion (the part you want to remember)?"
		},
		{
			type: "input",
			name: "text",
			message: "What's the rest of the phrase (without the cloze deletion)?"
		}]).then((card) => {
			let newCard = new ClozeCard(card.text, card.cloze);
			console.log(newCard);
		});
	}
});