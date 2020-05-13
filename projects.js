var slideshow1 = document.getElementById("slideshow1");
slideshow1.currentSlideIndex = 1;
showSlides(slideshow1.currentSlideIndex, slideshow1);

var slideshow2 = document.getElementById("slideshow2");
slideshow2.currentSlideIndex = 1;
showSlides(slideshow2.currentSlideIndex, slideshow2);

var slideshow_m1 = document.getElementById("slideshow-mobile1");
slideshow_m1.currentSlideIndex = 1;
showSlides(slideshow_m1.currentSlideIndex, slideshow_m1);

var slideshow_m2 = document.getElementById("slideshow-mobile2");
slideshow_m2.currentSlideIndex = 1;
showSlides(slideshow_m2.currentSlideIndex, slideshow_m2);

$('#slideshow1').click(function(){
  showSlides(slideshow1.currentSlideIndex += 1, slideshow1)
})

$('#slideshow2').click(function(){
  showSlides(slideshow2.currentSlideIndex += 1, slideshow2)
})

$('#slideshow-mobile1').on("click", function(){
  showSlides(slideshow_m1.currentSlideIndex += 1, slideshow_m1)
})

$('#slideshow-mobile2').on("click", function(){
  showSlides(slideshow_m2.currentSlideIndex += 1, slideshow_m2)
})

function showSlides(n, slideshow) {
  var i;
  var slides = slideshow.getElementsByClassName("image");
  var dots = slideshow.getElementsByClassName("dot");
  if (n > slides.length) {slideshow.currentSlideIndex = 1}
  if (n < 1) {slideshow.currentSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideshow.currentSlideIndex-1].style.display = "block";
  dots[slideshow.currentSlideIndex-1].className += " active";
}
