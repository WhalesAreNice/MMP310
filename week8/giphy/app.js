$(document).ready(function() {
    $('#query').on("keypress", function(event){
        if(event.keyCode == 13) {
            var query = this.value;
            var key = "m4Bfa00uhDvVB6qWyi3jmcZA0YujoKbo";
            var url = "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=" + key + "&limit=6";
            $.getJSON(url, function(json) {
                
                // memory game
                
                // need two copies of each image in a list 
                
                var cards = [];
                
                // place images into a grid
                var $game = $('#game');
                var matches = 2;
                for (let j = 0; j < matches; j++) {
                    for (let i = 0; i < json.data.length; i++){
                        var img = json.data[i];
                        var div = new $('div').addClass('card').attr('data-num', i);
                        var imgElem = new Image();
                        imgElem.src = img.images.downsized.url;
                        div.append(imgElem);
                        cards.push(div);

                    }
                }
                cards.sort(function() { return 0.5-Math.random() });
                
                for(let i = 0; i < cards.length; i++){
                    $game.append(cards[i]);
                }
                // each image needs clicks event
                    // is there another image to compare
                
                    // compare images
                        // match
                            // stays face up
                            // if all matches game is won
                        // not match
                            // flip back over
                            // clear current image
                    // keep track of current image  
                
                
                for (let i = 0; i < json.data.length; i++) {
                    var img = json.data[i];
                    console.log(img.images.downsized.url);
                    var imgElem = new Image();
                    imgElem.src = img.images.downsized.url;
                    $('body').append(imgElem);
                }
            });
        }
    });
});
