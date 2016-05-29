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

//call upon function once player has matched the number or gone over the goal number
var reset = function(){
	var values = {
			goal: Math.floor(Math.random() * 120) + 19, 
			yellow: Math.floor(Math.random() * 12) + 1,
			purple: Math.floor(Math.random() * 12) + 1,
			ruby: Math.floor(Math.random() * 12) + 1,
			blue: Math.floor(Math.random() * 12) + 1,
			score: 0,
	};
}
//set up all the click functions and if statements
			$('#yellow').on ('click', function(){
						values.score = (values.score + values.yellow);
						console.log("New total= " + values.score);
						$(".userScore").html("Your Score: " + values.score);
							if(values.score == values.goal){
								wins++;
								$(".winsLosses").append("Your Wins: " + wins + "<p></p>" + "Your Losses: " + losses);
								reset();
							}
							if(values.score > values.goal){
								losses++;
								$(".winsLosses").append("Your Wins: " + wins + "<p></p>" + "Your Losses: " + losses);
								reset();
							}
			});

			$('#purple').on ('click', function(){
						values.score = (values.score + values.purple);
						console.log("New total= " + values.score);
						$(".userScore").html("Your Score: " + values.score);
								if(values.score == values.goal){
								wins++;
								$(".winsLosses").append("Your Wins: " + wins + "<p></p>" + "Your Losses: " + losses);
								reset();
							}
							if(values.score > values.goal){
								losses++;
								$(".winsLosses").append("Your Wins: " + wins + "<p></p>" + "Your Losses: " + losses);
								reset();
							}
			});

			$('#ruby').on ('click', function(){
						values.score = (values.score + values.ruby);
						console.log("New total= " + values.score);
						$(".userScore").html("Your Score: " + values.score);
								if(values.score == values.goal){
									wins++;
									$(".winsLosses").append("Your Wins: " + wins + "<p></p>" + "Your Losses: " + losses);
									reset();
							}
								if(values.score >= values.goal){
									losses++;
									$(".winsLosses").append("Your Wins: " + wins + "<p></p>" + "Your Losses: " + losses);
									reset();
							}
			});

			$('#blue').on ('click', function(){
						values.score = (values.score + values.blue);
						console.log("New total= " + values.score);
						$(".userScore").html("Your Score: " + values.score);
								if(values.score == values.goal){
									wins++;
									$(".winsLosses").append("Your Wins: " + wins + "<p></p>" + "Your Losses: " + losses);
									reset();
								}
								if(values.score >= values.goal){
										losses++;
										$(".winsLosses").append("Your Wins: " + wins + "<p></p>" + "Your Losses: " + losses);
										reset();
								}
			});

$(".targetNumber").append("Goal Number: " + values.goal);







    

























});