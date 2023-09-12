var carousel10 = document.querySelectorAll('.img_carousse_formatacao');
var slides10 = document.querySelectorAll('.img_carousse_formatacao img');
var prevBtn10 = document.querySelector('#left');
var nextBtn10 = document.querySelector('#right');
var slideIndex10 = 0;

prevBtn10.addEventListener('click', showPrevSlide10);
nextBtn10.addEventListener('click', showNextSlide10);

setInterval(showNextSlide10, 8000);

function showPrevSlide10() {
  slideIndex10--;
  if (slideIndex10 < 0) {
    slideIndex10 = slides10.length - 1;
  }
  updateSlide10();
}



function showNextSlide10() {
  slideIndex10++;
  if (slideIndex10 >= slides10.length) {
    slideIndex10 = 0;
  }
  updateSlide10();
}

function updateSlide10() {
  var slideWidth10 = slides10[0].clientWidth;
  var transformValue10 = -slideIndex10 * slideWidth10;
  document.querySelector('.img_carousse_formatacao').style.transform = 'translateX(' + transformValue10 + 'px)';
}

// images[contador].scrollIntoView({
  //  inline: "center"
  // })