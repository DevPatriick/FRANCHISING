var carousel111 = document.querySelectorAll('.img_carousse_formatacao_responsive');
var slides111 = document.querySelectorAll('.img_carousse_formatacao_responsive img');
var prevBtn111 = document.querySelector('#left');
var nextBtn111 = document.querySelector('#right');
var slideIndex111 = 0;

prevBtn111.addEventListener('click', showPrevSlide111);
nextBtn111.addEventListener('click', showNextSlide111);

setInterval(showNextSlide111, 8000);

function showPrevSlide111() {
  slideIndex111--;
  if (slideIndex111 < 0) {
    slideIndex111 = slides111.length - 1;
  }
  updateSlide111();
}



function showNextSlide111() {
  slideIndex111++;
  if (slideIndex111 >= slides111.length) {
    slideIndex111 = 0;
  }
  updateSlide111();
}

function updateSlide111() {
  var slideWidth111 = slides111[0].clientWidth;
  var transformValue111 = -slideIndex111 * slideWidth111;
  document.querySelector('.img_carousse_formatacao_responsive').style.transform = 'translateX(' + transformValue111 + 'px)';
}

// images[contador].scrollIntoView({
  //  inline: "center"
  // })