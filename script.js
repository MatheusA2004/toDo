
const criarTarefa = (evento) => {
    evento.preventDefault();
    
    const lista = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;  
    
    const tarefa = document.createElement('li');
    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo

    lista.appendChild(tarefa)
    
    input.value = " ";
    
    
    
}

// Evento
const novaTarefa = document.querySelector("[data-form-button]");
novaTarefa.addEventListener('click', criarTarefa);


// Eventos  
// Qual o tipo do evento - click
// O que vai acontecer - nova tarefa 
// Onde irá ocorrer o evento - button










