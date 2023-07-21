function tocaSom (seletorAudio) { //função para tocar os sons do audio de acordo com o id
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') { //se o elemento não for nulo e igual a 'audio', ele toca o som
        elemento.play();
    } else { //caso o comando acima não aoconteça, vai aparecer a mensagem abaixo
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla'); //faz uma lista dos botões com a classe 'tecla'

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];  //associa o numero da tecla com o numero do contador
    const instrumento = tecla.classList[1]; //pega todas as classes da tecla selecionada acima e escolhe a que esta em segundo(1)
    const idAudio = `#som_${instrumento}`;  //template string; Pega o id do audio de acordo com a classe escolhida acima

    tecla.onclick = function () { //essa função faz com que, quando a tecla de acordo com seu número, for clicada, ela usa a função 'tocaSom' e atribui o id do audio que fizemos antes
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) { //tecla segurada para baixo durante o clique
        if (evento.code === 'Space' || evento.code === 'Enter') { //se o evento de segurar a tecla para baixo for com espaço ou enter, ele insere a class 'ativa' para que fique vermelha
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () { //tecla para cima após o clique
        tecla.classList.remove('ativa') //remove a classe 'ativa' após a tecla ser solta
    }
}