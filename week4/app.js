submit.onclick = function() {
    
    var answer = ["It is certain","It is decidedly so","Without a doubt","Yes definitely","You may rely on it","As I see it, yes","Most likely","Outlook good","Yes","Signs point to yes","Reply hazy try again","Ask again later","Better not tell you now","Cannot predict now","Concentrate and ask again","Don't count on it","My reply is no","My sources say no","Outlook not so good","Very Doubtful"];
    
	var submit = document.getElementById("submit");
    
	var message = document.getElementById("message");
    
    var magic = answer[Math.floor(Math.random() * answer.length)];
    
    message.innerText = magic;
    
};     



