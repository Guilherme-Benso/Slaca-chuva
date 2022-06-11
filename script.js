function MostraTexto() {
    var pontos = document.getElementById("pontos");
    var maistexto = document.getElementById("mais");
    var botaovermais = document.getElementById("vermais");
   
    
    if (pontos.style.display === "none") {
        pontos.style.display="inline";
        maistexto.style.display="none";
        botaovermais.style.display="inline";
        

        
    }else{
        pontos.style.display="none";
        maistexto.style.display="inline";
        botaovermais.style.display="none";
    }
}


/**? Mostra o histórico de comentários  */

function mostracomentario() {
    var autor = document.getElementById("autor");
    var usuario = document.getElementById("usuario");
    var coautor1 = document.getElementById("coautor01");
    var coautor2 =document.getElementById("coautor02");
    
    if (autor.style.display === "none") {
        autor.style.display="inline";
        usuario.style.display="inline";
        coautor1.style.display="inline";
        coautor2.style.display="inline";
        
    }else{
        autor.style.display="none";
        usuario.style.display="none";
        coautor1.style.display="none";
        coautor2.style.display="none";
        
    }
}

/**? dá os nexts para criar nova discussão  */

        const first = document.querySelector('#discussao-init1');
        const second = document.querySelector('.init02');
        const final = document.querySelector('.init03');

function Go(currentStep, nextStep){
    let Dnone, Dblock;

    if (currentStep == 1) {
        Dnone = first;
    }
    else if (currentStep == 2) {
        Dnone = second;
    }
    else{
        Dnone = final;
    }

    Dnone.style.display = "none";
    
    if (nextStep == 1) {
        Dblock = first;
    }
    else if (nextStep == 2) {
        Dblock = second;
    }
    else{
        Dblock  = final;

    }
    Dblock.style.display = 'flex';

}


function mostramenu() {
    var autor = document.getElementById("autor");
    var usuario = document.getElementById("usuario");
    
    
    if (autor.style.display === "none") {
        autor.style.display="inline";
        usuario.style.display="inline";
        
        
    }else{
        autor.style.display="none";
        usuario.style.display="none";
        
        
    }
}

