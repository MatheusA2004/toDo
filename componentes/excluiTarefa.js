const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button');

    botaoDeleta.innerText = 'deletar';
    botaoDeleta.addEventListener('click', deletarTarefa);

    return botaoDeleta;
}

const deletarTarefa = (evento) => {
    const deletaEvento = evento.target;

    const tarefaDeletada = deletaEvento.parentElement;
    tarefaDeletada.remove();
}


export default BotaoDeleta;