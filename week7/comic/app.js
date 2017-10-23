var slides = [
    {
        image:"images/cat.jpg",
        caption: "cat"
    },
    {
        image:"images/dog.jpg",
        caption: "dog"
    }
    
];

for(var i = 0; i < slides.length; i++){
    var s = slides[i];
    var slide = document.createElement("div");
    var image = new Image();
    var caption = document.createElement("p");
    image.src = s.image;
    caption.textContent = s.caption;
    slide.appendChild(image);
    slide.appendChild(caption);
    document.body.appendChild(slide);
}

