//This is the timer function
function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}
//THIS IS THE SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;    //start point
  var slides = document.getElementsByClassName("mySlides");//this is the slides
  var dots = document.getElementsByClassName("dot"); //this is the dots at the bottom
  if (n > slides.length) {slideIndex = 1}//go to next slide
  if (n < 1) {slideIndex = slides.length}//go back one slide
  for (i = 0; i < slides.length; i++) { //reset back to the beggining 
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");//this lets you use the dots to change slides
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}//this is to show only one slide at a time