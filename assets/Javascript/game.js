$(document).ready(function() {

	dogs = ["assets/images/old.jpg","assets/images/pug.jpg","assets/images/sniff.jpg","assets/images/stich.jpg"];


	  var counter = 0;
	  var wins = 0;
	  var losses = 0;

	  $('#win').text(wins);
	  $('#win').text(losses);

	  newDogs();
	  newGame();

	    function newDogs () {
	    	var numbers = []
	    	   while(numbers.length < 4){
	    	   var randomnumber =Math.ceil(Math.random()*15)
	    	   var found = false;
    	       for (var i = 0; i < numbers.length; i++){
    	       	if (numbers[i] == randomnumber){
    	       	found = true; break
    	       }
	    }

	    if(!found)numbers[numbers.length]=randomnumber;
	}
	    console.log(numbers);

	    for (i = 0; i < numbers.length; i++) {
	    	var imageDog = $('<img>');
	    	imageDog.attr('data-num', numbers[i]);
	    	imageDog.attr('src', dogs[i]);
	    	imageDog.attr('alt', dogs);
	    	imageDog.addClass('dogImage')
	    	$('#dogs').append(imageDog);
	    }

	}

	function newGame() {
		counter = 0 
		$('#yourscore').text(counter);

	function randomIntFromInterval(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}

	var numberToGuess = randomIntFromInterval(10,80);

	$('.value').text(numberToGuess);

	$('.dogImage').on('click', function(){
		counter = counter + parseInt($(this).data('num'));

		$('#yourScore').text(counter);

		if (counter == numberToGuess){
			$('#status').text('You Won!');
			wins++;
			$('#win').text(wins);
			console.log(wins)
			$('#dogs').empty();
			newCrystals();
			newGame();

		} else if (counter > numberToGuess){
			$('#status').text('You Lose!')
			losses ++;
			$('#loss').text('losses');
			console.log(losses)
			$('#dogs').empty();
			newDogs();
			newGame();

		}

	});

}

});