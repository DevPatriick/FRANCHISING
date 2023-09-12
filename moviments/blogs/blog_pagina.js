const blog_mercado = document.querySelector("#blog_mercado");
const bnt_mercado = document.querySelector("#mercado");

const blog_curiosidades = document.querySelector("#blog_curiosidades");
const bnt_curiosidade = document.querySelector("#curiosidades");

const blog_cases = document.querySelector("#blog_cases");
const bnt_cases = document.querySelector("#cases");

const blog_eventos = document.querySelector("#blog_eventos");
const bnt_eventos = document.querySelector("#eventos");

const blog_conteudo = document.querySelector("#blog_conteudo");
const bnt_conteudo = document.querySelector("#conteudo");

const blog_principal = document.querySelector("#blogs_franchising")

function blog_mercado_a(){
    if(blog_mercado.style.display="none"){
        blog_principal.style.display="none"
        blog_mercado.style.display="block"
        blog_curiosidades.style.display="none"
        blog_cases.style.display="none"
        blog_eventos.style.display="none";
        blog_conteudo.style.display="none"
    }
}

function blog_curiosidades_a(){
    if(blog_curiosidades.style.display="none"){
        blog_principal.style.display="none"
        blog_mercado.style.display="none"
        blog_curiosidades.style.display="block"
        blog_cases.style.display="none"
        blog_eventos.style.display="none";
        blog_conteudo.style.display="none"
    }
}

function blog_cases_a(){
    if(blog_cases.style.display="none"){
        blog_principal.style.display="none"
        blog_mercado.style.display="none"
        blog_curiosidades.style.display="none"
        blog_cases.style.display="block"
        blog_eventos.style.display="none";
        blog_conteudo.style.display="none"
    }
}

function blog_conteudo_a(){
    if(blog_conteudo.style.display="none"){
        blog_principal.style.display="none"
        blog_mercado.style.display="none"
        blog_curiosidades.style.display="none"
        blog_cases.style.display="none"
        blog_eventos.style.display="none";
        blog_conteudo.style.display="block"
    }
}

function blog_eventos_a(){
    if(blog_eventos.style.display="none"){
        blog_principal.style.display="none"
        blog_mercado.style.display="none"
        blog_curiosidades.style.display="none"
        blog_cases.style.display="none"
        blog_eventos.style.display="block";
        blog_conteudo.style.display="none"
    }
}


bnt_mercado.addEventListener('click', blog_mercado_a);
bnt_curiosidade.addEventListener('click', blog_curiosidades_a);
bnt_cases.addEventListener('click', blog_cases_a);
bnt_conteudo.addEventListener('click', blog_conteudo_a);
bnt_eventos.addEventListener('click', blog_eventos_a);
