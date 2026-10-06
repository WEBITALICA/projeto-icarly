




   // ==========================================
// FUNCIONALIDADE 1 - REPRODUÇÃO DOS VÍDEOS
// ==========================================

let botoesVideos = document.querySelectorAll(".video-card button");

botoesVideos.forEach(function(botao) {

    botao.addEventListener("click", function() {

        let card = botao.parentElement;
        let video = card.querySelector("video");

        video.play();

        botao.textContent = "Você está assistindo iCarly";

    });

}); 
    
     // ==========================================
// FUNCIONALIDADE 2 - RELÓGIO DE GRAVAÇÃO
// ==========================================  

let cardsVideos = document.querySelectorAll(".video-card");

cardsVideos.forEach(function(card) {

    let video = card.querySelector("video");
    let relogio = card.querySelector(".relogio");
    let indicadorRec = card.querySelector(".gravacao");

    video.addEventListener("timeupdate", function() {

        let minutos = Math.floor(video.currentTime / 60);
        let segundos = Math.floor(video.currentTime % 60);

        if (minutos < 10) {
            minutos = "0" + minutos;
        }

        if (segundos < 10) {
            segundos = "0" + segundos;
        }

        relogio.textContent = minutos + ":" + segundos;

    });

    video.addEventListener("play", function() {

        indicadorRec.classList.add("gravando");

    });

    video.addEventListener("pause", function() {

        indicadorRec.classList.remove("gravando");

    });

    video.addEventListener("ended", function() {

        indicadorRec.classList.remove("gravando");

    });

}); 

  //FUNCIONALIDADE 3 - ROLAGEM ATÉ OS VÍDEOS//

let botaoBanner = document.querySelector(".botao-banner");
let secaoVideos = document.querySelector(".videos");

function irParaVideos(){

    secaoVideos.scrollIntoView({
        behavior: "smooth"
    });

} 
botaoBanner.addEventListener("click", irParaVideos); 


// FUNCIONALIDADE 4- LER MAIS/LER MENOS  //

let mostrar = document.querySelector(".ler-mais");

let textoCompleto = document.querySelector(".texto-completo");

let textoVisivel = false;

function mostrarNoticia(){

    if(textoVisivel == false){

        textoCompleto.style.display = "block";

        textoVisivel = true;

    }else{

        textoCompleto.style.display = "none";

        textoVisivel = false;

    }

}  
   mostrar.addEventListener("click",mostrarNoticia);
 
// ==========================================
// FUNCIONALIDADE 5 - GALERIA
// ==========================================

let fotos = document.querySelectorAll(".fotos img");

let modal = document.querySelector(".modal");

let imagemAmpliada = document.querySelector(".imagem-ampliada");

let fechar = document.querySelector(".fechar");


function abrirImagem(event){

    let fotoClicada = event.currentTarget;

    imagemAmpliada.src = fotoClicada.src;

    modal.style.display = "flex";

}


function fecharImagem(){

    modal.style.display = "none";

}


fotos.forEach(function(foto){

    foto.addEventListener("click", abrirImagem);

});


fechar.addEventListener("click", fecharImagem);
 
// ==========================================
// FUNCIONALIDADE 6 - ROLAGEM ATÉ O ELENCO
// ==========================================

let linkElenco = document.querySelector(".link-elenco");

let secaoElenco = document.querySelector(".elenco");


function irParaElenco(event){ 

    event.preventDefault();

    secaoElenco.scrollIntoView({

        behavior: "smooth"

    });

}


linkElenco.addEventListener("click", irParaElenco);

 // ==========================================
// FUNCIONALIDADE 7 - ROLAGEM ATÉ O SOBRE
// ==========================================

let linkSobre = document.querySelector(".link-sobre");
let secaoSobre = document.querySelector(".sobre");

function irParaSobre(event) {
    event.preventDefault();

    secaoSobre.scrollIntoView({
        behavior: "smooth"
    });
}

linkSobre.addEventListener("click", irParaSobre);  


// ==========================================
// FUNCIONALIDADE 8- ROLAGEM ATÉ OS VÍDEOS
// ==========================================

let linkVideos = document.querySelector(".link-videos");


function irParaVideosMenu(event) {

    event.preventDefault();

    secaoVideos.scrollIntoView({
        behavior: "smooth"
    });

}

linkVideos.addEventListener("click", irParaVideosMenu);



// ==========================================
// FUNCIONALIDADE 9 - ROLAGEM ATÉ A GALERIA
// ==========================================

let linkFotos = document.querySelector(".link-fotos");  
let secaoGaleria = document.querySelector(".galeria");

function irParaGaleria(event) {
    event.preventDefault();

    secaoGaleria.scrollIntoView({
        behavior: "smooth"
    });
}

linkFotos.addEventListener("click", irParaGaleria); 

//============================================
//funcionalidade 10 - ROLAGEM BLOG 
//=========================================

let linkBlog = document.querySelector(".link-blog"); 
let secaoBlog = document.querySelector(".blog");

function irParaBlog(event) {
    event.preventDefault();

    secaoBlog.scrollIntoView({
        behavior: "smooth"
    });
}

linkBlog.addEventListener("click", irParaBlog);