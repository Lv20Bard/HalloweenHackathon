

// Here we will define a bunch of the trivia, they are objects that contain a title, a body, 4 answers, and a correct answer
// All the questions then go into a array. Every time we need a new question, we grab it from the array and then delete it from the array,
// This stops you from getting the same question multiple times. 

//The question is chosen by a RNG, that uses the length of the array. So also the math should work itself out using the length of the array as the
// ceiling on the RNG.


var Question1 = {

	title: "Eyyyyyy",
	answer1:"Lamo",
	answer2:"lAmo",
	answer3:"LAMO",
	answer4:"Alians",
	correctAnswer:"LAMO",
	points:"100"
}



$(document).ready(function(){

	//vars for later
	var CurrNumber;
	var CurrChannel = {};

	//fill the array
	var questions = [Question1];

	currNumber = Math.getRandomInt(0, questions.length);


	//load a question from the array into the site



	//submit your answer
	$("#btn-submit").click(function(e){


	});


	//go to next question
	$("#btn-next").click(function(e){

	});




















});





