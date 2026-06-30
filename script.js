/* ==========================================================
   ENCONTRO COM DEUS
   Landing Page Premium
   Desenvolvido em JavaScript puro
==========================================================*/

/*==============================
 MENU AO ROLAR
==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background="#050505";
        header.style.boxShadow="0 10px 30px rgba(0,0,0,.4)";

    }else{

        header.style.background="rgba(0,0,0,.45)";
        header.style.boxShadow="none";

    }

});

/*==============================
SCROLL REVEAL
==============================*/

const reveals=document.querySelectorAll(

".card,.timeline div,.sobre .texto,.sobre .imagem,.cta,.versiculo,.item"

);

const reveal=()=>{

    const trigger=window.innerHeight*0.88;

    reveals.forEach(el=>{

        const top=el.getBoundingClientRect().top;

        if(top<trigger){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

/*==============================
FAQ ACCORDION
==============================*/

const perguntas=document.querySelectorAll(".item");

perguntas.forEach(item=>{

const titulo=item.querySelector("h3");

const texto=item.querySelector("p");

texto.style.display="none";

titulo.addEventListener("click",()=>{

const aberto=texto.style.display==="block";

document.querySelectorAll(".item p").forEach(p=>{

p.style.display="none";

});

if(!aberto){

texto.style.display="block";

}

});

});

/*==============================
SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(

this.getAttribute("href")

).scrollIntoView({

behavior:"smooth"

});

});

});

/*==============================
BOTÃO VOLTAR AO TOPO
==============================*/

const voltar=document.createElement("div");

voltar.innerHTML="↑";

voltar.className="topo";

document.body.appendChild(voltar);

voltar.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

voltar.classList.add("ativo");

}else{

voltar.classList.remove("ativo");

}

});

/*==============================
CONTADOR REGRESSIVO
==============================*/

// ALTERE A DATA DO EVENTO

const dataEvento=new Date("2026-08-14T19:00:00");

const contador=document.createElement("section");

contador.className="contador";

contador.innerHTML=`

<h2>Faltam apenas</h2>

<div class="tempo">

<div>

<span id="dias">00</span>

<small>Dias</small>

</div>

<div>

<span id="horas">00</span>

<small>Horas</small>

</div>

<div>

<span id="minutos">00</span>

<small>Minutos</small>

</div>

<div>

<span id="segundos">00</span>

<small>Segundos</small>

</div>

</div>

`;

document.querySelector(".cta").before(contador);

function atualizar(){

const agora=new Date();

const diferenca=dataEvento-agora;

if(diferenca<=0){

return;

}

const dias=Math.floor(diferenca/(1000*60*60*24));

const horas=Math.floor((diferenca%(1000*60*60*24))/(1000*60*60));

const minutos=Math.floor((diferenca%(1000*60*60))/(1000*60));

const segundos=Math.floor((diferenca%(1000*60))/1000);

document.getElementById("dias").innerHTML=dias;

document.getElementById("horas").innerHTML=horas;

document.getElementById("minutos").innerHTML=minutos;

document.getElementById("segundos").innerHTML=segundos;

}

setInterval(atualizar,1000);

atualizar();

/*==============================
EFEITO NOS BOTÕES
==============================*/

document.querySelectorAll(".btn-primary").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

/*==============================
EFEITO PARALLAX
==============================*/

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

hero.style.backgroundPositionY=window.scrollY*0.45+"px";

});

/*==============================
DIGITAÇÃO DO TÍTULO
==============================*/

const titulo=document.querySelector(".hero h1");

const textoOriginal=titulo.innerHTML;

titulo.innerHTML="";

let i=0;

function escrever(){

if(i<textoOriginal.length){

titulo.innerHTML+=textoOriginal.charAt(i);

i++;

setTimeout(escrever,18);

}

}

window.onload=escrever;
