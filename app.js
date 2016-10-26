

// Here we will define a bunch of the trivia, they are objects that contain a title, a body, 4 answers, and a correct answer
// All the questions then go into a array. Every time we need a new question, we grab it from the array and then delete it from the array,
// This stops you from getting the same question multiple times. 

//The question is chosen by a RNG, that uses the length of the array. So also the math should work itself out using the length of the array as the
// ceiling on the RNG.


var Question1 = {

	title: "Eyyyyyy",
	questionBody:"eyyyyyyyyyyyyyyyyyyyyyyyyyy",
	answer1:"Lamo",
	answer2:"lAmo",
	answer3:"LAMO",
	answer4:"Alians",
	correctAnswer:"LAMO",
	points:"100"
}

var Question2 = {

	title: "Great Expectations",
	questionBody:"My father's family name being Pirrip, and my Christian name Philip, my infant tongue could make of both names nothing longer or more explicit than Pip. So, I called myself Pip, and came to be called Pip.",
	answer1:"What?",
	answer2:"Seriously",
	answer3:"Charles Dickens?",
	answer4:"Is this even a question...",
	correctAnswer:"Is this even a question...",
	points:"100"
}



$(document).ready(function(){

	//vars for later
	var currNumber;
	var currQuestion = {};
	var numberOfQuestions;

	//fill the array
	var questions = [Question1, Question2];

	currNumber = getRandomInt(0, questions.length);
	currQuestion = questions[currNumber];



	//load a question from the array into the site
	$(".question-title").html(`
		${currQuestion.title}
	`);

	$(".question-body").html(`
		<p>${currQuestion.questionBody}</p>
	`);

	


	$("#answer-text1").html(`
	    <input class="btn btn-default question-btn" name="optionsRadios" id="optionsRadios1" value="${currQuestion.answer1}">

	`);

	$("#answer-text2").html(`
	    <input class="btn btn-default question-btn" name="optionsRadios" id="optionsRadios2" value="${currQuestion.answer2}">

	`);

	$("#answer-text3").html(`
	    <input class="btn btn-default question-btn" name="optionsRadios" id="optionsRadios3" value="${currQuestion.answer3}">

	`);

	$("#answer-text4").html(`
	    <input class="btn btn-default question-btn" name="optionsRadios" id="optionsRadios4" value="${currQuestion.answer4}">

	`);


	// //submit your answer
	// $("#btn-submit").click(function(e){
	// 	if(CurrQuestion.correctAnswer == ){

	// 	}
	// 	else{

	// 	}
	// });


	//go to next question
	$("#btn-next").click(function(e){
		if(questions.length == 0){
			//Show the end of game modal
		}
		else{
			//hide the next button
			$("#btn-next").hide();
			$("#btn-submit").show();


			//get a new random number
			currNumber = getRandomInt(0, questions.length);


		}
	});




















});


function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}


