
const criarTarefa = (evento) => {
    evento.preventDefault();
    const lista = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;  

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class= "content">${valor}</p>`
    
    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConclui());
    lista.appendChild(tarefa);
    

    input.value = "";
}

// Evento
const novaTarefa = document.querySelector("[data-form-button]");
novaTarefa.addEventListener('click', criarTarefa);

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





// Eventos  
// Qual o tipo do evento - click
// O que vai acontecer - nova tarefa 
// Onde irá ocorrer o evento - button










