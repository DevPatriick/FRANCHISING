var carouselb = document.querySelectorAll('.img_depoimentos');
var slidesb = document.querySelectorAll('.img_depoimentos img');
var prevBtnb = document.querySelector('#btnL');
var nextBtnb = document.querySelector('#btnR');
var slideIndexb = 0;

prevBtnb.addEventListener('click', showPrevSlideb);
nextBtnb.addEventListener('click', showNextSlideb);

setInterval(showNextSlideb, 8000);

function showPrevSlideb() {
  slideIndexb--;
  if (slideIndexb < 0) {
    slideIndexb = slidesb.length - 1;
  }
  updateSlideb();
}



function showNextSlideb() {
  slideIndexb++;
  if (slideIndexb >= slidesb.length) {
    slideIndexb = 0;
  }
  updateSlideb();
}

function updateSlideb() {
  var slideWidthb = slidesb[0].clientWidth;
  var transformValueb = -slideIndexb * slideWidthb;
  document.querySelector('.img_depoimentos').style.transform = 'translateX(' + transformValueb + 'px)';
}

// images[contador].scrollIntoView({
  //  inline: "center"
  // })