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

$(".targetNumber").append("Goal Number: " + values.goal);
$(".winsLosses").append("Your Wins :" + "<p></p>" + "Your Losses: ");
$(".userScore").append("Your Score: " + values.score);


    

























});