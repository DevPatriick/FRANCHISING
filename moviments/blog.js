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
    mais40.style.display='none';
    mais30.style.display='none';
}

mais.addEventListener('click', vermais);
menos.addEventListener('click', vermenos);

////////////////////////////////////////////////////////////////////////////


const mais3 = document.querySelector("#mais2");
const menos3 = document.querySelector("#menos2");
const blog_A2 = document.querySelector('.nexts');
const mais30 = document.querySelector("#mais3");


function vermais2(){
    blog_A2.style.display='block';
    blog_A2.style.display='flex';
    mais2.style.display='none';
    menos2.style.display='block';
    mais2.style.display='none';
    mais30.style.display='block'

}

function vermenos2(){
    blog_A2.style.display='none';
    mais3.style.display='block';
    menos2.style.display='none';
    mais2.style.display='block';
    mais3.style.display='none';
    mais30.style.display='block';
    mais40.style.display='none';
}

mais2.addEventListener('click', vermais2);
menos2.addEventListener('click', vermenos2);

///////////////////////////////////////////////////////////////////////////////


const mais4 = document.querySelector("#mais3");
const menos4 = document.querySelector("#menos3");
const blog_A3 = document.querySelector('.nextss');
const mais40 = document.querySelector("#mais4");


function vermais3(){
    blog_A3.style.display='block';
    blog_A3.style.display='flex';
    mais4.style.display='none';
    menos4.style.display='block'
    mais40.style.display='block';
}

function vermenos3(){
    blog_A3.style.display='none';
    mais4.style.display='block';
    menos4.style.display='none';
    mais40.style.display='none';
}

mais4.addEventListener('click', vermais3);
menos4.addEventListener('click', vermenos3);

//////////////////////////////////////////////////////////////////////////////////

const mais5 = document.querySelector("#mais4");
const menos5 = document.querySelector("#menos4");
const blog_A4 = document.querySelector('.nextsss');
const mais50 = document.querySelector("#mais5");


function vermais4(){
    blog_A4.style.display='block';
    blog_A4.style.display='flex';
    mais5.style.display='none';
    menos5.style.display='block'
    mais50.style.display='none';
}

function vermenos4(){
    blog_A4.style.display='none';
    mais5.style.display='block';
    menos5.style.display='none';
    mais50.style.display='none';
}

mais5.addEventListener('click', vermais4);
menos5.addEventListener('click', vermenos4);

///////////////////////////////////////////////////////////////////////////////




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
    maiss.style.display='none';
 maisss.style.display='none'
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

///////////////////////////////////////////////////////////////////////////////

const mais31 = document.querySelector("#mais21");
const menos31 = document.querySelector("#menos21");
const blog_A21 = document.querySelector('.nexts1');
const mais311 = document.querySelector('#mais31');


function vermais21(){
    blog_A21.style.display='block';
    mais21.style.display='none';
    menos21.style.display='block';
    mais21.style.display='none';
    mais311.style.display='block';

}

function vermenos21(){
    blog_A21.style.display='none';
    mais31.style.display='block';
    menos21.style.display='none';
    mais21.style.display='block';
    mais31.style.display='none';
}

mais31.addEventListener('click', vermais21);
menos31.addEventListener('click', vermenos21);


/////////////////////////////////////////////////////////////////////////


const blog_b = document.querySelector('.nextss1');
const maiss = document.querySelector('#mais31');
const menoss = document.querySelector('#menos31');
const m = document.querySelector('#mais41');

function vermais31(){
    blog_b.style.display='block';
    maiss.style.display='none';
    menoss.style.display='block';
    m.style.display='block'
}

maiss.addEventListener('click', vermais31)
menoss.addEventListener('click', vermenos31)

function vermenos31(){
    blog_b.style.display='none';
    maiss.style.display='block';
    menoss.style.display='none';
    m.style.display='none'
}


///////////////////////////////////////////////////////////////


const blog_c = document.querySelector('.nextsss1');
const maisss = document.querySelector('#mais41');
const menosss = document.querySelector('#menos41');

function vermais41(){
    blog_c.style.display='block';
    maisss.style.display='none';
    menosss.style.display='block';
}

maisss.addEventListener('click', vermais41)
menosss.addEventListener('click', vermenos41)

function vermenos41(){
    blog_c.style.display='none';
    maisss.style.display='block';
    menosss.style.display='none';
}
