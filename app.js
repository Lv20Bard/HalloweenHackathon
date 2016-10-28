

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
	points:100
}

var Question2 = {

	title: "Great Expectations",
	questionBody:"My father's family name being Pirrip, and my Christian name Philip, my infant tongue could make of both names nothing longer or more explicit than Pip. So, I called myself Pip, and came to be called Pip.",
	answer1:"What?",
	answer2:"Seriously",
	answer3:"Charles Dickens?",
	answer4:"Is this even a question...",
	correctAnswer:"Is this even a question...",
	points: 100
}

//fill the array
var questions = [Question1, Question2];
var playerPoints = 0;
var answeredQuestions = 0;
var numberOfQuestions = 0;
var totalPossiblePoints = 0;
var pointsLostWhenWrong = 0;


$(document).ready(function(){

	//vars for later
	var currNumber;
	var currQuestion = {};
	answeredQuestions = 0;
	playerPoints = 0;




	currNumber = getRandomInt(0, questions.length);
	currQuestion = questions[currNumber];


	numberOfQuestions = questions.length;
	answeredQuestions = 0;


	$("#player-score").text("SCORE: "+playerPoints);
	$("#answered-questions").html(`${answeredQuestions}`);
	$("#total-questions").html(`${numberOfQuestions}`);	

	//Show the starting modal, and do things related to that
	$("#btn-next").hide();

	questions.splice(currNumber,1);
	refreshQuestions(currQuestion);




	$("#start-modal").modal('show');
	$(".wrapper").hide();

	$("#start-btn").click(function(e){
		

		if($('#playerName').val() != ""){	
			$('#player-Name').text($('#playerName').val());
			$(".wrapper").show();
			$("#start-modal").modal('hide');

		}
		else{
			$("#start-modal-body").attr('class','modal-body has-error');
			$("#playerName").attr('placeholder','YOU MUST ENTER NAME!')
		}


	});



	$(".again-btn").click(function(e){
		location.reload();
	});





	//go to next question
	$("#btn-next").click(function(e){
		if(questions.length == 0 || answeredQuestions == numberOfQuestions){
			
			$(".playerGotPoints").html(`${playerPoints}`);


			$(".maxPointsForGame").html(`${totalPossiblePoints}`);

			//Show the end of game modal
			$(".wrapper").hide();
			if(playerPoints<(0.5*totalPossiblePoints)){
				$("#loss-modal").modal('show');
			}


			else{
				//first star
				if(playerPoints<(0.70*totalPossiblePoints)){
					$("#star1").attr('class','star glyphicon glyphicon-star-empty');
				}
				else{
					$("#star1").attr('class','star glyphicon glyphicon-star');
				}
				//second star
				if(playerPoints<(0.85*totalPossiblePoints)){
					$("#star2").attr('class','star glyphicon glyphicon-star-empty');
				}
				else{
					$("#star2").attr('class','star glyphicon glyphicon-star');
				}	
				//third star
				if(playerPoints==totalPossiblePoints){	
					$("#star3").attr('class','star glyphicon glyphicon-star');
				}
				else{
					$("#star3").attr('class','star glyphicon glyphicon-star-empty');
				}
				$("#victory-modal").modal('show');
			}
		}
		else{
			//hide the next button
			$("#btn-next").hide();


			currNumber = getRandomInt(0, questions.length);
			currQuestion = questions[currNumber];

			questions.splice(currNumber,1);
			refreshQuestions(currQuestion);
			//load a question from the array into the site
			

		}


	});



});


function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}


function refreshQuestions (currQuestion){

	//load a question from the array into the site
	$(".question-title").html(`
		<h1>
			${currQuestion.title}
		</h1>


		<h1 id="question-value" class="pull-right"> 
			Question Value: ${currQuestion.points} 
		</h1>
	`);

	totalPossiblePoints += currQuestion.points;
	pointsLostWhenWrong = (0.33*currQuestion.points);


	$(".question-body").html(`
		<p>${currQuestion.questionBody}</p>
	`);



	$("#btn-next").hide();


	$("#answer-text1").html(`
	    <button class="btn btn-default question-btn" name="optionsRadios" id="optionsRadios1" value="${currQuestion.answer1}">
	    ${currQuestion.answer1}
	    </button>
	`);

	$("#answer-text2").html(`
	    <button class="btn btn-default question-btn" name="optionsRadios" id="optionsRadios2" value="${currQuestion.answer2}">
	    ${currQuestion.answer2}
	    </button>
	`);

	$("#answer-text3").html(`
	    <button class="btn btn-default question-btn" name="optionsRadios" id="optionsRadios3" value="${currQuestion.answer3}">
	    ${currQuestion.answer3}
	    </button>
	`);

	$("#answer-text4").html(`
	    <button class="btn btn-default question-btn" name="optionsRadios" id="optionsRadios4" value="${currQuestion.answer4}">
	    ${currQuestion.answer4}
	    </button>
	`);

	answeredQuestions++;
	$("#player-score").text("SCORE: "+playerPoints);
	$("#answered-questions").html(`${answeredQuestions}`);

	//submit your answer
	$(".question-btn").click(function(e){	
		var clickedAnswer = $(this).val();
		if(currQuestion.correctAnswer == clickedAnswer){
			$(this).attr('class', 'btn btn-success question-btn');
			$(".question-btn").attr('disabled', 'disabled');
			$('#btn-next').show();
			playerPoints += currQuestion.points;
			$("#player-score").text("SCORE: "+playerPoints);


		}
		else{
			$(this).attr('class', 'btn btn-danger question-btn');
			$(this).attr('disabled', 'disabled');
			currQuestion.points -= pointsLostWhenWrong;
			$("#question-value").text("Question Value: "+currQuestion.points);

		}
	});

}



