const lista = document.querySelector("[data-list]");

const novaTarefa = document.querySelector("[data-form-button]");

const criarTarefa = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;  
    console.log(valor);
}

// Evento
novaTarefa.addEventListener('click', criarTarefa);

// Criar uma nova tarefa



// Espera um evento, e o que vai acontecer

// Eventos  
// Qual o tipo do evento - click
// O que vai acontecer - nova tarefa 
// Onde irá ocorrer o evento - button










