var index = 0; //the number corresponding to the current slide
var slides = document.getElementsByClassName('slide'); //all slides
var numSlides = slides.length; //the number of total slides

//finds the slide with the greatest height and assigns it to a variable
var height = slides[1].style.height;
for (let i = 1; i < numSlides; i++) {
    if (slides[i].style.height > height) {
        height = slides[i].style.height;
    }
}

//reveals the first slide at startup
showSlide(index);

function changeSlide(n) {

    if (n + index < 0) { //reverts to the last slide if -1 is reached
        showSlide(numSlides - 1);
    } else if (n + index >= numSlides) { //returns to the first stage if a index above the available slides is reached
        showSlide(0);
    } else { //otherwise simply adds or subtracts the n to change slides
        showSlide(index + n);
    }

}

function showSlide(n) {

    //hides the current slide
    slides[index].style.display = "none";

    //displays slide n
    slides[n].style.display = "block";
    slides[n].style.height = height;

    //updates the slide index
    index = n;

    //updates the index next to the arrows
    document.getElementById('slideIndex').innerText = (index + 1) + ' / ' + numSlides;
}