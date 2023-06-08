const blog_A = document.querySelector('.next');
const mais = document.querySelector("#mais");
const menos = document.querySelector("#menos");
const mais2 = document.querySelector("#mais2");
const menos2 = document.querySelector("#menos2");


function vermais(){
    blog_A.style.display='block';
    blog_A.style.display='flex';
    mais.style.display='none';
    menos.style.display='block';
    mais2.style.display='block';

}

function vermenos(){
    blog_A.style.display='none';
    mais.style.display='block';
    menos.style.display='none';
    mais2.style.display='none';
    menos2.style.display='none';
}

mais.addEventListener('click', vermais);
menos.addEventListener('click', vermenos);


const mais3 = document.querySelector("#mais2");
const menos3 = document.querySelector("#menos2");
const blog_A2 = document.querySelector('.nexts');


function vermais2(){
    blog_A2.style.display='block';
    blog_A2.style.display='flex';
    mais2.style.display='none';
    menos2.style.display='block';
    mais2.style.display='none';

}

function vermenos2(){
    blog_A2.style.display='none';
    mais3.style.display='block';
    menos2.style.display='none';
    mais2.style.display='block';
    mais3.style.display='none';
}

mais2.addEventListener('click', vermais2);
menos2.addEventListener('click', vermenos2);




const blog_A1 = document.querySelector('.next1');
const mais1 = document.querySelector("#mais1");
const menos1 = document.querySelector("#menos1");
const mais21 = document.querySelector("#mais21");
const menos21 = document.querySelector("#menos21");


function vermais1(){
    blog_A1.style.display='block';
    mais1.style.display='none';
    menos1.style.display='block';
    mais21.style.display='block';

}

function vermenos1(){
    blog_A1.style.display='none';
    mais1.style.display='block';
    menos1.style.display='none';
    mais21.style.display='none';
    menos21.style.display='none';
}

mais1.addEventListener('click', vermais1);
menos1.addEventListener('click', vermenos1);


const mais31 = document.querySelector("#mais21");
const menos31 = document.querySelector("#menos21");
const blog_A21 = document.querySelector('.nexts1');


function vermais21(){
    blog_A21.style.display='block';
    mais21.style.display='none';
    menos21.style.display='block';
    mais21.style.display='none';

}

function vermenos21(){
    blog_A21.style.display='none';
    mais31.style.display='block';
    menos21.style.display='none';
    mais21.style.display='block';
    mais31.style.display='none';
}

mais21.addEventListener('click', vermais21);
menos21.addEventListener('click', vermenos21);