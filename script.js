const botaoNao = document.getElementById('nao');

function moverBotao() {
    const larguraTela = window.innerWidth - botaoNao.offsetWidth;
    const alturaTela = window.innerHeight - botaoNao.offsetHeight;

    const novaPosicaoX = Math.floor(Math.random() * larguraTela);
    const novaPosicaoY = Math.floor(Math.random() * alturaTela);

    botaoNao.style.position = 'absolute';
    botaoNao.style.left = novaPosicaoX + 'px';
    botaoNao.style.top = novaPosicaoY + 'px';
}
