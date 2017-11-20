var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		events: {
		    'onReady': onPlayerReady,
		}
	});
}

var subtitles = [
	{
		text: "Hello",
		time: 1,
		duration: 1
	},
	{
		text: "I'm a cat",
		time: 2,
		duration: 1
	},
	{
		text: "Goodbye!",
		time: 4,
		duration: 2
	}
];

function onPlayerReady(event) {
document.getElementById("play").addEventListener("click", function() {
	player.playVideo();
});
document.getElementById("stop").addEventListener("click", function() {
	player.stopVideo()
});
document.getElementById('jump').addEventListener('click', function() {
	if (player && player.getCurrentTime) {
		player.seekTo( player.getCurrentTime() + 5 );
	}
});
    
// in the HTML
<div id="subtitles">Subtitles</div>
// in JS
var subtitles = ["Hello!", "I'm a cat!", "Goodbye!"];
var currentSubTitle = 0;
var subtitleDiv = document.getElementById("subtitles");
// in onPlayerReady
function nextSubtitle() {
	subtitleDiv.textContent = subtitles[currentSubTitle];
	currentSubTitle++;
}
setInterval(nextSubtitle, 2000);
      
function nextSubtitle() {
	var titled = false;
	for (var i = 0; i < obj.length; i++) {
		var time = player.getCurrentTime();
		if (time > obj[i].time && time < obj[i].time + obj[i].duration) {
			subtitleDiv.textContent = obj[i].text;
			titled = true;
		}
	}
	if (!titled) {
		subtitleDiv.textContent = "";
	}
}
// 1000/24 gives us 24 frames per second, should be enough
setInterval(nextSubtitle, 1000/24);