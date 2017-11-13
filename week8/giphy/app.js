var count = 5;
var countdown = function(card) {
    if (count == 0) {
        card.children().hide(0);
        count = 5;
        clearInterval(countdownInterval);
                        }
    console.log(count);
     count--;
    };

var countdownInterval;


$(document).ready(function() {
	$('#query').on("keypress", function(event){
		/* keyCode 13 is the enter key to submit query */
		if (event.keyCode == 13) {
			var query = this.value;
			var key = "uTtk10NFnmdtYP4f3URNps6BFeFqh1Jq";
			var url = "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=" + key + "&limit=6";
            var matchNum = 0;
            var clickNum = 0;
			$.getJSON(url, function(json) {
				
				/* memory game */
				
				// need two copies of each image in a list
				var cards = [];
				
				// place image into a grid
				// obscure images
				var $game = $('#game');
				var matches = 2;
				for (let j = 0; j < matches; j++) {
					for (let i = 0; i < json.data.length; i++) {
						var img = json.data[i];
						var div = $('<div>')
							.addClass('card')
							.attr('data-num', i);
						var imgElem = new Image();
						imgElem.src = img.images.downsized.url;
						imgElem.style.display = "none";
						div.append(imgElem);
						cards.push(div);
					}
				}
				cards.sort(function() { return 0.5 - Math.random() });
				for (let i = 0; i < cards.length; i++) {
					$game.append(cards[i]);
				}
					 
				var clickedCards = [];
				// each card/image needs clicks event
				$('.card').click(function() {
                    
                
                    
					const $card = $(this);
                    
                   
                    clickNum ++;
//                    console.log(clickNum, matchNum);
					// reveal images
                    
                    
					// is there another image to compare
//					console.log(clickedCards.length, matches);
					// reveal images
                    
                    
					$card.children().show();
                    
					// is there another image to compare
					if (clickedCards.length == matches - 1) {
                        console.log(clickedCards[0].num, $card.data().num);
						// compare images
						var allMatch = true;
						for (let i = 0; i < clickedCards.length; i++) {
							if (clickedCards[i].num != $card.data().num) {
								allMatch = false;
							}
						}
						if (allMatch) {
							// match, stay face up
							console.log("this is a match");
                            matchNum ++;
                            
							// if all matches game is won
						} else {
							// not a match, hide the images
							$card.children().delay(1000).hide(0);
							for (let i = 0; i < clickedCards.length; i++) {
								clickedCards[i].img.delay(1000).hide(0);
							}
						}
                        clearInterval(countdownInterval);
                        count = 5;
						// clear the current image
						clickedCards = [];
					} else {
                        countdownInterval = setInterval(function(){
                            countdown($card);
                        }, 1000);
						// keep track of current image
						clickedCards.push({
							num: $card.data().num,
							img: $card.find('img')
						});
					}
                    
                    
                    
                    if(matchNum == 6) {
                        addMessage(clickNum);
                    }
				});
					
			});
		}
	});
});

function addMessage(clicks) {
        var endScreen = document.getElementById("endScreen");
		var msg = document.createElement("div");
		var text = document.createElement("p");
		msg.className = "message";
		text.innerText = "You've won!  Your score is " + clicks + " clicks. Your efficiency was " + Math.round(12/clicks*100) + "%";
		text.className = "text";
		msg.appendChild(text);
    
		endScreen.appendChild(msg);
}
