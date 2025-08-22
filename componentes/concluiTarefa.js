const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');
    
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'concluir'


    botaoConclui.addEventListener('click', concluirTarefa);


    return botaoConclui;

}


const concluirTarefa = (evento) => {
    const eventoAcionado = evento.target

    const tarefaCompleta = eventoAcionado.parentElement

    tarefaCompleta.classList.toggle('done');
}


export default BotaoConclui;