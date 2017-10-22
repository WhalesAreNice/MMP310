window.addEventListener("load", function() {
	var myList = document.getElementById("addToList");
	var addList = document.getElementById("addList");
	var todo = document.getElementById("todo");
	addList.addEventListener("click", addMessage);
	todo.addEventListener("keydown", function(event) {
		if (event.key == "Enter") {
			addMessage();
		}
	});
	
	function addMessage() {
		var msg = document.createElement("div");
        
        var del = document.createElement("button");
		del.className = "delete";
		del.innerText = "Delete";
		del.addEventListener("click", function() {
			myList.removeChild(this.parentNode);
		});
		
		msg.appendChild(del);
        
		var text = document.createElement("p");
		msg.className = "message";
		text.innerText = todo.value;
		text.className = "text";
		msg.appendChild(text);
		
		
		
		myList.appendChild(msg);
	}

});