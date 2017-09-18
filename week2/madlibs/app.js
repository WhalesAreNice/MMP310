submit.onclick = function() {
	var submit = document.getElementById("submit");
	var name = document.getElementById("name");
    var country = document.getElementById("country");
    var animal = document.getElementById("animal");
    var verb1 = document.getElementById("verb1");
    var verb2 = document.getElementById("verb2");
    var vague = document.getElementById("vague");
    var verb3 = document.getElementById("verb3");
    var narrow = document.getElementById("narrow");
    var occupation = document.getElementById("occupation");
    var transport = document.getElementById("transport");
    var verb4 = document.getElementById("verb4");
    var building = document.getElementById("building");
    var equipment = document.getElementById("equipment");
    var verb5 = document.getElementById("verb5");
    var verb6 = document.getElementById("verb6");
    
	var message = document.getElementById("message");
    
    if (!name.value) {
        message.innerText = "Please input a name!";
    } else if (!country.value) {
        message.innerText = "Please input a country!";
    } else if (!animal.value) {
        message.innerText = "Please input an animal in plural form!";
    } else if (!verb1.value) {
        message.innerText = "Please input a verb!";
    } else if (!verb2.value) {
        message.innerText = "Please input a verb!";
    } else if (!vague.value) {
        message.innerText = "Please input a vague area!";
    } else if (!verb3.value) {
        message.innerText = "Please input a verb!";
    } else if (!narrow.value) {
        message.innerText = "Please input a narrow location!";
    } else if (!occupation.value) {
        message.innerText = "Please input an occupation!";
    } else if (!transport.value) {
        message.innerText = "Please input a method of transportation!";
    } else if (!verb4.value) {
        message.innerText = "Please input a verb!";
    } else if (!building.value) {
        message.innerText = "Please input a type of building!";
    } else if (!equipment.value) {
        message.innerText = "Please input a construction equipment!";
    } else if (!verb5.value) {
        message.innerText = "Please input a verb!";
    } else if (!verb6.value) {
        message.innerText = "Please input a verb!";
    } else {
	message.innerText = name.value + " goes to a farm in the outskirts of " + country.value + ". There " + name.value + " sees many " + animal.value + " running around in their pen. One of the " + animal.value + " seems a bit weird and " + verb1.value + " at the fence. It escapes and " + verb2.value + " off into " + vague.value + ". The farmer " + verb3.value + " out and after the " + animal.value + ". They both fall into a " + narrow.value + " and get stuck. " + name.value + " goes and calls the " + occupation.value + " for help. The " + occupation.value + " arrives shortly in a " + transport.value + ". With a miss step, the " + occupation.value + " falls into the " + narrow.value + " as well. " + name.value + " takes matters into his/her own hands and " + verb4.value + " to a nearby " + building.value + " to grab a " + equipment.value + ". With the " + equipment.value + " in hand, " + name.value + " " +verb5.value + " back to the " + narrow.value + " where everyone is in, to get them out. After all the problems, " + name.value + " " +  verb6.value + " from the farm and disappears into the horizon, never to be seen again.";	
    }
};                          
