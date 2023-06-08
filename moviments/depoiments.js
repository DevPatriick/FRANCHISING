const btnDireito = document.querySelector('#btnR')
const btnEsquerdo = document.querySelector('#btnL')
const direito = document.querySelectorAll('.depo_A')

let currentList = 0;

function hideSlider(){
 direito.forEach(item => item.classList.remove('on'))
}

function showSlider(){
 direito[currentList].classList.add('on')
} 

function nextSlider(){
 hideSlider()
 if(currentList === direito.length -1){
     currentList = 0 
 } else {
     currentList++
 }

 showSlider()
}

function backSlider(){
 hideSlider()
 if(currentList === 0){
     currentList = direito.length -1
 } else {
     currentList--
 }

 showSlider()
}

setInterval(function(){
nextSlider()
}, 10000)

btnDireito.addEventListener('click', nextSlider, console.log('next') )
btnEsquerdo.addEventListener('click', backSlider, console.log('back') )
