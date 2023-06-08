var carousela = document.querySelectorAll('.img_carousse_responsive');
var slidesa = document.querySelectorAll('.img_carousse_responsive img');
var prevBtna = document.querySelector('#left3');
var nextBtna = document.querySelector('#right3');
var slideIndexa = 0;

prevBtna.addEventListener('click', showPrevSlidea);
nextBtna.addEventListener('click', showNextSlidea);

setInterval(showNextSlidea, 8000);

function showPrevSlidea() {
  slideIndexa--;
  if (slideIndexa < 0) {
    slideIndexa = slidesa.length - 1;
  }
  updateSlidea();
}



function showNextSlidea() {
  slideIndexa++;
  if (slideIndexa >= slidesa.length) {
    slideIndexa = 0;
  }
  updateSlidea();
}

function updateSlidea() {
  var slideWidtha = slidesa[0].clientWidth;
  var transformValuea = -slideIndexa * slideWidtha;
  document.querySelector('.img_carousse_responsive').style.transform = 'translateX(' + transformValuea + 'px)';
}

// images[contador].scrollIntoView({
  //  inline: "center"
  // })