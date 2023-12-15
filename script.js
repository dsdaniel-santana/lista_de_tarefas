function addTask() {
    // Obtém o elemento de entrada de tarefa
    const inputTask = document.getElementById("newTask");
    // Obtém o texto da tarefa, removendo espaços em branco no início e no final
    const textTask = inputTask.value.trim();

    // Verifica se o texto da tarefa não está vazio
    if (textTask !== "") {
        // Obtém a lista de tarefas
        const taskList = document.getElementById("taskList"); // Corrigido o nome do ID

        // Adiciona um novo item à lista de tarefas
        taskList.innerHTML += `
            <li>
                <span>${textTask}</span>
                <button onclick="markFinished(this)">Done</button> <!-- Corrigido o nome da função -->
                <button onclick="deleteTask(this)">Delete</button>
            </li>
        `;

        // Limpa o campo de entrada após adicionar a tarefa
        inputTask.value = "";
    }
}

function markFinished(buttonDone) {
    const task = buttonDone.parentNode;
    //adciona a classe "completed" para mudar o estilo
    task.classList.toggle("completed");

    if(task.classList.contains("completed")){
        //move para o final da lista
        document.getElementById("taskList").appendChild(task);

        //remove os botões da tarefa concluida
        const botoes = task.querySelectorAll("button");
        botoes.forEach(botao => buttonDelete.remove => {
            
        });
    }


    // Aqui você implementaria a lógica para marcar a tarefa como concluída
    // Pode ser algo como adicionar uma classe ao elemento <li> correspondente
    // ou realizar outras ações relacionadas à marcação como concluída.
    // Esta função será chamada quando o botão "Done" for clicado.
}

function deleteTask(buttonDelete) {
    buttonDelete.parentNode.remove();
    // Aqui você implementaria a lógica para excluir a tarefa
    // Pode ser algo como remover o elemento <li> correspondente da lista.
    // Esta função será chamada quando o botão "Delete" for clicado.
}
