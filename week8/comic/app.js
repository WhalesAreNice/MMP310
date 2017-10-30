var comics = [
    {
        image: "images/comic1.png",
        title: "panel 1"
       
},
    {
        image: "images/comic2.png",
        title: "panel 2"
        
},
    {
        image: "images/comic3.png",
        title: "panel 3"
       
},
    {
        image: "images/comic4.png",
        title: "panel 4"
        
},
    {
        image: "images/comic5.png",
        title: "panel 5"
        
},
    {
        image: "images/comic6.png",
        title: "panel 6"
},
    {
        image: "images/comic7.png",
        title: "panel 7"
}

];

var c = document.querySelector("#container");
var comicElem = document.createElement("div");
comicElem.className = "message";
var img = new Image();
var title = document.createElement("h2");
img.src = comics.image;
title.textContent = comics.title;

comicElem.appendChild(img);
comicElem.appendChild(title);
document.body.appendChild(comicElem);


$(document).ready(function() {
  // for multiple references use a variable, often the convention is to use $ in var name to indicate it's a jQuery object, not HTML element reference, has no functional purpose
  var $mydiv = $('#mydiv');
  $('#btn').click(function() {
    console.log($mydiv.html());
    $mydiv.text('Goodbye world!');
  });
});