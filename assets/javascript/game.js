$(document).ready(function() {

//set up all random values for goal number and each gem
var values = {
			goal: Math.floor(Math.random() * 120) + 19, 
			yellow: Math.floor(Math.random() * 12) + 1,
			purple: Math.floor(Math.random() * 12) + 1,
			ruby: Math.floor(Math.random() * 12) + 1,
			blue: Math.floor(Math.random() * 12) + 1,
			score: 0,
};
//set up value for wins/losses for counter		
var wins = 0;
var losses = 0;

console.log(values);

$('#yellow').on ('click', function(){
			values.score = (values.score + values.yellow);
			console.log("New total= " + values.score);
});

$('#purple').on ('click', function(){
			values.score = (values.score + values.purple);
			console.log("New total= " + values.score);
});

$('#ruby').on ('click', function(){
			values.score = (values.score + values.ruby);
			console.log("New total= " + values.score);
});

$('#blue').on ('click', function(){
			values.score = (values.score + values.blue);
			console.log("New total= " + values.score);
});



if (values.score === values.goal){
	wins++;
	//call function to reset
	}

if (values.score > values.goal){
	losses++;
	reset;
}


$(".targetNumber").append("Goal Number: " + values.goal);
$(".winsLosses").append("Your Wins: " + wins + "<p></p>" + "Your Losses: " + losses);
$(".userScore").append("Your Score: " + values.score);



function reset(){
	var values = {
			goal: Math.floor(Math.random() * 120) + 19, 
			yellow: Math.floor(Math.random() * 12) + 1,
			purple: Math.floor(Math.random() * 12) + 1,
			ruby: Math.floor(Math.random() * 12) + 1,
			blue: Math.floor(Math.random() * 12) + 1,
			score: 0,
	};
}


    

























});