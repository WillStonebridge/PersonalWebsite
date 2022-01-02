
var skillSlides = document.getElementsByClassName('skillSlide'); //the skill slides
var skillIndex = document.getElementById('skillIndex'); //the number beneath the skill slides
var skillHeader = document.getElementsByClassName('sectionHead')[1]; //the Header for the skill section

var reviewSlides = document.getElementsByClassName('reviewSlide'); //the review slides
var reviewIndex = document.getElementById('reviewIndex'); //the number beneath the review slides

//reveals the initial slides of each section at startup
showSlide(0, skillIndex, skillSlides);
showSlide(0, reviewIndex, reviewSlides);

//changes to the slideshow index by +/- 1 slides (n), handles looping
function changeSlide(n, currentIndex, section) {

    var index = currentIndex.innerText[0] - 1; //acquires the index of the current slide in numerical form

    if (n + index < 0) { //reverts to the last slide if -1 is reached
        showSlide(section.length - 1, currentIndex, section);
    } else if (n + index >= section.length) { //returns to the first slide if the last index is passed
        showSlide(0, currentIndex, section);
    } else { //otherwise simply adds or subtracts the n to change slides
        showSlide(index + n, currentIndex, section);
    }

}

//displays n slide to for a given section
function showSlide(n, currentIndex, section) {

    //hides the current slide
    section[currentIndex.innerText[0] - 1].style.display = "none";

    //displays slide n
    section[n].style.display = "block";

    //updates the index next to the arrows
    currentIndex.innerText = (n + 1) + ' / ' + section.length;

    //if the slide being changed is in skills, update the section header
    if(section[0].className === 'skillSlide') {
        updateSkillHeader(n);
    }
}

function updateSkillHeader(n) {

    if(n === 0) {
        skillHeader.innerText = '- Programming Languages -';
    } else if (n === 1) {
        skillHeader.innerText = '- Skills -';
    } else if (n === 2) {
        skillHeader.innerText = '- Awards and Achievements -';
    }
}