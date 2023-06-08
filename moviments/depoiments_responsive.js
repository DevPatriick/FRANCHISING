var carouself = document.querySelectorAll('.img_depoimentosres');
var slidesf = document.querySelectorAll('.img_depoimentosres img');
var prevBtnf = document.querySelector('#btnLL');
var nextBtnf = document.querySelector('#btnRR');
var slideIndexf = 0;

prevBtnf.addEventListener('click', showPrevSlidef);
nextBtnf.addEventListener('click', showNextSlidef);

setInterval(showNextSlidef, 8000);

function showPrevSlidef() {
  slideIndexf--;
  if (slideIndexf < 0) {
    slideIndexf = slidesf.length - 1;
  }
  updateSlidef();
}



function showNextSlidef() {
  slideIndexf++;
  if (slideIndexf >= slidesf.length) {
    slideIndexf = 0;
  }
  updateSlidef();
}

function updateSlidef() {
  var slideWidthf = slidesf[0].clientWidth;
  var transformValuef = -slideIndexf * slideWidthf;
  document.querySelector('.img_depoimentosres').style.transform = 'translateX(' + transformValuef + 'px)';
}

// images[contador].scrollIntoView({
  //  inline: "center"
  // })