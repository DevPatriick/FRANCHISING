let abrira = document.querySelector("#down");
let fechara = document.querySelector("#up");
const conteudob = document.querySelector("#nichob");
const conteudoc = document.querySelector("#nichoc");
const conteudod = document.querySelector("#nichod");
const conteudoe = document.querySelector("#nichoe");
const conteudof = document.querySelector("#nichof");
const conteudog = document.querySelector("#nichog");
const conteudoh = document.querySelector("#nichoh");
const conteudoi = document.querySelector("#nichoi");
const conteudoj = document.querySelector("#nichoj");
const conteudok = document.querySelector("#nichok");


abrira.onclick = function open_conteudoa2(){
fechara.style.display='block';
abrira.style.display='none';
conteudof.style.display='block';
conteudob.style.display='block';
conteudoc.style.display='block';
conteudod.style.display='block';
conteudoe.style.display='block';
conteudog.style.display='block';

conteudoh.style.display='block';
conteudoi.style.display='block';
conteudoj.style.display='block';
conteudok.style.display='block';

};

fechara.onclick = function close_conteudoa2(){
fechara.style.display='none';
abrira.style.display='block';
conteudof.style.display='none';
conteudob.style.display='none';
conteudoc.style.display='none';
conteudod.style.display='none';
conteudoe.style.display='none';
conteudog.style.display='none';
conteudoh.style.display='none';
conteudoi.style.display='none';
conteudoj.style.display='none';
conteudok.style.display='none';
};

abrira.addEventListener('click', open_conteudoa2());
fechara.addEventListener('click', close_conteudoa2())

console.log(abrira)
console.log(fechara)
