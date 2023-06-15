let nicho_a = document.querySelector('#nicho_a');
let bntNicho_a = document.querySelector('#nichoa');

let nicho_b = document.querySelector('#nicho_b');
let bntNicho_b = document.querySelector('#nichob');

let nicho_c = document.querySelector('#nicho_c');
let bntNicho_c = document.querySelector('#nichoc');

let nicho_d = document.querySelector('#nicho_d');
let bntNicho_d = document.querySelector('#nichod');

let nicho_e = document.querySelector('#nicho_e');
let bntNicho_e = document.querySelector('#nichoe');


let nicho_f = document.querySelector('#nicho_f');
let bntNicho_f = document.querySelector('#nichof');

let nicho_g = document.querySelector('#nicho_g');
let bntNicho_g = document.querySelector('#nichog');



let nichos = document.querySelector('#nichos');
let nicho = document.querySelector('.alt');



function mostrarNichoA(){
    if(nicho_a.style.display='none'){
        nicho_b.style.display='none'
        nicho_c.style.display='none'
        nicho_d.style.display='none'
        nicho_f.style.display='none'
        nicho_a.style.display='block'
        nichos.style.display='none'
        nicho.style.display='none'
        nicho_e.style.display='none'

        nicho_g.style.display='none'
    }
}

function mostrarNichoB(){
    if(nicho_b.style.display='none'){
        nicho_a.style.display='none'
        nicho_c.style.display='none'
        nicho_d.style.display='none'
        nicho_b.style.display='block'
        nichos.style.display='none'
        nicho.style.display='none'
        nicho_f.style.display='none'
        nicho_e.style.display='none'
        nicho_g.style.display='none'
    }
}

function mostrarNichoC(){
    if(nicho_c.style.display='none'){
        nicho_b.style.display='none'
        nicho_a.style.display='none'
        nicho_d.style.display='none'
        nicho_c.style.display='block'
        nichos.style.display='none'
        nicho.style.display='none'
        nicho_f.style.display='none'
        nicho_e.style.display='none'
        nicho_g.style.display='none'
    }
}

function mostrarNichoD(){
    if(nicho_d.style.display='none'){
        nicho_b.style.display='none'
        nicho_c.style.display='none'
        nicho_a.style.display='none'
        nicho_d.style.display='block'
        nichos.style.display='none'
        nicho.style.display='none'
        nicho_f.style.display='none'
        nicho_e.style.display='none'
        nicho_g.style.display='none'
    }
}

function mostrarNichoE(){
    if(nicho_e.style.display='none'){
        nicho_b.style.display='none'
        nicho_c.style.display='none'
        nicho_a.style.display='none'
        nicho_d.style.display='none'
        nichos.style.display='none'
        nicho.style.display='none'
        nicho_f.style.display='none'
        nicho_e.style.display='block'
        nicho_g.style.display='none'
    }
}

function mostrarNichoF(){
    if(nicho_f.style.display='none'){
        nicho_b.style.display='none'
        nicho_c.style.display='none'
        nicho_a.style.display='none'
        nicho_d.style.display='none'
        nichos.style.display='none'
        nicho.style.display='none'
        nicho_f.style.display='block'
        nicho_e.style.display='none'
        nicho_g.style.display='none'
    }
}

function mostrarNichoG(){
    if(nicho_g.style.display='none'){
        nicho_b.style.display='none'
        nicho_c.style.display='none'
        nicho_a.style.display='none'
        nicho_d.style.display='none'
        nichos.style.display='none'
        nicho.style.display='none'
        nicho_f.style.display='none'
        nicho_e.style.display='none'
        nicho_g.style.display='block'
    }
}

bntNicho_a.addEventListener('click', mostrarNichoA);
bntNicho_b.addEventListener('click', mostrarNichoB);
bntNicho_c.addEventListener('click', mostrarNichoC);
bntNicho_d.addEventListener('click', mostrarNichoD);
bntNicho_e.addEventListener('click', mostrarNichoE);
bntNicho_f.addEventListener('click', mostrarNichoF);
bntNicho_g.addEventListener('click', mostrarNichoG);
