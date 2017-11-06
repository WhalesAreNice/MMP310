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
comicElem.className = "slides";
var img = new Image();
var title = document.createElement("h2");
var num = 0;
img.src = comics[num].image;
title.textContent = comics[num].title;

comicElem.appendChild(img);
comicElem.appendChild(title);
document.body.appendChild(comicElem);

var next = document.getElementById("next");
var back = document.getElementById("back");

next.onclick = function() {
    if (num < comics.length) {
        num++;
        img.src = comics[num].image;
        title.textContent = comics[num].title;
    }
}

back.onclick = function() {
    if (num > 0) {
        num--;
        img.src = comics[num].image;
        title.textContent = comics[num].title
    }
}


