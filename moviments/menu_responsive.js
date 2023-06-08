let abrir = document.querySelector("#open");
let fechar = document.querySelector("#close");
const conteudo = document.querySelector(".res");

abrir.onclick = function open_conteudo(){
fechar.style.display='block'
abrir.style.display='none'
conteudo.style.display='block'
};

fechar.onclick = function close_conteudo(){
fechar.style.display='none';
abrir.style.display='block'
conteudo.style.display='none'
};

abrir.addEventListener('click', open_conteudo());
fechar.addEventListener('click', close_conteudo())

console.log(open_conteudo());
console.log(close_conteudo())

console.log(abrir)
console.log(fechar)
console.log(conteudo)