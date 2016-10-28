

// Here we will define a bunch of the trivia, they are objects that contain a title, a body, 4 answers, and a correct answer
// All the questions then go into a array. Every time we need a new question, we grab it from the array and then delete it from the array,
// This stops you from getting the same question multiple times. 

//The question is chosen by a RNG, that uses the length of the array. So also the math should work itself out using the length of the array as the
// ceiling on the RNG.


var Question1 = {

	title: "Guess who?",
	questionBody:"In the movie Halloween (1978) The mask they bought for Michael Meyers turned out to be whos face?",
	answer1:"William Shatner",
	answer2:"Harrison Ford",
	answer3:"Christopher Walken",
	answer4:"Hugh Jackman",
	correctAnswer:"William Shatner",
	points:175
}

var Question2 = {

	title: "Who Knows Jack?",
	questionBody:"The First jack O Lanterns were originally made from?",
	answer1:"Turnips",
	answer2:"Pumkins",
	answer3:"Squash",
	answer4:"Apples",
	correctAnswer:"Turnips",
	points: 125
}
var Question3 = {

	title: "Do you hear that?",
	questionBody:"In Medieval Europe, owls were thought to be witches. To hear an owls call meant someone was",
	answer1:"Cursed",
	answer2:"A Witch",
	answer3:"About to die",
	answer4:"Evil",
	correctAnswer:"About to die",
	points: 125
}
var Question4 = {

	title: "Halloween is expensive",
	questionBody:"Over $1.5 billion is spent on costumes each year. How much is spent on other Halloween paraphernalia?",
	answer1:"$2.5 Billion",
	answer2:"$500 Million",
	answer3:"$1 Billion",
	answer4:"$100 Million",
	correctAnswer:"$2.5 Billion",
	points: 125
}
var Question5 = {

	title: "Yay for candy!",
	questionBody:"What was the first individually wrapped penny candy in the US?",
	answer1:"Bit-O-Honey",
	answer2:"Laffy-Taffy",
	answer3:"Tootsie Rolls",
	answer4:"Sweet Tarts",
	correctAnswer:"Tootsie Rolls",
	points: 100
}
var Question6 = {

	title: "Woah, so many Colors",
	questionBody:"Pumpkins are not only orange, but also _______, _______ and _______",
	answer1:"Purple, white, and blue",
	answer2:"Brown, green, and black",
	answer3:"White, blue, and green",
	answer4:"Green, brown, blue",
	correctAnswer:"White, blue, and green",
	points: 200
}
var Question7 = {

	title: "Who is that creature?",
	questionBody:"A Mythical creature who defys death by sucking the blood of humans is a _______.",
	answer1:"Chupacabra",
	answer2:"A Werewolf",
	answer3:"Vampire",
	answer4:"Basilisk",
	correctAnswer:"Vampire",
	points: 100
}
var Question8 = {

	title: "1 bat, 2 bats, 50 Bats!",
	questionBody:"The common little brown bat of North America has the longest life span for a mammal it is size. What is its average life span?",
	answer1:"62 Years",
	answer2:"42 Years",
	answer3:"32 Years",
	answer4:"52 Years",
	correctAnswer:"32 Years",
	points: 150
}
var Question9 = {

	title: "Ahhh Kill it!",
	questionBody:"If you see a spider on Halloween, it is thought to bring you _______.",
	answer1:"Fortune",
	answer2:"Good Luck",
	answer3:"Bad Luck",
	answer4:"Fame",
	correctAnswer:"Good Luck",
	points: 125
}
var Question10 = {

	title: "Jimmy Fallon told me to.",
	questionBody:"What percentage of parents have admitted to sneaking goodies from their kids Halloween candy bags?",
	answer1:"90%",
	answer2:"50%",
	answer3:"60%",
	answer4:"30%",
	correctAnswer:"90%",
	points: 100
}
var Question11 = {

	title: "Best holiday ever!",
	questionBody:"In which country did Halloween originate?",
	answer1:"Mexico",
	answer2:"Ireland",
	answer3:"Spain",
	answer4:"Romania",
	correctAnswer:"Ireland",
	points: 125
}
var Question12 = {

	title: "I thought it was count chocula",
	questionBody:"What was the name of Dracula’s sidekick?",
	answer1:"Igor",
	answer2:"Lockhart",
	answer3:"RenField",
	answer4:"Freidrich",
	correctAnswer:"RenField",
	points: 125
}
var Question13 = {

	title: "Dark souls",
	questionBody:"From which words did ‘bonfire’ originate?",
	answer1:"Bond and Fire",
	answer2:"Bone and Fire",
	answer3:"Bond and Flame",
	answer4:"Bone and Flame",
	correctAnswer:"Bone and Fire",
	points: 100
}
var Question14 = {

	title: "I vant to suck your blood - Dracula",
	questionBody:"The name Dracula stands for son of the devil. But also son of the _______.",
	answer1:"Night",
	answer2:"Darkness",
	answer3:"Dragon",
	answer4:"Shadows",
	correctAnswer:"Dragon",
	points: 175
}
var Question15 = {

	title: "Its Dracula... Duh",
	questionBody:"What was Draculas real name?",
	answer1:"Vincint",
	answer2:"Alucard",
	answer3:"Vlad the Impaler",
	answer4:"Van Helsing",
	correctAnswer:"Vlad the Impaler",
	points: 100
}
var Question16 = {

	title: "All I see is me!",
	questionBody:"According to superstition, if you stare into a mirror at midnight on Halloween, what will you see?",
	answer1:"A Ghost of a family member",
	answer2:"Your future husband or wife",
	answer3:"How you will pass away",
	answer4:"Yourself in the afterlife",
	correctAnswer:"Your future husband or wife",
	points: 150
}
var Question17 = {

	title: "I think I have a phobia just for this question.",
	questionBody:"Which phobia means you have an intense fear of Halloween? ",
	answer1:"Aeatidephobia",
	answer2:"Photophobia",
	answer3:"HelioPhobia",
	answer4:"Samhnainophobia",
	correctAnswer:"Samhnainophobia",
	points: 200
}
var Question18 = {

	title: "The character that lets him kick the foot ball.",
	questionBody:"Every Halloween, Charlie Brown helps his friend Linus wait for what character to appear?",
	answer1:"The Wicked Witch",
	answer2:"The Great Pumpkin",
	answer3:"The Headless Horseman",
	answer4:"The Spook King",
	correctAnswer:"The Great Pumpkin",
	points: 150
}
var Question19 = {

	title: "Here pumkin. ",
	questionBody:"From which region in the world do pumpkins originate?",
	answer1:"Europe",
	answer2:"Central America",
	answer3:"East Asia",
	answer4:"Middle East",
	correctAnswer:"Central America",
	points: 175
}
var Question20 = {

	title: "They bob it to music!!! PARTY!",
	questionBody:"What do people bob for on Halloween?",
	answer1:"Onions",
	answer2:"Apples",
	answer3:"Grapes",
	answer4:"Oranges",
	correctAnswer:"Apples",
	points: 100
}
//fill the array
var questionsAll = [Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10, Question11, Question12, Question13, Question14, Question15, Question16, Question17, Question18, Question19, Question20];
var questionsEasy = [];
var questionsMedium = [];
var questionsHard = [];
var questionsExtreme = [];
var questions = [];
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






	$("#start-modal").modal('show');
	$(".wrapper").hide();

	$(".start-btn").click(function(e){
		var difficulity = $(this).data('rating');

		if($('#playerName').val() != ""){	


			if( difficulity == "easy"){
				questions = questionsEasy;
			}
			else if( difficulity == "medium"){
				questions = questionsMedium;
			}
			else if( difficulity =="hard"){
				questions = questionsHard;
			}
			else if( difficulity =="extreme"){
				questions = questionsExtreme;
			}
			else{
				questions = questionsAll;
			}



			//Show the starting modal, and do things related to that
			$("#btn-next").hide();

			currNumber = getRandomInt(0, questions.length);
			currQuestion = questions[currNumber];

			numberOfQuestions = Math.min(questions.length,10);
			answeredQuestions = 0;

			questions.splice(currNumber,1);
			refreshQuestions(currQuestion);
			

			$("#player-score").text("SCORE: "+playerPoints);
			$("#answered-questions").html(`${answeredQuestions}`);
			$("#total-questions").html(`${numberOfQuestions}`);	

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
	pointsLostWhenWrong = Math.floor(((1/3)*currQuestion.points));


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



