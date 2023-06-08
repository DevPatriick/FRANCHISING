var carousel = document.querySelectorAll('.img_carousse');
var slides = document.querySelectorAll('.img_carousse img');
var prevBtn = document.querySelector('#left');
var nextBtn = document.querySelector('#right');
var slideIndex = 0;

prevBtn.addEventListener('click', showPrevSlide);
nextBtn.addEventListener('click', showNextSlide);

setInterval(showNextSlide, 8000);

function showPrevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  updateSlide();
}



function showNextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  updateSlide();
}

function updateSlide() {
  var slideWidth = slides[0].clientWidth;
  var transformValue = -slideIndex * slideWidth;
  document.querySelector('.img_carousse').style.transform = 'translateX(' + transformValue + 'px)';
}

// images[contador].scrollIntoView({
  //  inline: "center"
  // })